import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationAssetSubscriber } from './subscribers/notification.asset.subscriber'

import { NotificationInterestSubscriber } from './subscribers/notification.interest.subscriber'

import { NotificationOwnershipSubscriber } from './subscribers/notification.ownership.subscriber'

import { NotificationGroupSubscriber } from './subscribers/notification.group.subscriber'

import { NotificationGroupMembershipSubscriber } from './subscribers/notification.groupMembership.subscriber'

import { NotificationLegalDocumentSubscriber } from './subscribers/notification.legalDocument.subscriber'

import { NotificationTransactionSubscriber } from './subscribers/notification.transaction.subscriber'

import { NotificationAssetValueHistorySubscriber } from './subscribers/notification.assetValueHistory.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationAssetSubscriber,

    NotificationInterestSubscriber,

    NotificationOwnershipSubscriber,

    NotificationGroupSubscriber,

    NotificationGroupMembershipSubscriber,

    NotificationLegalDocumentSubscriber,

    NotificationTransactionSubscriber,

    NotificationAssetValueHistorySubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
