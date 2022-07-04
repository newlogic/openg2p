from odoo.tests import tagged
from odoo.tests.common import TransactionCase


@tagged("post_install", "-at_install")
class ProgramTest(TransactionCase):
    @classmethod
    def setUpClass(cls):
        super(ProgramTest, cls).setUpClass()
        cls.registrant_1 = cls.env["res.partner"].create(
            {
                "family_name": "Doe",
                "given_name": "John",
            }
        )
        cls.group_1 = cls.env["res.partner"].create(
            {
                "name": "Group 1",
            }
        )
        cls.program_1 = cls.env["g2p.program"].create(
            {
                "name": "Test Program 1",
                "target_type": "individual",
            }
        )
        cls.program_2 = cls.env["g2p.program"].create(
            {
                "name": "Test Program 2",
                "target_type": "group",
            }
        )

    def test_add_beneficiaries(self):
        self.program_1.write(
            {"program_membership_ids": [(0, 0, {"partner_id": self.registrant1.id})]}
        )

    def test_add_group(self):
        self.program_2.write(
            {"program_membership_ids": [(0, 0, {"partner_id": self.group_1.id})]}
        )

    def test_enroll(self):
        self.program_1.enroll_eligible_registrants()
        self.program_2.enroll_eligible_registrants()

    def test_add_cycle(self):
        self.program_1.create_new_cycle()
        self.program_2.create_new_cycle()
        self.cycle1 = self.env["g2p.cycle"].search(
            [("id", "=", self.program_1.cycle_ids[0].id)]
        )
        self.cycle2 = self.env["g2p.cycle"].search(
            [("id", "=", self.program_2.cycle_ids[0].id)]
        )

    def test_cycle_copy_beneficiary(self):
        self.cycle1.copy_beneficiaries_from_program()
        self.cycle2.copy_beneficiaries_from_program()

    def test_cycle_prepare_entitlement(self):
        self.cycle1.prepare_entitlement()
        self.cycle2.prepare_entitlement()

    def test_cycle_to_approve(self):
        self.cycle1.to_approve()
        self.cycle2.to_approve()

    def test_cycle_approve(self):
        self.cycle1.approve()
        self.cycle2.approve()

    def test_deduplication(self):
        self.program_1.deduplicate_beneficiaries()
        self.program_2.deduplicate_beneficiaries()

    def test_end(self):
        self.program_1.end_program()
        self.program_2.end_program()
