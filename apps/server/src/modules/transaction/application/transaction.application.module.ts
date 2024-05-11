import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { TransactionDomainModule } from '../domain'
import { TransactionController } from './transaction.controller'

import { OwnershipDomainModule } from '../../../modules/ownership/domain'

import { TransactionByOwnershipController } from './transactionByOwnership.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    TransactionDomainModule,

    OwnershipDomainModule,
  ],
  controllers: [TransactionController, TransactionByOwnershipController],
  providers: [],
})
export class TransactionApplicationModule {}
