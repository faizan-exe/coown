import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { GroupMembership } from './groupMembership.model'

import { Group } from '../../group/domain'

import { User } from '../../user/domain'

@Injectable()
export class GroupMembershipDomainFacade {
  constructor(
    @InjectRepository(GroupMembership)
    private repository: Repository<GroupMembership>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<GroupMembership>): Promise<GroupMembership> {
    return this.repository.save(values)
  }

  async update(
    item: GroupMembership,
    values: Partial<GroupMembership>,
  ): Promise<GroupMembership> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: GroupMembership): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<GroupMembership> = {},
  ): Promise<GroupMembership[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<GroupMembership> = {},
  ): Promise<GroupMembership> {
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

  async findManyByGroup(
    item: Group,
    queryOptions: RequestHelper.QueryOptions<GroupMembership> = {},
  ): Promise<GroupMembership[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('group')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        groupId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

  async findManyByUser(
    item: User,
    queryOptions: RequestHelper.QueryOptions<GroupMembership> = {},
  ): Promise<GroupMembership[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('user')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        userId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
