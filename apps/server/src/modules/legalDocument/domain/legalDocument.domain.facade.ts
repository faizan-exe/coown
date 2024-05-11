import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { LegalDocument } from './legalDocument.model'

import { Asset } from '../../asset/domain'

@Injectable()
export class LegalDocumentDomainFacade {
  constructor(
    @InjectRepository(LegalDocument)
    private repository: Repository<LegalDocument>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<LegalDocument>): Promise<LegalDocument> {
    return this.repository.save(values)
  }

  async update(
    item: LegalDocument,
    values: Partial<LegalDocument>,
  ): Promise<LegalDocument> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: LegalDocument): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<LegalDocument> = {},
  ): Promise<LegalDocument[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<LegalDocument> = {},
  ): Promise<LegalDocument> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

  async findManyByAsset(
    item: Asset,
    queryOptions: RequestHelper.QueryOptions<LegalDocument> = {},
  ): Promise<LegalDocument[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('asset')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        assetId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
