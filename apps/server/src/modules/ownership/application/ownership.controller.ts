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
  Ownership,
  OwnershipDomainFacade,
} from '@server/modules/ownership/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { OwnershipApplicationEvent } from './ownership.application.event'
import { OwnershipCreateDto, OwnershipUpdateDto } from './ownership.dto'

@Controller('/v1/ownerships')
export class OwnershipController {
  constructor(
    private eventService: EventService,
    private ownershipDomainFacade: OwnershipDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.ownershipDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: OwnershipCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.ownershipDomainFacade.create(body)

    await this.eventService.emit<OwnershipApplicationEvent.OwnershipCreated.Payload>(
      OwnershipApplicationEvent.OwnershipCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:ownershipId')
  async findOne(
    @Param('ownershipId') ownershipId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.ownershipDomainFacade.findOneByIdOrFail(
      ownershipId,
      queryOptions,
    )

    return item
  }

  @Patch('/:ownershipId')
  async update(
    @Param('ownershipId') ownershipId: string,
    @Body() body: OwnershipUpdateDto,
  ) {
    const item = await this.ownershipDomainFacade.findOneByIdOrFail(ownershipId)

    const itemUpdated = await this.ownershipDomainFacade.update(
      item,
      body as Partial<Ownership>,
    )
    return itemUpdated
  }

  @Delete('/:ownershipId')
  async delete(@Param('ownershipId') ownershipId: string) {
    const item = await this.ownershipDomainFacade.findOneByIdOrFail(ownershipId)

    await this.ownershipDomainFacade.delete(item)

    return item
  }
}
