# Part of Newlogic G2P. See LICENSE file for full copyright and licensing details.
import logging

from odoo import _, fields, models
from odoo.exceptions import UserError

_logger = logging.getLogger(__name__)


class G2PIssueIDPassWizard(models.TransientModel):
    _name = "g2p.issue.idpass.wizard"
    _description = "Issue ID Pass Wizard"

    idpass_id = fields.Many2one("g2p.id.pass", "IDPass ID")
    registrant_id = fields.Many2one("res.partner", "Registrant ID")

    def issue_idpass(self):
        if self.idpass_id:
            vals = {"idpass": self.idpass_id.id}
            self.registrant_id.send_idpass_parameters(vals)
        else:
            raise UserError(_("There are no selected Template!"))
