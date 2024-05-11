import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { AssetDomainFacade } from './asset.domain.facade'
import { Asset } from './asset.model'

@Module({
  imports: [TypeOrmModule.forFeature([Asset]), DatabaseHelperModule],
  providers: [AssetDomainFacade, AssetDomainFacade],
  exports: [AssetDomainFacade],
})
export class AssetDomainModule {}
