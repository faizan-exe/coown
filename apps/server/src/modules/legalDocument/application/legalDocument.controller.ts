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
  LegalDocument,
  LegalDocumentDomainFacade,
} from '@server/modules/legalDocument/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { LegalDocumentApplicationEvent } from './legalDocument.application.event'
import {
  LegalDocumentCreateDto,
  LegalDocumentUpdateDto,
} from './legalDocument.dto'

@Controller('/v1/legalDocuments')
export class LegalDocumentController {
  constructor(
    private eventService: EventService,
    private legalDocumentDomainFacade: LegalDocumentDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.legalDocumentDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: LegalDocumentCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.legalDocumentDomainFacade.create(body)

    await this.eventService.emit<LegalDocumentApplicationEvent.LegalDocumentCreated.Payload>(
      LegalDocumentApplicationEvent.LegalDocumentCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:legalDocumentId')
  async findOne(
    @Param('legalDocumentId') legalDocumentId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.legalDocumentDomainFacade.findOneByIdOrFail(
      legalDocumentId,
      queryOptions,
    )

    return item
  }

  @Patch('/:legalDocumentId')
  async update(
    @Param('legalDocumentId') legalDocumentId: string,
    @Body() body: LegalDocumentUpdateDto,
  ) {
    const item =
      await this.legalDocumentDomainFacade.findOneByIdOrFail(legalDocumentId)

    const itemUpdated = await this.legalDocumentDomainFacade.update(
      item,
      body as Partial<LegalDocument>,
    )
    return itemUpdated
  }

  @Delete('/:legalDocumentId')
  async delete(@Param('legalDocumentId') legalDocumentId: string) {
    const item =
      await this.legalDocumentDomainFacade.findOneByIdOrFail(legalDocumentId)

    await this.legalDocumentDomainFacade.delete(item)

    return item
  }
}
