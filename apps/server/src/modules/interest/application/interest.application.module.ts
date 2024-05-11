import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { InterestDomainModule } from '../domain'
import { InterestController } from './interest.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { InterestByUserController } from './interestByUser.controller'

import { AssetDomainModule } from '../../../modules/asset/domain'

import { InterestByAssetController } from './interestByAsset.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    InterestDomainModule,

    UserDomainModule,

    AssetDomainModule,
  ],
  controllers: [
    InterestController,

    InterestByUserController,

    InterestByAssetController,
  ],
  providers: [],
})
export class InterestApplicationModule {}
