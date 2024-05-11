import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { GroupDomainFacade } from '@server/modules/group/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { GroupApplicationEvent } from './group.application.event'
import { GroupCreateDto } from './group.dto'

import { AssetDomainFacade } from '../../asset/domain'

@Controller('/v1/assets')
export class GroupByAssetController {
  constructor(
    private assetDomainFacade: AssetDomainFacade,

    private groupDomainFacade: GroupDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/asset/:assetId/groups')
  async findManyAssetId(
    @Param('assetId') assetId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.assetDomainFacade.findOneByIdOrFail(assetId)

    const items = await this.groupDomainFacade.findManyByAsset(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/asset/:assetId/groups')
  async createByAssetId(
    @Param('assetId') assetId: string,
    @Body() body: GroupCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, assetId }

    const item = await this.groupDomainFacade.create(valuesUpdated)

    await this.eventService.emit<GroupApplicationEvent.GroupCreated.Payload>(
      GroupApplicationEvent.GroupCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
