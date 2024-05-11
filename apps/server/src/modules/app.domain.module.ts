import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { AssetDomainModule } from './asset/domain'

import { InterestDomainModule } from './interest/domain'

import { OwnershipDomainModule } from './ownership/domain'

import { GroupDomainModule } from './group/domain'

import { GroupMembershipDomainModule } from './groupMembership/domain'

import { LegalDocumentDomainModule } from './legalDocument/domain'

import { TransactionDomainModule } from './transaction/domain'

import { AssetValueHistoryDomainModule } from './assetValueHistory/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    AssetDomainModule,

    InterestDomainModule,

    OwnershipDomainModule,

    GroupDomainModule,

    GroupMembershipDomainModule,

    LegalDocumentDomainModule,

    TransactionDomainModule,

    AssetValueHistoryDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
