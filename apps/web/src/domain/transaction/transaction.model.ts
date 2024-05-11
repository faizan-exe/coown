import { Ownership } from '../ownership'

export class Transaction {
  id: string

  transactionType?: string

  transactionDate?: string

  amount?: number

  ownershipId: string

  ownership?: Ownership

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
