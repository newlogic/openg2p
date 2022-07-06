# Part of Newlogic G2P. See LICENSE file for full copyright and licensing details.
import logging

from odoo import fields, models
from odoo.osv import expression

_logger = logging.getLogger(__name__)


class G2PGroup(models.Model):
    _inherit = "res.partner"

    kind = fields.Many2one("g2p.group.kind", "Kind")
    group_membership_ids = fields.One2many(
        "g2p.group.membership", "group", "Group Members"
    )
    is_partial_group = fields.Boolean("Partial Group")

    def count_individuals(self, kinds=None, criteria=None):
        self.ensure_one()
        # Only count active groups

        if self.group_membership_ids:
            domain = [("end_date", "=?", False), ("group", "=", self.id)]
            # To filter the membership by kinds, we first need to find the ID of the kinds we are interested in
            if kinds is not None:
                kind_ids = (
                    self.env["g2p.group.membership.kind"]
                    .search([("name", "in", kinds)])
                    .ids
                )
                domain.extend([("kind", "in", kind_ids)])
            # We can now filter the membership by this domain
            group_membership_ids = self.group_membership_ids.search(domain).ids
        else:
            return 0

        if len(group_membership_ids) == 0:
            return 0

        # Finally filter the res.partner that match the criteria and are related to the group
        domain = [("individual_membership_ids", "in", group_membership_ids)]
        if criteria is not None:
            domain.extend(criteria)
        return self.env["res.partner"].search_count(domain)

    def query_members_aggregate(
        self, membership_kind_domain=None, individual_domain=None
    ):
        domain = [("is_registrant", "=", True), ("is_group", "=", True)]
        query_obj = self.env["res.partner"]._where_calc(domain)

        membership_alias = query_obj.left_join(
            "res_partner", "id", "g2p_group_membership", "group", "id"
        )
        individual_alias = query_obj.left_join(
            membership_alias, "individual", "res_partner", "id", "individual"
        )
        membership_kind_rel_alias = query_obj.left_join(
            membership_alias,
            "id",
            "g2p_group_membership_g2p_group_membership_kind_rel",
            "g2p_group_membership_id",
            "id",
        )
        query_obj.left_join(
            membership_kind_rel_alias,
            "g2p_group_membership_kind_id",
            "g2p_group_membership_kind",
            "id",
            "id",
        )

        if membership_kind_domain:
            membership_query_obj = expression.expression(
                model=self.env["g2p.group.membership"],
                domain=membership_kind_domain,
                alias=membership_alias,
            ).query
            (
                membership_from_clause,
                membership_where_clause,
                membership_where_params,
            ) = membership_query_obj.get_sql()
            # _logger.info("SQL DEBUG: Membership Kind Query: From:%s, Where:%s, Params:%s" %
            #   (membership_from_clause,membership_where_clause,membership_where_params))
            query_obj.add_where(membership_where_clause, membership_where_params)

        if individual_domain:
            individual_query_obj = expression.expression(
                model=self.env["res.partner"],
                domain=individual_domain,
                alias=individual_alias,
            ).query
            (
                individual_from_clause,
                individual_where_clause,
                individual_where_params,
            ) = individual_query_obj.get_sql()
            # _logger.info("SQL DEBUG: Individual Query: From:%s, Where:%s, Params:%s" %
            #   (individual_from_clause,individual_where_clause,individual_where_params))
            query_obj.add_where(individual_where_clause, individual_where_params)

        select_query, select_params = query_obj.select()
        _logger.info(
            "SQL DEBUG: SQL query: %s, params: %s" % (select_query, select_params)
        )

        self._cr.execute(select_query, select_params)
        results = self._cr.dictfetchall()
        _logger.info("SQL DEBUG: SQL Query Result: %s" % results)

    def test_query(self):
        self.query_members_aggregate(
            membership_kind_domain=[("end_date", "=", None)],
            individual_domain=[
                ("gender", "=", "Female"),
                ("birthdate", "<", fields.Datetime.now()),
            ],
        )
        self.query_members_aggregate(
            membership_kind_domain=[("end_date", "=", None)],
            individual_domain=[("gender", "=", "Male")],
        )


class G2PGroupKind(models.Model):
    _name = "g2p.group.kind"
    _description = "Group Kind"
    _order = "id desc"

    name = fields.Char("Kind")
