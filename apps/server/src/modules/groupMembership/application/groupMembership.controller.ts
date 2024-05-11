import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import {
  GroupMembership,
  GroupMembershipDomainFacade,
} from '@server/modules/groupMembership/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { GroupMembershipApplicationEvent } from './groupMembership.application.event'
import {
  GroupMembershipCreateDto,
  GroupMembershipUpdateDto,
} from './groupMembership.dto'

@Controller('/v1/groupMemberships')
export class GroupMembershipController {
  constructor(
    private eventService: EventService,
    private groupMembershipDomainFacade: GroupMembershipDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.groupMembershipDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: GroupMembershipCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.groupMembershipDomainFacade.create(body)

    await this.eventService.emit<GroupMembershipApplicationEvent.GroupMembershipCreated.Payload>(
      GroupMembershipApplicationEvent.GroupMembershipCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:groupMembershipId')
  async findOne(
    @Param('groupMembershipId') groupMembershipId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.groupMembershipDomainFacade.findOneByIdOrFail(
      groupMembershipId,
      queryOptions,
    )

    return item
  }

  @Patch('/:groupMembershipId')
  async update(
    @Param('groupMembershipId') groupMembershipId: string,
    @Body() body: GroupMembershipUpdateDto,
  ) {
    const item =
      await this.groupMembershipDomainFacade.findOneByIdOrFail(
        groupMembershipId,
      )

    const itemUpdated = await this.groupMembershipDomainFacade.update(
      item,
      body as Partial<GroupMembership>,
    )
    return itemUpdated
  }

  @Delete('/:groupMembershipId')
  async delete(@Param('groupMembershipId') groupMembershipId: string) {
    const item =
      await this.groupMembershipDomainFacade.findOneByIdOrFail(
        groupMembershipId,
      )

    await this.groupMembershipDomainFacade.delete(item)

    return item
  }
}
