import { Group } from '../group'

import { User } from '../user'

export class GroupMembership {
  id: string

  role?: string

  groupId: string

  group?: Group

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
