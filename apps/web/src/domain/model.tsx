import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Asset as AssetModel } from './asset/asset.model'

import { Interest as InterestModel } from './interest/interest.model'

import { Ownership as OwnershipModel } from './ownership/ownership.model'

import { Group as GroupModel } from './group/group.model'

import { GroupMembership as GroupMembershipModel } from './groupMembership/groupMembership.model'

import { LegalDocument as LegalDocumentModel } from './legalDocument/legalDocument.model'

import { Transaction as TransactionModel } from './transaction/transaction.model'

import { AssetValueHistory as AssetValueHistoryModel } from './assetValueHistory/assetValueHistory.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class Asset extends AssetModel {}

  export class Interest extends InterestModel {}

  export class Ownership extends OwnershipModel {}

  export class Group extends GroupModel {}

  export class GroupMembership extends GroupMembershipModel {}

  export class LegalDocument extends LegalDocumentModel {}

  export class Transaction extends TransactionModel {}

  export class AssetValueHistory extends AssetValueHistoryModel {}
}
