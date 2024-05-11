import { Notification } from '../notification'

import { Interest } from '../interest'

import { Ownership } from '../ownership'

import { GroupMembership } from '../groupMembership'

export enum UserStatus {
  CREATED = 'CREATED',
  VERIFIED = 'VERIFIED',
}
export class User {
  id: string
  email: string
  status: UserStatus
  name: string
  pictureUrl: string
  password: string
  dateCreated: string
  dateUpdated: string
  notifications?: Notification[]

  interests?: Interest[]

  ownerships?: Ownership[]

  groupMemberships?: GroupMembership[]
}
