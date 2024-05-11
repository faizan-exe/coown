import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { GroupMembershipDomainModule } from '../domain'
import { GroupMembershipController } from './groupMembership.controller'

import { GroupDomainModule } from '../../../modules/group/domain'

import { GroupMembershipByGroupController } from './groupMembershipByGroup.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { GroupMembershipByUserController } from './groupMembershipByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    GroupMembershipDomainModule,

    GroupDomainModule,

    UserDomainModule,
  ],
  controllers: [
    GroupMembershipController,

    GroupMembershipByGroupController,

    GroupMembershipByUserController,
  ],
  providers: [],
})
export class GroupMembershipApplicationModule {}
