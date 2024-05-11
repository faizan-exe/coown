import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { AssetValueHistoryDomainModule } from '../domain'
import { AssetValueHistoryController } from './assetValueHistory.controller'

import { AssetDomainModule } from '../../../modules/asset/domain'

import { AssetValueHistoryByAssetController } from './assetValueHistoryByAsset.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    AssetValueHistoryDomainModule,

    AssetDomainModule,
  ],
  controllers: [
    AssetValueHistoryController,

    AssetValueHistoryByAssetController,
  ],
  providers: [],
})
export class AssetValueHistoryApplicationModule {}
