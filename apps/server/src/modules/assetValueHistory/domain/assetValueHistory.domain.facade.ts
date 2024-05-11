import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { AssetValueHistory } from './assetValueHistory.model'

import { Asset } from '../../asset/domain'

@Injectable()
export class AssetValueHistoryDomainFacade {
  constructor(
    @InjectRepository(AssetValueHistory)
    private repository: Repository<AssetValueHistory>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<AssetValueHistory>): Promise<AssetValueHistory> {
    return this.repository.save(values)
  }

  async update(
    item: AssetValueHistory,
    values: Partial<AssetValueHistory>,
  ): Promise<AssetValueHistory> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: AssetValueHistory): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<AssetValueHistory> = {},
  ): Promise<AssetValueHistory[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<AssetValueHistory> = {},
  ): Promise<AssetValueHistory> {
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
    queryOptions: RequestHelper.QueryOptions<AssetValueHistory> = {},
  ): Promise<AssetValueHistory[]> {
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
