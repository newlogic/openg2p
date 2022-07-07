import logging

from odoo.tests import tagged
from odoo.tests.common import TransactionCase

_logger = logging.getLogger(__name__)


@tagged("post_install", "-at_install")
class RegistrantTest(TransactionCase):
    @classmethod
    def setUpClass(cls):
        _logger.info("Registrant Testing: SETUP INITIALIZED")
        super(RegistrantTest, cls).setUpClass()

        # Initial Setup of Variables
        cls.registrant_1 = cls.env["res.partner"].create(
            {
                "family_name": "Doe",
                "given_name": "John",
                "name": "John Doe",
                "is_group": False,
                "is_registrant": True,
            }
        )
        cls.registrant_2 = cls.env["res.partner"].create(
            {
                "family_name": "Doe",
                "given_name": "Jane",
                "name": "Jane Doe",
                "is_group": False,
                "is_registrant": True,
            }
        )
        cls.group_1 = cls.env["res.partner"].create(
            {
                "name": "Group 1",
                "is_group": True,
                "is_registrant": True,
            }
        )
        cls.group_2 = cls.env["res.partner"].create(
            {
                "name": "Group 2",
                "is_group": True,
                "is_registrant": True,
            }
        )

    def test_add_members(self):
        _logger.info(
            "Registrant Testing: Adding Group Member: %s" % self.registrant_1.name
        )
        self.group_1.write(
            {"group_membership_ids": [(0, 0, {"individual": self.registrant_1.id})]}
        )
        message = "Registrant Testing: Adding Group Member Failed! %s %s" % (
            self.group_1.group_membership_ids[0].individual.id,
            self.registrant_1.id,
        )
        self.assertEqual(
            self.group_1.group_membership_ids[0].individual.id,
            self.registrant_1.id,
            message,
        )

    def test_assign_member(self):
        _logger.info(
            "Registrant Testing: Assigning Member to Group: %s" % self.group_2.name
        )
        self.registrant_2.write(
            {"individual_membership_ids": [(0, 0, {"group": self.group_2.id})]}
        )
        message = "Registrant Testing: Assigning Member to Group Failed! %s %s" % (
            self.registrant_2.individual_membership_ids[0].group.id,
            self.group_2.id,
        )
        self.assertEqual(
            self.registrant_2.individual_membership_ids[0].group.id,
            self.group_2.id,
            message,
        )
