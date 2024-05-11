import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { AssetValueHistory } from './assetValueHistory.model'

export class AssetValueHistoryApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<AssetValueHistory>,
  ): Promise<AssetValueHistory[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/assetValueHistorys${buildOptions}`)
  }

  static findOne(
    assetValueHistoryId: string,
    queryOptions?: ApiHelper.QueryOptions<AssetValueHistory>,
  ): Promise<AssetValueHistory> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/assetValueHistorys/${assetValueHistoryId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<AssetValueHistory>,
  ): Promise<AssetValueHistory> {
    return HttpService.api.post(`/v1/assetValueHistorys`, values)
  }

  static updateOne(
    assetValueHistoryId: string,
    values: Partial<AssetValueHistory>,
  ): Promise<AssetValueHistory> {
    return HttpService.api.patch(
      `/v1/assetValueHistorys/${assetValueHistoryId}`,
      values,
    )
  }

  static deleteOne(assetValueHistoryId: string): Promise<void> {
    return HttpService.api.delete(
      `/v1/assetValueHistorys/${assetValueHistoryId}`,
    )
  }

  static findManyByAssetId(
    assetId: string,
    queryOptions?: ApiHelper.QueryOptions<AssetValueHistory>,
  ): Promise<AssetValueHistory[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/assets/asset/${assetId}/assetValueHistorys${buildOptions}`,
    )
  }

  static createOneByAssetId(
    assetId: string,
    values: Partial<AssetValueHistory>,
  ): Promise<AssetValueHistory> {
    return HttpService.api.post(
      `/v1/assets/asset/${assetId}/assetValueHistorys`,
      values,
    )
  }
}
