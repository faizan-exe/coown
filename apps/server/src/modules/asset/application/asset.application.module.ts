import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { AssetDomainModule } from '../domain'
import { AssetController } from './asset.controller'

@Module({
  imports: [AuthenticationDomainModule, AssetDomainModule],
  controllers: [AssetController],
  providers: [],
})
export class AssetApplicationModule {}
