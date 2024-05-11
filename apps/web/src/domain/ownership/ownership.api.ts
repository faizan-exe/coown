import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Ownership } from './ownership.model'

export class OwnershipApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Ownership>,
  ): Promise<Ownership[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/ownerships${buildOptions}`)
  }

  static findOne(
    ownershipId: string,
    queryOptions?: ApiHelper.QueryOptions<Ownership>,
  ): Promise<Ownership> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/ownerships/${ownershipId}${buildOptions}`)
  }

  static createOne(values: Partial<Ownership>): Promise<Ownership> {
    return HttpService.api.post(`/v1/ownerships`, values)
  }

  static updateOne(
    ownershipId: string,
    values: Partial<Ownership>,
  ): Promise<Ownership> {
    return HttpService.api.patch(`/v1/ownerships/${ownershipId}`, values)
  }

  static deleteOne(ownershipId: string): Promise<void> {
    return HttpService.api.delete(`/v1/ownerships/${ownershipId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Ownership>,
  ): Promise<Ownership[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/ownerships${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Ownership>,
  ): Promise<Ownership> {
    return HttpService.api.post(`/v1/users/user/${userId}/ownerships`, values)
  }

  static findManyByAssetId(
    assetId: string,
    queryOptions?: ApiHelper.QueryOptions<Ownership>,
  ): Promise<Ownership[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/assets/asset/${assetId}/ownerships${buildOptions}`,
    )
  }

  static createOneByAssetId(
    assetId: string,
    values: Partial<Ownership>,
  ): Promise<Ownership> {
    return HttpService.api.post(
      `/v1/assets/asset/${assetId}/ownerships`,
      values,
    )
  }
}
