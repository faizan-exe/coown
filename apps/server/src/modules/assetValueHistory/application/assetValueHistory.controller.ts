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
  AssetValueHistory,
  AssetValueHistoryDomainFacade,
} from '@server/modules/assetValueHistory/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { AssetValueHistoryApplicationEvent } from './assetValueHistory.application.event'
import {
  AssetValueHistoryCreateDto,
  AssetValueHistoryUpdateDto,
} from './assetValueHistory.dto'

@Controller('/v1/assetValueHistorys')
export class AssetValueHistoryController {
  constructor(
    private eventService: EventService,
    private assetValueHistoryDomainFacade: AssetValueHistoryDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items =
      await this.assetValueHistoryDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: AssetValueHistoryCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.assetValueHistoryDomainFacade.create(body)

    await this.eventService.emit<AssetValueHistoryApplicationEvent.AssetValueHistoryCreated.Payload>(
      AssetValueHistoryApplicationEvent.AssetValueHistoryCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:assetValueHistoryId')
  async findOne(
    @Param('assetValueHistoryId') assetValueHistoryId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.assetValueHistoryDomainFacade.findOneByIdOrFail(
      assetValueHistoryId,
      queryOptions,
    )

    return item
  }

  @Patch('/:assetValueHistoryId')
  async update(
    @Param('assetValueHistoryId') assetValueHistoryId: string,
    @Body() body: AssetValueHistoryUpdateDto,
  ) {
    const item =
      await this.assetValueHistoryDomainFacade.findOneByIdOrFail(
        assetValueHistoryId,
      )

    const itemUpdated = await this.assetValueHistoryDomainFacade.update(
      item,
      body as Partial<AssetValueHistory>,
    )
    return itemUpdated
  }

  @Delete('/:assetValueHistoryId')
  async delete(@Param('assetValueHistoryId') assetValueHistoryId: string) {
    const item =
      await this.assetValueHistoryDomainFacade.findOneByIdOrFail(
        assetValueHistoryId,
      )

    await this.assetValueHistoryDomainFacade.delete(item)

    return item
  }
}
