# Use  Cases

## Overview

This page lists the various use cases and scenarios that openg2p system must address.

## Deduplication of existing registries

Governments already have existing beneficiary registries that may contain duplicates or ghosts. A very basic requirement is to clean the registries with **token seeding**.  The possible workflows are mentioned below.

1. Beneficiary is invited to a registration centre for authentication
2. Beneficiary carries a physical ID card that has signed QR code
3. Officer has an Android based tablet app on which the scheme form is already downloaded.
4. Officer verifies that the card is authentic, physically as well as with QR code digital signature check
5. Beneficiary also presents the beneficiary ID / card that was issued as part of the scheme.  If not, some scheme id assigned to him. Officer enters the same in the form.
6. Officer reads QR code with the App, the demographic data is automatically populated in the form. &#x20;
7. Officer collects finger print data using a separate device that is connected to tablet. (?)
8. The form data along with finger print is sent to the openg2p system
9. Openg2p system does an Auth at the backend, returns KYC data and token. The data is matched against submitted data.
10. Existing registries is updated with token as well as updated data.
11. If token already exists in the system, the information is updated.

