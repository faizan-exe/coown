import { Asset } from '../asset'

export class AssetValueHistory {
  id: string

  recordedDate?: string

  value?: number

  assetId: string

  asset?: Asset

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
