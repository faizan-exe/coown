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
import { Asset, AssetDomainFacade } from '@server/modules/asset/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { AssetApplicationEvent } from './asset.application.event'
import { AssetCreateDto, AssetUpdateDto } from './asset.dto'

@Controller('/v1/assets')
export class AssetController {
  constructor(
    private eventService: EventService,
    private assetDomainFacade: AssetDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.assetDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: AssetCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.assetDomainFacade.create(body)

    await this.eventService.emit<AssetApplicationEvent.AssetCreated.Payload>(
      AssetApplicationEvent.AssetCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:assetId')
  async findOne(@Param('assetId') assetId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.assetDomainFacade.findOneByIdOrFail(
      assetId,
      queryOptions,
    )

    return item
  }

  @Patch('/:assetId')
  async update(
    @Param('assetId') assetId: string,
    @Body() body: AssetUpdateDto,
  ) {
    const item = await this.assetDomainFacade.findOneByIdOrFail(assetId)

    const itemUpdated = await this.assetDomainFacade.update(
      item,
      body as Partial<Asset>,
    )
    return itemUpdated
  }

  @Delete('/:assetId')
  async delete(@Param('assetId') assetId: string) {
    const item = await this.assetDomainFacade.findOneByIdOrFail(assetId)

    await this.assetDomainFacade.delete(item)

    return item
  }
}
