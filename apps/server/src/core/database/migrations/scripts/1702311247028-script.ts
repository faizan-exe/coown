import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('d3881ab8-8a0c-4a48-a762-984c88daa425', '7Roselyn86@yahoo.com', 'Bob Johnson', 'https://i.imgur.com/YfJQV5z.png?id=9', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('72d88442-e2a9-49e1-ba9c-1a08d7c94a4c', '13Krista.Kuphal@yahoo.com', 'Carol White', 'https://i.imgur.com/YfJQV5z.png?id=15', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('0419e33f-e2ef-4b5d-88c7-3040e2d47437', '19Aurelie95@hotmail.com', 'Alice Smith', 'https://i.imgur.com/YfJQV5z.png?id=21', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('34e778e4-b0b4-40f1-aa12-cdb3f5045efd', '25Mckenna_Stracke@yahoo.com', 'Carol White', 'https://i.imgur.com/YfJQV5z.png?id=27', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('872514fa-eef2-4e0c-9956-3ccce64b06ee', '31Shaniya_Hintz35@yahoo.com', 'Eve Davis', 'https://i.imgur.com/YfJQV5z.png?id=33', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('7c3d2f5a-8e9d-4a82-8f06-eb03a94db8c8', '37Madisen99@hotmail.com', 'Alice Smith', 'https://i.imgur.com/YfJQV5z.png?id=39', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('f934a396-035d-4047-b6d4-ab1c3f8c2b5f', '43Mallie.Zieme19@yahoo.com', 'Dave Brown', 'https://i.imgur.com/YfJQV5z.png?id=45', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('0b5ec7a9-1b43-4ab9-a0ac-f47e9c42ddea', '49Tania_Schaefer-Ward7@hotmail.com', 'Carol White', 'https://i.imgur.com/YfJQV5z.png?id=51', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('4017a375-3287-40c1-a7e8-4b39a09da9bb', '55Kareem51@gmail.com', 'Carol White', 'https://i.imgur.com/YfJQV5z.png?id=57', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('901205d3-1d9b-4551-88b8-4539c3d6e339', 'Asset Value Alert', 'Explore the new assets available for coownership on CoOwn.', 'Alice Johnson', '64Alan89@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=65', 'https://i.imgur.com/YfJQV5z.png?id=66', '872514fa-eef2-4e0c-9956-3ccce64b06ee');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('db1aac2a-92fc-48ed-9eaa-7f1120170134', 'Legal Documentation Reminder', 'You have been invited to join the coowner group for your asset.', 'Market Analyst', '71Lue9@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=72', 'https://i.imgur.com/YfJQV5z.png?id=73', 'd3881ab8-8a0c-4a48-a762-984c88daa425');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('c1ee5618-5c98-4241-9d19-3ea8554f7609', 'Quota Status Update', 'Please review the updated legal documents for your coowned asset.', 'John Doe', '78Akeem.Howell24@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=79', 'https://i.imgur.com/YfJQV5z.png?id=80', '34e778e4-b0b4-40f1-aa12-cdb3f5045efd');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('f7a26f70-b696-4350-bbb7-2fa8b6c4e24b', 'Legal Documentation Reminder', 'Explore the new assets available for coownership on CoOwn.', 'Market Analyst', '85Melyssa_Barton29@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=86', 'https://i.imgur.com/YfJQV5z.png?id=87', 'd3881ab8-8a0c-4a48-a762-984c88daa425');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('eebf0261-8d06-4d3a-8d4f-cb7366355327', 'Quota Status Update', 'Please review the updated legal documents for your coowned asset.', 'Group Coordinator', '92Marcelo.Wiza@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=93', 'https://i.imgur.com/YfJQV5z.png?id=94', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('ad093a13-54a4-4046-8cf3-93e56e11dc1d', 'Asset Value Alert', 'The quota for the asset you are interested in is almost full.', 'Market Analyst', '99Tre45@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=100', 'https://i.imgur.com/YfJQV5z.png?id=101', '72d88442-e2a9-49e1-ba9c-1a08d7c94a4c');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('251b11ce-8dec-42af-9f84-bd973ae5fa12', 'Asset CoOwnership Opportunity', 'The value of your coowned asset has increased by 10.', 'CoOwn Admin', '106Wava_Strosin71@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=107', 'https://i.imgur.com/YfJQV5z.png?id=108', '0419e33f-e2ef-4b5d-88c7-3040e2d47437');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('0f7bd995-dcc5-4770-85c0-10a21e035be3', 'Asset Value Alert', 'The value of your coowned asset has increased by 10.', 'CoOwn Admin', '113Antwan.Conroy@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=114', 'https://i.imgur.com/YfJQV5z.png?id=115', '872514fa-eef2-4e0c-9956-3ccce64b06ee');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('06a28220-8a9b-458e-84ca-e6ec68339d35', 'CoOwner Group Invitation', 'The quota for the asset you are interested in is almost full.', 'John Doe', '120Uriel.Williamson@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=121', 'https://i.imgur.com/YfJQV5z.png?id=122', '34e778e4-b0b4-40f1-aa12-cdb3f5045efd');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('a6a849da-7221-4b45-8777-06be7bbc59ff', 'Asset CoOwnership Opportunity', 'Please review the updated legal documents for your coowned asset.', 'John Doe', '127Lindsay.Wolf80@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=128', 'https://i.imgur.com/YfJQV5z.png?id=129', 'd3881ab8-8a0c-4a48-a762-984c88daa425');

INSERT INTO "asset" ("id", "name", "description", "totalValue", "availableQuota") VALUES ('4c9e2de2-c241-4e1f-9f33-9d8574ef1010', 'Art Masterpiece', 'A stunning villa overlooking the ocean with private beach access.', 303, 136);
INSERT INTO "asset" ("id", "name", "description", "totalValue", "availableQuota") VALUES ('b1ec3507-5c44-483e-97cd-eebb998f70df', 'Private Jet', 'A highperformance sports car with sleek design and advanced features.', 930, 555);
INSERT INTO "asset" ("id", "name", "description", "totalValue", "availableQuota") VALUES ('7cad6049-892a-4194-8907-ccf51a8d964a', 'Luxury Sports Car', 'A collection of paintings from famous artists spanning several centuries.', 182, 995);
INSERT INTO "asset" ("id", "name", "description", "totalValue", "availableQuota") VALUES ('301d8911-bf01-4ee0-bd8e-fb0b52441147', 'Private Jet', 'A luxurious jet offering comfort and speed for international travel.', 248, 401);
INSERT INTO "asset" ("id", "name", "description", "totalValue", "availableQuota") VALUES ('b38964ba-abf8-46b4-8cad-9f4b6c4afcda', 'Vintage Wine Collection', 'A luxurious jet offering comfort and speed for international travel.', 417, 994);
INSERT INTO "asset" ("id", "name", "description", "totalValue", "availableQuota") VALUES ('d24d9861-f093-499c-acb5-b64508cd986a', 'Art Masterpiece', 'A highperformance sports car with sleek design and advanced features.', 423, 468);
INSERT INTO "asset" ("id", "name", "description", "totalValue", "availableQuota") VALUES ('540f242e-8c7a-4aa8-bd9e-cb994488fae5', 'Vintage Wine Collection', 'A collection of paintings from famous artists spanning several centuries.', 630, 397);
INSERT INTO "asset" ("id", "name", "description", "totalValue", "availableQuota") VALUES ('5920af78-1b9e-4b49-9195-5d0fa708317f', 'Vintage Wine Collection', 'A highperformance sports car with sleek design and advanced features.', 452, 163);
INSERT INTO "asset" ("id", "name", "description", "totalValue", "availableQuota") VALUES ('d178b5fa-e29c-4495-9ea1-e400c61f4731', 'Luxury Sports Car', 'An exquisite collection of rare vintage wines from renowned vineyards.', 245, 497);
INSERT INTO "asset" ("id", "name", "description", "totalValue", "availableQuota") VALUES ('2a9cf57b-2fdd-43d9-9aae-0881a0091ab4', 'Vintage Wine Collection', 'A luxurious jet offering comfort and speed for international travel.', 229, 675);

INSERT INTO "interest" ("id", "status", "userId", "assetId") VALUES ('7a2af177-51a3-4bb4-9472-307bb3dbfb7d', 'Under Review', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '301d8911-bf01-4ee0-bd8e-fb0b52441147');
INSERT INTO "interest" ("id", "status", "userId", "assetId") VALUES ('85a7f0cb-bdd0-45ed-8c9a-b801f40fad6f', 'Withdrawn', '34e778e4-b0b4-40f1-aa12-cdb3f5045efd', '301d8911-bf01-4ee0-bd8e-fb0b52441147');
INSERT INTO "interest" ("id", "status", "userId", "assetId") VALUES ('e28bb6d4-b433-405f-a302-8b8f2d915b1d', 'Under Review', 'f934a396-035d-4047-b6d4-ab1c3f8c2b5f', 'b1ec3507-5c44-483e-97cd-eebb998f70df');
INSERT INTO "interest" ("id", "status", "userId", "assetId") VALUES ('e81c3e1b-f516-445f-a0b3-6557dc07b266', 'Under Review', '72d88442-e2a9-49e1-ba9c-1a08d7c94a4c', '2a9cf57b-2fdd-43d9-9aae-0881a0091ab4');
INSERT INTO "interest" ("id", "status", "userId", "assetId") VALUES ('9561890a-9e36-4819-adfd-e45b8f52e705', 'Declined', '4017a375-3287-40c1-a7e8-4b39a09da9bb', 'b1ec3507-5c44-483e-97cd-eebb998f70df');
INSERT INTO "interest" ("id", "status", "userId", "assetId") VALUES ('533d2d00-06ba-4aad-9de2-0191a6efda44', 'Withdrawn', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'd24d9861-f093-499c-acb5-b64508cd986a');
INSERT INTO "interest" ("id", "status", "userId", "assetId") VALUES ('8e04a2fd-a08a-463c-8f85-71288068220e', 'Confirmed', '7c3d2f5a-8e9d-4a82-8f06-eb03a94db8c8', 'b38964ba-abf8-46b4-8cad-9f4b6c4afcda');
INSERT INTO "interest" ("id", "status", "userId", "assetId") VALUES ('1588c8d0-11f8-4748-8dba-b7d97859d671', 'Declined', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '540f242e-8c7a-4aa8-bd9e-cb994488fae5');
INSERT INTO "interest" ("id", "status", "userId", "assetId") VALUES ('99b93dad-5b6c-42aa-a31d-dfd62c7e5c8c', 'Withdrawn', 'f934a396-035d-4047-b6d4-ab1c3f8c2b5f', '540f242e-8c7a-4aa8-bd9e-cb994488fae5');
INSERT INTO "interest" ("id", "status", "userId", "assetId") VALUES ('5ba27786-3c43-4fe9-8cb9-bfd3dca9d077', 'Under Review', '4017a375-3287-40c1-a7e8-4b39a09da9bb', 'd178b5fa-e29c-4495-9ea1-e400c61f4731');

INSERT INTO "ownership" ("id", "sharePercentage", "userId", "assetId") VALUES ('86cc08ee-fc32-4e0f-b510-1517872bba62', 488, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '301d8911-bf01-4ee0-bd8e-fb0b52441147');
INSERT INTO "ownership" ("id", "sharePercentage", "userId", "assetId") VALUES ('45bb1346-3cf0-4651-874d-1ae2d4e67fe2', 642, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '301d8911-bf01-4ee0-bd8e-fb0b52441147');
INSERT INTO "ownership" ("id", "sharePercentage", "userId", "assetId") VALUES ('3c2b1464-536b-4f67-be99-69ae14e54270', 54, '4017a375-3287-40c1-a7e8-4b39a09da9bb', '4c9e2de2-c241-4e1f-9f33-9d8574ef1010');
INSERT INTO "ownership" ("id", "sharePercentage", "userId", "assetId") VALUES ('afc5b148-7222-4d8c-9d66-1abbb42129c9', 787, '4017a375-3287-40c1-a7e8-4b39a09da9bb', 'd178b5fa-e29c-4495-9ea1-e400c61f4731');
INSERT INTO "ownership" ("id", "sharePercentage", "userId", "assetId") VALUES ('4fdc716e-c263-4c03-af96-7774876d7778', 464, '0419e33f-e2ef-4b5d-88c7-3040e2d47437', '301d8911-bf01-4ee0-bd8e-fb0b52441147');
INSERT INTO "ownership" ("id", "sharePercentage", "userId", "assetId") VALUES ('2b7ac5a1-9e0b-4ecf-89af-c8514a8ccb0b', 819, '4017a375-3287-40c1-a7e8-4b39a09da9bb', 'b1ec3507-5c44-483e-97cd-eebb998f70df');
INSERT INTO "ownership" ("id", "sharePercentage", "userId", "assetId") VALUES ('f451b1ab-448b-4c2d-a72d-1c47ee52391f', 326, '7c3d2f5a-8e9d-4a82-8f06-eb03a94db8c8', 'd178b5fa-e29c-4495-9ea1-e400c61f4731');
INSERT INTO "ownership" ("id", "sharePercentage", "userId", "assetId") VALUES ('d469009d-ec73-43a1-b13a-ee80876f9afa', 362, '0b5ec7a9-1b43-4ab9-a0ac-f47e9c42ddea', '2a9cf57b-2fdd-43d9-9aae-0881a0091ab4');
INSERT INTO "ownership" ("id", "sharePercentage", "userId", "assetId") VALUES ('3d28038a-edda-4532-a0bf-b8a894d5a2fe', 779, '872514fa-eef2-4e0c-9956-3ccce64b06ee', 'd24d9861-f093-499c-acb5-b64508cd986a');
INSERT INTO "ownership" ("id", "sharePercentage", "userId", "assetId") VALUES ('dca4b3bd-191d-4f9b-b6ff-817efefffe0e', 655, 'd3881ab8-8a0c-4a48-a762-984c88daa425', '7cad6049-892a-4194-8907-ccf51a8d964a');

INSERT INTO "group" ("id", "name", "assetId") VALUES ('3402fb9e-2e25-4982-897f-a2f430069490', 'Shared Space Syndicate', 'd24d9861-f093-499c-acb5-b64508cd986a');
INSERT INTO "group" ("id", "name", "assetId") VALUES ('a622e27d-af0e-4b24-90c3-4cfafb74923b', 'Shared Space Syndicate', '301d8911-bf01-4ee0-bd8e-fb0b52441147');
INSERT INTO "group" ("id", "name", "assetId") VALUES ('933bc5e1-ebc6-4dbd-8d09-7bb4abe3e3f0', 'Joint Venture Group', 'd24d9861-f093-499c-acb5-b64508cd986a');
INSERT INTO "group" ("id", "name", "assetId") VALUES ('70e6c9f0-db47-4526-bf41-16328a341cbc', 'CoOwner Collective', '301d8911-bf01-4ee0-bd8e-fb0b52441147');
INSERT INTO "group" ("id", "name", "assetId") VALUES ('a63447b8-2991-4706-a760-44de00aa2a94', 'CoOwner Collective', 'b38964ba-abf8-46b4-8cad-9f4b6c4afcda');
INSERT INTO "group" ("id", "name", "assetId") VALUES ('c82328ab-066d-4d38-8349-5fa219158678', 'Joint Venture Group', '2a9cf57b-2fdd-43d9-9aae-0881a0091ab4');
INSERT INTO "group" ("id", "name", "assetId") VALUES ('edde1de8-07e1-4be7-8357-e70410a2d6d6', 'Equity Ensemble', '7cad6049-892a-4194-8907-ccf51a8d964a');
INSERT INTO "group" ("id", "name", "assetId") VALUES ('715cfb54-89ce-4d3b-876f-1aeca4bc60ea', 'CoOwner Collective', '5920af78-1b9e-4b49-9195-5d0fa708317f');
INSERT INTO "group" ("id", "name", "assetId") VALUES ('d58e3484-ff07-4d20-933b-131cdd83fa1f', 'CoOwner Collective', '2a9cf57b-2fdd-43d9-9aae-0881a0091ab4');
INSERT INTO "group" ("id", "name", "assetId") VALUES ('a72a5fbc-29b2-4b17-8f84-c3438ee9e332', 'Asset Alliance', '2a9cf57b-2fdd-43d9-9aae-0881a0091ab4');

INSERT INTO "group_membership" ("id", "role", "groupId", "userId") VALUES ('126318dc-b597-45b0-ab37-2940cf80e17f', 'Contributor', 'a72a5fbc-29b2-4b17-8f84-c3438ee9e332', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "group_membership" ("id", "role", "groupId", "userId") VALUES ('3e36c06a-ffd7-4915-ba69-1f7ac930a479', 'Viewer', '715cfb54-89ce-4d3b-876f-1aeca4bc60ea', '34e778e4-b0b4-40f1-aa12-cdb3f5045efd');
INSERT INTO "group_membership" ("id", "role", "groupId", "userId") VALUES ('60da9753-31a1-4789-be45-276754a847cc', 'Administrator', '933bc5e1-ebc6-4dbd-8d09-7bb4abe3e3f0', '4017a375-3287-40c1-a7e8-4b39a09da9bb');
INSERT INTO "group_membership" ("id", "role", "groupId", "userId") VALUES ('e2f030d1-d1a7-41f2-9f81-9df8b9c4d30e', 'Member', 'c82328ab-066d-4d38-8349-5fa219158678', 'f934a396-035d-4047-b6d4-ab1c3f8c2b5f');
INSERT INTO "group_membership" ("id", "role", "groupId", "userId") VALUES ('67f2971e-f607-4e6f-9a36-37f51e5f5a41', 'Moderator', '715cfb54-89ce-4d3b-876f-1aeca4bc60ea', 'd3881ab8-8a0c-4a48-a762-984c88daa425');
INSERT INTO "group_membership" ("id", "role", "groupId", "userId") VALUES ('8276ad2a-4ec4-4317-9dea-f09587ccbcac', 'Contributor', 'a72a5fbc-29b2-4b17-8f84-c3438ee9e332', '34e778e4-b0b4-40f1-aa12-cdb3f5045efd');
INSERT INTO "group_membership" ("id", "role", "groupId", "userId") VALUES ('0ebbef33-1e26-4166-9a07-fe7407190855', 'Viewer', 'a622e27d-af0e-4b24-90c3-4cfafb74923b', '0419e33f-e2ef-4b5d-88c7-3040e2d47437');
INSERT INTO "group_membership" ("id", "role", "groupId", "userId") VALUES ('a7b06d49-31a6-4d03-abc4-c6d6c3389211', 'Member', 'edde1de8-07e1-4be7-8357-e70410a2d6d6', '0419e33f-e2ef-4b5d-88c7-3040e2d47437');
INSERT INTO "group_membership" ("id", "role", "groupId", "userId") VALUES ('1ef68efb-70a3-49c5-b4d4-9d82eab3880f', 'Member', 'd58e3484-ff07-4d20-933b-131cdd83fa1f', 'f934a396-035d-4047-b6d4-ab1c3f8c2b5f');
INSERT INTO "group_membership" ("id", "role", "groupId", "userId") VALUES ('b482dd66-5e3b-4fff-8c26-70ed7267b348', 'Administrator', 'a63447b8-2991-4706-a760-44de00aa2a94', '4017a375-3287-40c1-a7e8-4b39a09da9bb');

INSERT INTO "legal_document" ("id", "documentType", "contentUrl", "assetId") VALUES ('8e626068-6e0d-49ce-bbd6-088016dad329', 'Lease Agreement', 'https://i.imgur.com/YfJQV5z.png?id=262', 'b1ec3507-5c44-483e-97cd-eebb998f70df');
INSERT INTO "legal_document" ("id", "documentType", "contentUrl", "assetId") VALUES ('26d65873-1915-4f8c-b938-1180e47b2278', 'Sale Contract', 'https://i.imgur.com/YfJQV5z.png?id=265', '4c9e2de2-c241-4e1f-9f33-9d8574ef1010');
INSERT INTO "legal_document" ("id", "documentType", "contentUrl", "assetId") VALUES ('5c5ee353-365c-4024-b047-750289d15418', 'Ownership Agreement', 'https://i.imgur.com/YfJQV5z.png?id=268', '5920af78-1b9e-4b49-9195-5d0fa708317f');
INSERT INTO "legal_document" ("id", "documentType", "contentUrl", "assetId") VALUES ('22ebe113-fc0f-4490-835b-55331254f1f8', 'Partnership Deed', 'https://i.imgur.com/YfJQV5z.png?id=271', 'b38964ba-abf8-46b4-8cad-9f4b6c4afcda');
INSERT INTO "legal_document" ("id", "documentType", "contentUrl", "assetId") VALUES ('4d7befe8-fe41-4536-85cb-e1dd411e5a71', 'Maintenance Contract', 'https://i.imgur.com/YfJQV5z.png?id=274', '4c9e2de2-c241-4e1f-9f33-9d8574ef1010');
INSERT INTO "legal_document" ("id", "documentType", "contentUrl", "assetId") VALUES ('0698f7bc-4a92-40ef-a6df-917b2d9661db', 'Maintenance Contract', 'https://i.imgur.com/YfJQV5z.png?id=277', 'd24d9861-f093-499c-acb5-b64508cd986a');
INSERT INTO "legal_document" ("id", "documentType", "contentUrl", "assetId") VALUES ('05edd8f1-56ac-4cc0-9a4e-5c3005a6fcb3', 'Maintenance Contract', 'https://i.imgur.com/YfJQV5z.png?id=280', 'b38964ba-abf8-46b4-8cad-9f4b6c4afcda');
INSERT INTO "legal_document" ("id", "documentType", "contentUrl", "assetId") VALUES ('32c99416-c13e-44a6-bc77-45383bc1e088', 'Ownership Agreement', 'https://i.imgur.com/YfJQV5z.png?id=283', '301d8911-bf01-4ee0-bd8e-fb0b52441147');
INSERT INTO "legal_document" ("id", "documentType", "contentUrl", "assetId") VALUES ('fc975cb3-ef49-45f9-a69c-b7645488fdfc', 'Sale Contract', 'https://i.imgur.com/YfJQV5z.png?id=286', '301d8911-bf01-4ee0-bd8e-fb0b52441147');
INSERT INTO "legal_document" ("id", "documentType", "contentUrl", "assetId") VALUES ('3037bb5a-1efa-4ad5-8036-1979bf32c9b1', 'Ownership Agreement', 'https://i.imgur.com/YfJQV5z.png?id=289', 'b1ec3507-5c44-483e-97cd-eebb998f70df');

INSERT INTO "transaction" ("id", "transactionType", "transactionDate", "amount", "ownershipId") VALUES ('38f34983-3eca-48ed-bf42-750a032479b5', 'Transfer', '2023-10-17T01:58:37.879Z', 863, '3d28038a-edda-4532-a0bf-b8a894d5a2fe');
INSERT INTO "transaction" ("id", "transactionType", "transactionDate", "amount", "ownershipId") VALUES ('6431585e-387a-4499-ad1b-fd6986718b09', 'Purchase', '2025-02-17T13:45:20.347Z', 846, '3c2b1464-536b-4f67-be99-69ae14e54270');
INSERT INTO "transaction" ("id", "transactionType", "transactionDate", "amount", "ownershipId") VALUES ('31ddb5f8-fe41-4b99-a01e-ced26200d033', 'Dividend', '2023-10-24T03:20:21.513Z', 926, 'afc5b148-7222-4d8c-9d66-1abbb42129c9');
INSERT INTO "transaction" ("id", "transactionType", "transactionDate", "amount", "ownershipId") VALUES ('094b6a42-0bb5-4afe-b135-4765f42a6682', 'Investment', '2023-09-03T19:41:18.050Z', 561, '4fdc716e-c263-4c03-af96-7774876d7778');
INSERT INTO "transaction" ("id", "transactionType", "transactionDate", "amount", "ownershipId") VALUES ('8bdc3324-066e-48aa-9575-8f3796da461d', 'Investment', '2023-10-14T03:33:18.787Z', 986, 'dca4b3bd-191d-4f9b-b6ff-817efefffe0e');
INSERT INTO "transaction" ("id", "transactionType", "transactionDate", "amount", "ownershipId") VALUES ('5b389c71-9b5b-4598-8a08-77af4cd7310a', 'Purchase', '2024-11-30T00:50:02.221Z', 541, '3d28038a-edda-4532-a0bf-b8a894d5a2fe');
INSERT INTO "transaction" ("id", "transactionType", "transactionDate", "amount", "ownershipId") VALUES ('c9a722cf-c58c-46e7-b6ba-0e727edaf25c', 'Purchase', '2023-11-12T15:49:21.353Z', 415, 'dca4b3bd-191d-4f9b-b6ff-817efefffe0e');
INSERT INTO "transaction" ("id", "transactionType", "transactionDate", "amount", "ownershipId") VALUES ('22ed81fe-ebe2-45b8-9cc6-87e8fd31c42d', 'Transfer', '2023-07-05T16:48:36.008Z', 52, '4fdc716e-c263-4c03-af96-7774876d7778');
INSERT INTO "transaction" ("id", "transactionType", "transactionDate", "amount", "ownershipId") VALUES ('40a1bcfa-6052-4937-b2e6-5aeb58ba8051', 'Transfer', '2024-03-08T23:05:41.136Z', 509, 'd469009d-ec73-43a1-b13a-ee80876f9afa');
INSERT INTO "transaction" ("id", "transactionType", "transactionDate", "amount", "ownershipId") VALUES ('fd2a3c0e-0b82-45e7-a58b-50a6faf152cd', 'Purchase', '2024-08-31T16:06:07.485Z', 45, '45bb1346-3cf0-4651-874d-1ae2d4e67fe2');

INSERT INTO "asset_value_history" ("id", "recordedDate", "value", "assetId") VALUES ('a528612d-2c4d-4a1b-905b-1dd66582792d', '2024-12-12T16:55:47.635Z', 217, 'b38964ba-abf8-46b4-8cad-9f4b6c4afcda');
INSERT INTO "asset_value_history" ("id", "recordedDate", "value", "assetId") VALUES ('feba968b-360c-4669-8afa-16bc1bcfeeed', '2024-04-26T06:42:55.382Z', 32, '540f242e-8c7a-4aa8-bd9e-cb994488fae5');
INSERT INTO "asset_value_history" ("id", "recordedDate", "value", "assetId") VALUES ('43ca5711-5039-4508-a72b-13440656bead', '2025-02-02T12:09:32.803Z', 864, 'd178b5fa-e29c-4495-9ea1-e400c61f4731');
INSERT INTO "asset_value_history" ("id", "recordedDate", "value", "assetId") VALUES ('328bd69b-c2e8-4751-b9a4-289f31a8d5c7', '2024-03-02T18:29:04.118Z', 410, '4c9e2de2-c241-4e1f-9f33-9d8574ef1010');
INSERT INTO "asset_value_history" ("id", "recordedDate", "value", "assetId") VALUES ('41bb38f1-e31e-4d1a-b835-438bc4d9d8ce', '2024-10-07T20:19:53.752Z', 649, '2a9cf57b-2fdd-43d9-9aae-0881a0091ab4');
INSERT INTO "asset_value_history" ("id", "recordedDate", "value", "assetId") VALUES ('1516ec62-4515-4ab4-a5ce-15854f698594', '2023-09-14T01:14:27.381Z', 427, 'd178b5fa-e29c-4495-9ea1-e400c61f4731');
INSERT INTO "asset_value_history" ("id", "recordedDate", "value", "assetId") VALUES ('ef25ef17-78b8-45f0-9a6e-3200c65649ca', '2023-11-19T19:15:29.333Z', 362, 'b38964ba-abf8-46b4-8cad-9f4b6c4afcda');
INSERT INTO "asset_value_history" ("id", "recordedDate", "value", "assetId") VALUES ('5bb5d7f6-6a80-4b70-a1c0-0f99460d6648', '2023-11-30T10:25:46.746Z', 95, '7cad6049-892a-4194-8907-ccf51a8d964a');
INSERT INTO "asset_value_history" ("id", "recordedDate", "value", "assetId") VALUES ('e54bd955-ece5-4f2b-ac9c-7652aaa669bf', '2024-05-08T15:55:16.262Z', 536, '7cad6049-892a-4194-8907-ccf51a8d964a');
INSERT INTO "asset_value_history" ("id", "recordedDate", "value", "assetId") VALUES ('2906ad5f-0914-496d-8828-1f9bfed986f1', '2024-12-05T20:48:47.743Z', 914, 'd24d9861-f093-499c-acb5-b64508cd986a');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
