import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { LegalDocumentDomainFacade } from './legalDocument.domain.facade'
import { LegalDocument } from './legalDocument.model'

@Module({
  imports: [TypeOrmModule.forFeature([LegalDocument]), DatabaseHelperModule],
  providers: [LegalDocumentDomainFacade, LegalDocumentDomainFacade],
  exports: [LegalDocumentDomainFacade],
})
export class LegalDocumentDomainModule {}
