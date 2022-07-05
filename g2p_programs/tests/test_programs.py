from odoo.tests import tagged
from odoo.tests.common import TransactionCase


@tagged("post_install", "-at_install")
class ProgramTest(TransactionCase):
    @classmethod
    def setUpClass(cls):
        super(ProgramTest, cls).setUpClass()

        # Initial Setup of Variables
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
        self.assertEqual(
            self.program_1.program_membership_ids[0].partner_id.id, self.registrant1.id
        )

        # Check if beneficiaries_count compute is computing as expected
        self.assertEqual(self.program_1.beneficiaries_count, 1)

    def test_add_group(self):
        self.program_2.write(
            {"program_membership_ids": [(0, 0, {"partner_id": self.group_1.id})]}
        )
        self.assertEqual(
            self.program_2.program_membership_ids[0].partner_id.id, self.group_1.id
        )

        # Check if beneficiaries_count compute is computing as expected
        self.assertEqual(self.program_2.beneficiaries_count, 1)

    def test_enroll(self):
        self.program_1.enroll_eligible_registrants()
        self.assertEqual(self.program_1.program_membership_ids[0].state, "enrolled")
        self.program_2.enroll_eligible_registrants()
        self.assertEqual(self.program_2.program_membership_ids[0].state, "enrolled")

        # Check if eligible_beneficiaries_count compute is computing as expected
        self.assertEqual(self.program_1.eligible_beneficiaries_count, 1)
        self.assertEqual(self.program_2.eligible_beneficiaries_count, 1)

    def test_add_cycle(self):
        self.program_1.create_new_cycle()
        self.assertEqual(len(self.program_1.cycle_ids), 1)
        self.program_2.create_new_cycle()
        self.assertEqual(len(self.program_2.cycle_ids), 1)

        # Check if cycles_count compute is computing as expected
        self.assertEqual(self.program_1.cycles_count, 1)
        self.assertEqual(self.program_2.cycles_count, 1)

        self.cycle1 = self.env["g2p.cycle"].search(
            [("id", "=", self.program_1.cycle_ids[0].id)]
        )
        self.cycle2 = self.env["g2p.cycle"].search(
            [("id", "=", self.program_2.cycle_ids[0].id)]
        )

    def test_cycle_copy_beneficiary(self):
        self.cycle1.copy_beneficiaries_from_program()
        self.assertEqual(
            self.cycle1.cycle_membership_ids[0].partner_id.id, self.registrant1.id
        )
        self.cycle2.copy_beneficiaries_from_program()
        self.assertEqual(
            self.cycle2.cycle_membership_ids[0].partner_id.id, self.group_1.id
        )

        # Check if members_count compute is computing as expected
        self.assertEqual(self.cycle1.members_count, 1)
        self.assertEqual(self.cycle2.members_count, 1)

    def test_cycle_prepare_entitlement(self):
        self.cycle1.prepare_entitlement()
        self.assertEqual(len(self.cycle1.entitlement_ids), 1)
        self.cycle2.prepare_entitlement()
        self.assertEqual(len(self.cycle2.entitlement_ids), 1)

        # Check if entitlements_count compute is computing as expected
        self.assertEqual(self.cycle1.entitlements_count, 1)
        self.assertEqual(self.cycle2.entitlements_count, 1)

    def test_cycle_to_approve(self):
        self.cycle1.to_approve()
        self.assertEqual(self.cycle1.state, "to_approve")
        self.cycle2.to_approve()
        self.assertEqual(self.cycle2.state, "to_approve")

    def test_cycle_approve(self):
        self.cycle1.approve()
        self.assertEqual(self.cycle1.state, "approved")
        self.cycle2.approve()
        self.assertEqual(self.cycle2.state, "approved")

    def test_deduplication(self):
        self.program_1.deduplicate_beneficiaries()
        self.program_2.deduplicate_beneficiaries()

    def test_end(self):
        self.program_1.end_program()
        self.assertEqual(self.program_1.state, "ended")
        self.program_2.end_program()
        self.assertEqual(self.program_2.state, "ended")
