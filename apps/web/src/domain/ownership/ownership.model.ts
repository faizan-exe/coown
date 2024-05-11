import { User } from '../user'

import { Asset } from '../asset'

import { Transaction } from '../transaction'

export class Ownership {
  id: string

  sharePercentage?: number

  userId: string

  user?: User

  assetId: string

  asset?: Asset

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  transactions?: Transaction[]
}
