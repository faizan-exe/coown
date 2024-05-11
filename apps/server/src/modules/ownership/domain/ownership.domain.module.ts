import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { OwnershipDomainFacade } from './ownership.domain.facade'
import { Ownership } from './ownership.model'

@Module({
  imports: [TypeOrmModule.forFeature([Ownership]), DatabaseHelperModule],
  providers: [OwnershipDomainFacade, OwnershipDomainFacade],
  exports: [OwnershipDomainFacade],
})
export class OwnershipDomainModule {}
