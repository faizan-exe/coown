import { Asset } from '../asset'

export class LegalDocument {
  id: string

  documentType?: string

  contentUrl?: string

  assetId: string

  asset?: Asset

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
