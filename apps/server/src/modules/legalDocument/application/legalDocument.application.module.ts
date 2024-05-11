import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { LegalDocumentDomainModule } from '../domain'
import { LegalDocumentController } from './legalDocument.controller'

import { AssetDomainModule } from '../../../modules/asset/domain'

import { LegalDocumentByAssetController } from './legalDocumentByAsset.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    LegalDocumentDomainModule,

    AssetDomainModule,
  ],
  controllers: [LegalDocumentController, LegalDocumentByAssetController],
  providers: [],
})
export class LegalDocumentApplicationModule {}
