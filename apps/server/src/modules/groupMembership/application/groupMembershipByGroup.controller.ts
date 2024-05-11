import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { GroupMembershipDomainFacade } from '@server/modules/groupMembership/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { GroupMembershipApplicationEvent } from './groupMembership.application.event'
import { GroupMembershipCreateDto } from './groupMembership.dto'

import { GroupDomainFacade } from '../../group/domain'

@Controller('/v1/groups')
export class GroupMembershipByGroupController {
  constructor(
    private groupDomainFacade: GroupDomainFacade,

    private groupMembershipDomainFacade: GroupMembershipDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/group/:groupId/groupMemberships')
  async findManyGroupId(
    @Param('groupId') groupId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.groupDomainFacade.findOneByIdOrFail(groupId)

    const items = await this.groupMembershipDomainFacade.findManyByGroup(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/group/:groupId/groupMemberships')
  async createByGroupId(
    @Param('groupId') groupId: string,
    @Body() body: GroupMembershipCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, groupId }

    const item = await this.groupMembershipDomainFacade.create(valuesUpdated)

    await this.eventService.emit<GroupMembershipApplicationEvent.GroupMembershipCreated.Payload>(
      GroupMembershipApplicationEvent.GroupMembershipCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
