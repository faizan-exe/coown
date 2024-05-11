import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { GroupMembershipDomainFacade } from '@server/modules/groupMembership/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { GroupMembershipApplicationEvent } from './groupMembership.application.event'
import { GroupMembershipCreateDto } from './groupMembership.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class GroupMembershipByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private groupMembershipDomainFacade: GroupMembershipDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/groupMemberships')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.groupMembershipDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/groupMemberships')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: GroupMembershipCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

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
