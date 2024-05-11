import { User } from '../user'

import { Asset } from '../asset'

export class Interest {
  id: string

  status?: string

  userId: string

  user?: User

  assetId: string

  asset?: Asset

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
