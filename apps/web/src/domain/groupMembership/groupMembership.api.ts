import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { GroupMembership } from './groupMembership.model'

export class GroupMembershipApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<GroupMembership>,
  ): Promise<GroupMembership[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/groupMemberships${buildOptions}`)
  }

  static findOne(
    groupMembershipId: string,
    queryOptions?: ApiHelper.QueryOptions<GroupMembership>,
  ): Promise<GroupMembership> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/groupMemberships/${groupMembershipId}${buildOptions}`,
    )
  }

  static createOne(values: Partial<GroupMembership>): Promise<GroupMembership> {
    return HttpService.api.post(`/v1/groupMemberships`, values)
  }

  static updateOne(
    groupMembershipId: string,
    values: Partial<GroupMembership>,
  ): Promise<GroupMembership> {
    return HttpService.api.patch(
      `/v1/groupMemberships/${groupMembershipId}`,
      values,
    )
  }

  static deleteOne(groupMembershipId: string): Promise<void> {
    return HttpService.api.delete(`/v1/groupMemberships/${groupMembershipId}`)
  }

  static findManyByGroupId(
    groupId: string,
    queryOptions?: ApiHelper.QueryOptions<GroupMembership>,
  ): Promise<GroupMembership[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/groups/group/${groupId}/groupMemberships${buildOptions}`,
    )
  }

  static createOneByGroupId(
    groupId: string,
    values: Partial<GroupMembership>,
  ): Promise<GroupMembership> {
    return HttpService.api.post(
      `/v1/groups/group/${groupId}/groupMemberships`,
      values,
    )
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<GroupMembership>,
  ): Promise<GroupMembership[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/groupMemberships${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<GroupMembership>,
  ): Promise<GroupMembership> {
    return HttpService.api.post(
      `/v1/users/user/${userId}/groupMemberships`,
      values,
    )
  }
}
