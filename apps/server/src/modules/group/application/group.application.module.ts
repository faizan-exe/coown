import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { GroupDomainModule } from '../domain'
import { GroupController } from './group.controller'

import { AssetDomainModule } from '../../../modules/asset/domain'

import { GroupByAssetController } from './groupByAsset.controller'

@Module({
  imports: [AuthenticationDomainModule, GroupDomainModule, AssetDomainModule],
  controllers: [GroupController, GroupByAssetController],
  providers: [],
})
export class GroupApplicationModule {}
