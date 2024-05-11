import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { InterestDomainFacade } from './interest.domain.facade'
import { Interest } from './interest.model'

@Module({
  imports: [TypeOrmModule.forFeature([Interest]), DatabaseHelperModule],
  providers: [InterestDomainFacade, InterestDomainFacade],
  exports: [InterestDomainFacade],
})
export class InterestDomainModule {}
