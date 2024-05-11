import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { InterestDomainFacade } from '@server/modules/interest/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { InterestApplicationEvent } from './interest.application.event'
import { InterestCreateDto } from './interest.dto'

import { AssetDomainFacade } from '../../asset/domain'

@Controller('/v1/assets')
export class InterestByAssetController {
  constructor(
    private assetDomainFacade: AssetDomainFacade,

    private interestDomainFacade: InterestDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/asset/:assetId/interests')
  async findManyAssetId(
    @Param('assetId') assetId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.assetDomainFacade.findOneByIdOrFail(assetId)

    const items = await this.interestDomainFacade.findManyByAsset(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/asset/:assetId/interests')
  async createByAssetId(
    @Param('assetId') assetId: string,
    @Body() body: InterestCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, assetId }

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
