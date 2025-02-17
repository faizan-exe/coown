import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { InterestDomainFacade } from '@server/modules/interest/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { InterestApplicationEvent } from './interest.application.event'
import { InterestCreateDto } from './interest.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class InterestByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private interestDomainFacade: InterestDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/interests')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.interestDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/interests')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: InterestCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.interestDomainFacade.create(valuesUpdated)

    await this.eventService.emit<InterestApplicationEvent.InterestCreated.Payload>(
      InterestApplicationEvent.InterestCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
