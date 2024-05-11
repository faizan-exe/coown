import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Asset } from './asset.model'

export class AssetApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Asset>,
  ): Promise<Asset[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/assets${buildOptions}`)
  }

  static findOne(
    assetId: string,
    queryOptions?: ApiHelper.QueryOptions<Asset>,
  ): Promise<Asset> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/assets/${assetId}${buildOptions}`)
  }

  static createOne(values: Partial<Asset>): Promise<Asset> {
    return HttpService.api.post(`/v1/assets`, values)
  }

  static updateOne(assetId: string, values: Partial<Asset>): Promise<Asset> {
    return HttpService.api.patch(`/v1/assets/${assetId}`, values)
  }

  static deleteOne(assetId: string): Promise<void> {
    return HttpService.api.delete(`/v1/assets/${assetId}`)
  }
}
