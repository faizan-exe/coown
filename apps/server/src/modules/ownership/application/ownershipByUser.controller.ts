import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { OwnershipDomainFacade } from '@server/modules/ownership/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { OwnershipApplicationEvent } from './ownership.application.event'
import { OwnershipCreateDto } from './ownership.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class OwnershipByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private ownershipDomainFacade: OwnershipDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/ownerships')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.ownershipDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/ownerships')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: OwnershipCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.ownershipDomainFacade.create(valuesUpdated)

    await this.eventService.emit<OwnershipApplicationEvent.OwnershipCreated.Payload>(
      OwnershipApplicationEvent.OwnershipCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
