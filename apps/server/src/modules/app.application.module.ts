import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { AssetApplicationModule } from './asset/application'

import { InterestApplicationModule } from './interest/application'

import { OwnershipApplicationModule } from './ownership/application'

import { GroupApplicationModule } from './group/application'

import { GroupMembershipApplicationModule } from './groupMembership/application'

import { LegalDocumentApplicationModule } from './legalDocument/application'

import { TransactionApplicationModule } from './transaction/application'

import { AssetValueHistoryApplicationModule } from './assetValueHistory/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,

    AssetApplicationModule,

    InterestApplicationModule,

    OwnershipApplicationModule,

    GroupApplicationModule,

    GroupMembershipApplicationModule,

    LegalDocumentApplicationModule,

    TransactionApplicationModule,

    AssetValueHistoryApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
