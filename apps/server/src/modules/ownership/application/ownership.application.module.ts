import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { OwnershipDomainModule } from '../domain'
import { OwnershipController } from './ownership.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { OwnershipByUserController } from './ownershipByUser.controller'

import { AssetDomainModule } from '../../../modules/asset/domain'

import { OwnershipByAssetController } from './ownershipByAsset.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    OwnershipDomainModule,

    UserDomainModule,

    AssetDomainModule,
  ],
  controllers: [
    OwnershipController,

    OwnershipByUserController,

    OwnershipByAssetController,
  ],
  providers: [],
})
export class OwnershipApplicationModule {}
