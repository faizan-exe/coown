import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { OwnershipDomainFacade } from '@server/modules/ownership/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { OwnershipApplicationEvent } from './ownership.application.event'
import { OwnershipCreateDto } from './ownership.dto'

import { AssetDomainFacade } from '../../asset/domain'

@Controller('/v1/assets')
export class OwnershipByAssetController {
  constructor(
    private assetDomainFacade: AssetDomainFacade,

    private ownershipDomainFacade: OwnershipDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/asset/:assetId/ownerships')
  async findManyAssetId(
    @Param('assetId') assetId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.assetDomainFacade.findOneByIdOrFail(assetId)

    const items = await this.ownershipDomainFacade.findManyByAsset(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/asset/:assetId/ownerships')
  async createByAssetId(
    @Param('assetId') assetId: string,
    @Body() body: OwnershipCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, assetId }

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
