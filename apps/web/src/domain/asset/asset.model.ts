import { Interest } from '../interest'

import { Ownership } from '../ownership'

import { Group } from '../group'

import { LegalDocument } from '../legalDocument'

import { AssetValueHistory } from '../assetValueHistory'

export class Asset {
  id: string

  name: string

  description?: string

  totalValue?: number

  availableQuota?: number

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  interests?: Interest[]

  ownerships?: Ownership[]

  groups?: Group[]

  legalDocuments?: LegalDocument[]

  assetValueHistorys?: AssetValueHistory[]
}
