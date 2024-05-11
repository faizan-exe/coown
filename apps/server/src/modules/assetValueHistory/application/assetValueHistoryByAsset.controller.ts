import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { AssetValueHistoryDomainFacade } from '@server/modules/assetValueHistory/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { AssetValueHistoryApplicationEvent } from './assetValueHistory.application.event'
import { AssetValueHistoryCreateDto } from './assetValueHistory.dto'

import { AssetDomainFacade } from '../../asset/domain'

@Controller('/v1/assets')
export class AssetValueHistoryByAssetController {
  constructor(
    private assetDomainFacade: AssetDomainFacade,

    private assetValueHistoryDomainFacade: AssetValueHistoryDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/asset/:assetId/assetValueHistorys')
  async findManyAssetId(
    @Param('assetId') assetId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.assetDomainFacade.findOneByIdOrFail(assetId)

    const items = await this.assetValueHistoryDomainFacade.findManyByAsset(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/asset/:assetId/assetValueHistorys')
  async createByAssetId(
    @Param('assetId') assetId: string,
    @Body() body: AssetValueHistoryCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, assetId }

    const item = await this.assetValueHistoryDomainFacade.create(valuesUpdated)

    await this.eventService.emit<AssetValueHistoryApplicationEvent.AssetValueHistoryCreated.Payload>(
      AssetValueHistoryApplicationEvent.AssetValueHistoryCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
