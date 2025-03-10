# Part of Newlogic G2P. See LICENSE file for full copyright and licensing details.
{
    "name": "G2P Registrant",
    "category": "G2P",
    "version": "15.0.0.0.1",
    "sequence": 1,
    "author": "Newlogic",
    "website": "https://newlogic.com/",
    "license": "LGPL-3",
    "depends": ["base", "mail", "contacts", "web"],
    "data": [
        "security/newlogic_security.xml",
        "security/ir.model.access.csv",
        "data/group_membership_kinds.xml",
        "data/group_kinds.xml",
        "wizard/disable_registrant_view.xml",
        "views/main_view.xml",
        "views/individuals_view.xml",
        "views/groups_view.xml",
        "views/group_membership_view.xml",
        "views/membership_kinds_view.xml",
        "views/group_membership_kinds_view.xml",
        "views/reg_relationship_view.xml",
        "views/relationships_view.xml",
        "views/reg_id_view.xml",
        "views/id_types_view.xml",
        "views/phone_number_view.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "/g2p_registrant/static/src/js/custom_client_action.js",
        ],
        "web.assets_qweb": [
            "g2p_registrant/static/src/xml/custom_web.xml",
        ],
    },
    "demo": [],
    "images": [],
    "application": True,
    "installable": True,
    "auto_install": False,
}
