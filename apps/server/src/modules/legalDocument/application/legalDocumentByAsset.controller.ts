import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { LegalDocumentDomainFacade } from '@server/modules/legalDocument/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { LegalDocumentApplicationEvent } from './legalDocument.application.event'
import { LegalDocumentCreateDto } from './legalDocument.dto'

import { AssetDomainFacade } from '../../asset/domain'

@Controller('/v1/assets')
export class LegalDocumentByAssetController {
  constructor(
    private assetDomainFacade: AssetDomainFacade,

    private legalDocumentDomainFacade: LegalDocumentDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/asset/:assetId/legalDocuments')
  async findManyAssetId(
    @Param('assetId') assetId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.assetDomainFacade.findOneByIdOrFail(assetId)

    const items = await this.legalDocumentDomainFacade.findManyByAsset(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/asset/:assetId/legalDocuments')
  async createByAssetId(
    @Param('assetId') assetId: string,
    @Body() body: LegalDocumentCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, assetId }

    const item = await this.legalDocumentDomainFacade.create(valuesUpdated)

    await this.eventService.emit<LegalDocumentApplicationEvent.LegalDocumentCreated.Payload>(
      LegalDocumentApplicationEvent.LegalDocumentCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
