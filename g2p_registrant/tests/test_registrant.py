from odoo.tests import tagged
from odoo.tests.common import TransactionCase


@tagged("post_install", "-at_install")
class RegistrantTest(TransactionCase):
    @classmethod
    def setUpClass(cls):
        super(RegistrantTest, cls).setUpClass()

        # Initial Setup of Variables
        cls.registrant_1 = cls.env["res.partner"].create(
            {
                "family_name": "Doe",
                "given_name": "John",
            }
        )
        cls.registrant_2 = cls.env["res.partner"].create(
            {
                "family_name": "Doe",
                "given_name": "Jane",
            }
        )
        cls.group_1 = cls.env["res.partner"].create(
            {
                "name": "Group 1",
            }
        )
        cls.group_2 = cls.env["res.partner"].create(
            {
                "name": "Group 2",
            }
        )

    def test_add_members(self):
        self.group_1.write(
            {"group_membership_ids": [(0, 0, {"individual": self.registrant1.id})]}
        )
        self.assertEqual(
            self.group_1.group_membership_ids[0].individual.id, self.registrant1.id
        )

    def test_assign_member(self):
        self.registrant_2.write(
            {"individual_membership_ids": [(0, 0, {"group": self.group_2.id})]}
        )
        self.assertEqual(
            self.registrant_2.individual_membership_ids[0].group.id, self.group_2.id
        )

    def test_add_relationship_1(self):
        self.registrant_1.write(
            {"related_1_ids": [(0, 0, {"registrant2": self.registrant_2.id})]}
        )
        self.assertEqual(
            self.registrant_1.related_1_ids[0].registrant2.id, self.registrant_2.id
        )
        self.group_1.write(
            {"related_1_ids": [(0, 0, {"registrant2": self.group_2.id})]}
        )
        self.assertEqual(self.group_1.related_1_ids[0].registrant2.id, self.group_2.id)

    def test_add_relationship_2(self):
        self.registrant_2.write(
            {"related_2_ids": [(0, 0, {"registrant1": self.registrant_1.id})]}
        )
        self.assertEqual(
            self.registrant_2.related_2_ids[0].registrant1.id, self.registrant_1.id
        )
        self.group2.write({"related_2_ids": [(0, 0, {"registrant1": self.group_1.id})]})
        self.assertEqual(self.group2.related_2_ids[0].registrant1.id, self.group_1.id)
