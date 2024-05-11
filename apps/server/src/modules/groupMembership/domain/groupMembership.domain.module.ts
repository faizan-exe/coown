import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { GroupMembershipDomainFacade } from './groupMembership.domain.facade'
import { GroupMembership } from './groupMembership.model'

@Module({
  imports: [TypeOrmModule.forFeature([GroupMembership]), DatabaseHelperModule],
  providers: [GroupMembershipDomainFacade, GroupMembershipDomainFacade],
  exports: [GroupMembershipDomainFacade],
})
export class GroupMembershipDomainModule {}
