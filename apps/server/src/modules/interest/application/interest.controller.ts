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
import { Interest, InterestDomainFacade } from '@server/modules/interest/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { InterestApplicationEvent } from './interest.application.event'
import { InterestCreateDto, InterestUpdateDto } from './interest.dto'

@Controller('/v1/interests')
export class InterestController {
  constructor(
    private eventService: EventService,
    private interestDomainFacade: InterestDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.interestDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: InterestCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.interestDomainFacade.create(body)

    await this.eventService.emit<InterestApplicationEvent.InterestCreated.Payload>(
      InterestApplicationEvent.InterestCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:interestId')
  async findOne(
    @Param('interestId') interestId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.interestDomainFacade.findOneByIdOrFail(
      interestId,
      queryOptions,
    )

    return item
  }

  @Patch('/:interestId')
  async update(
    @Param('interestId') interestId: string,
    @Body() body: InterestUpdateDto,
  ) {
    const item = await this.interestDomainFacade.findOneByIdOrFail(interestId)

    const itemUpdated = await this.interestDomainFacade.update(
      item,
      body as Partial<Interest>,
    )
    return itemUpdated
  }

  @Delete('/:interestId')
  async delete(@Param('interestId') interestId: string) {
    const item = await this.interestDomainFacade.findOneByIdOrFail(interestId)

    await this.interestDomainFacade.delete(item)

    return item
  }
}
