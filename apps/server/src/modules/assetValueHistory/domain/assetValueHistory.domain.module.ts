import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { AssetValueHistoryDomainFacade } from './assetValueHistory.domain.facade'
import { AssetValueHistory } from './assetValueHistory.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([AssetValueHistory]),
    DatabaseHelperModule,
  ],
  providers: [AssetValueHistoryDomainFacade, AssetValueHistoryDomainFacade],
  exports: [AssetValueHistoryDomainFacade],
})
export class AssetValueHistoryDomainModule {}
