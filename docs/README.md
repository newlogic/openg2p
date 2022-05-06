# Home

## Overview

Key features of openg2p-ng system:

* Centralised beneficiary registries
* Deduplicated registries
* Beneficiary enrollment
* User verification at point of delivery
* Proof of delivery
* Integration with payment rails of a country
* Voucher based delivery
* Integration with departmental applications

## High level view

![](\_images/high-level-view.png)

## Beneficiary onboarding



* Self registration
* Agent based registration - one agent registering many in a village as part of self registration
* Survey/enumerator - carrying an App with filling forms.
  * ODK App with ability to download forms of multiple scheme
  * Off line authentication capability
* "last mile scenarios"

### Authentication with ID Systems

* [MOSIP Authentication and KYC](mosip-authentication.md)

### Manual adjudication

## Concept of household/group

* Household
* Group
* Relationship between two registrants

## Scheme management

### Sharing data across schemes with consent

* Mismatch of data across schemes for the same field
* Data quality indicator

## Beneficiary management

* Change request of info by residents

## Eligibility engine

## Proof of delivery

## Tech stack

| Software | Version | Comments               |
| -------- | ------- | ---------------------- |
| Odoo     | 12      | Currently. Move to 15. |
| Postgres |         |                        |
| Redis    |         |                        |
| ODK      | 9.6     |                        |

## Source code

Github repos:



## Glossary

* Enumerator&#x20;
* Supervisor&#x20;
* Enumeration area&#x20;
* Social worker&#x20;
* Social registry&#x20;
* Beneficiary registry&#x20;
* Disbursement list&#x20;
* Household Survey team&#x20;
* Questionnaire VC - Verifiable Credentials

