import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { TransactionDomainFacade } from '@server/modules/transaction/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { TransactionApplicationEvent } from './transaction.application.event'
import { TransactionCreateDto } from './transaction.dto'

import { OwnershipDomainFacade } from '../../ownership/domain'

@Controller('/v1/ownerships')
export class TransactionByOwnershipController {
  constructor(
    private ownershipDomainFacade: OwnershipDomainFacade,

    private transactionDomainFacade: TransactionDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/ownership/:ownershipId/transactions')
  async findManyOwnershipId(
    @Param('ownershipId') ownershipId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.ownershipDomainFacade.findOneByIdOrFail(ownershipId)

    const items = await this.transactionDomainFacade.findManyByOwnership(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/ownership/:ownershipId/transactions')
  async createByOwnershipId(
    @Param('ownershipId') ownershipId: string,
    @Body() body: TransactionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, ownershipId }

    const item = await this.transactionDomainFacade.create(valuesUpdated)

    await this.eventService.emit<TransactionApplicationEvent.TransactionCreated.Payload>(
      TransactionApplicationEvent.TransactionCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
