import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Transaction } from './transaction.model'

export class TransactionApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Transaction>,
  ): Promise<Transaction[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/transactions${buildOptions}`)
  }

  static findOne(
    transactionId: string,
    queryOptions?: ApiHelper.QueryOptions<Transaction>,
  ): Promise<Transaction> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/transactions/${transactionId}${buildOptions}`,
    )
  }

  static createOne(values: Partial<Transaction>): Promise<Transaction> {
    return HttpService.api.post(`/v1/transactions`, values)
  }

  static updateOne(
    transactionId: string,
    values: Partial<Transaction>,
  ): Promise<Transaction> {
    return HttpService.api.patch(`/v1/transactions/${transactionId}`, values)
  }

  static deleteOne(transactionId: string): Promise<void> {
    return HttpService.api.delete(`/v1/transactions/${transactionId}`)
  }

  static findManyByOwnershipId(
    ownershipId: string,
    queryOptions?: ApiHelper.QueryOptions<Transaction>,
  ): Promise<Transaction[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/ownerships/ownership/${ownershipId}/transactions${buildOptions}`,
    )
  }

  static createOneByOwnershipId(
    ownershipId: string,
    values: Partial<Transaction>,
  ): Promise<Transaction> {
    return HttpService.api.post(
      `/v1/ownerships/ownership/${ownershipId}/transactions`,
      values,
    )
  }
}
