import { Asset } from '../asset'

import { GroupMembership } from '../groupMembership'

export class Group {
  id: string

  name?: string

  assetId: string

  asset?: Asset

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  groupMemberships?: GroupMembership[]
}
