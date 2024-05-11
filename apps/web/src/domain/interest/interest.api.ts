import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Interest } from './interest.model'

export class InterestApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Interest>,
  ): Promise<Interest[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/interests${buildOptions}`)
  }

  static findOne(
    interestId: string,
    queryOptions?: ApiHelper.QueryOptions<Interest>,
  ): Promise<Interest> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/interests/${interestId}${buildOptions}`)
  }

  static createOne(values: Partial<Interest>): Promise<Interest> {
    return HttpService.api.post(`/v1/interests`, values)
  }

  static updateOne(
    interestId: string,
    values: Partial<Interest>,
  ): Promise<Interest> {
    return HttpService.api.patch(`/v1/interests/${interestId}`, values)
  }

  static deleteOne(interestId: string): Promise<void> {
    return HttpService.api.delete(`/v1/interests/${interestId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Interest>,
  ): Promise<Interest[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/interests${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Interest>,
  ): Promise<Interest> {
    return HttpService.api.post(`/v1/users/user/${userId}/interests`, values)
  }

  static findManyByAssetId(
    assetId: string,
    queryOptions?: ApiHelper.QueryOptions<Interest>,
  ): Promise<Interest[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/assets/asset/${assetId}/interests${buildOptions}`,
    )
  }

  static createOneByAssetId(
    assetId: string,
    values: Partial<Interest>,
  ): Promise<Interest> {
    return HttpService.api.post(`/v1/assets/asset/${assetId}/interests`, values)
  }
}
