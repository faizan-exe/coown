import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { LegalDocument } from './legalDocument.model'

export class LegalDocumentApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<LegalDocument>,
  ): Promise<LegalDocument[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/legalDocuments${buildOptions}`)
  }

  static findOne(
    legalDocumentId: string,
    queryOptions?: ApiHelper.QueryOptions<LegalDocument>,
  ): Promise<LegalDocument> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/legalDocuments/${legalDocumentId}${buildOptions}`,
    )
  }

  static createOne(values: Partial<LegalDocument>): Promise<LegalDocument> {
    return HttpService.api.post(`/v1/legalDocuments`, values)
  }

  static updateOne(
    legalDocumentId: string,
    values: Partial<LegalDocument>,
  ): Promise<LegalDocument> {
    return HttpService.api.patch(
      `/v1/legalDocuments/${legalDocumentId}`,
      values,
    )
  }

  static deleteOne(legalDocumentId: string): Promise<void> {
    return HttpService.api.delete(`/v1/legalDocuments/${legalDocumentId}`)
  }

  static findManyByAssetId(
    assetId: string,
    queryOptions?: ApiHelper.QueryOptions<LegalDocument>,
  ): Promise<LegalDocument[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/assets/asset/${assetId}/legalDocuments${buildOptions}`,
    )
  }

  static createOneByAssetId(
    assetId: string,
    values: Partial<LegalDocument>,
  ): Promise<LegalDocument> {
    return HttpService.api.post(
      `/v1/assets/asset/${assetId}/legalDocuments`,
      values,
    )
  }
}
