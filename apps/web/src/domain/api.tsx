import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { AssetApi } from './asset/asset.api'

import { InterestApi } from './interest/interest.api'

import { OwnershipApi } from './ownership/ownership.api'

import { GroupApi } from './group/group.api'

import { GroupMembershipApi } from './groupMembership/groupMembership.api'

import { LegalDocumentApi } from './legalDocument/legalDocument.api'

import { TransactionApi } from './transaction/transaction.api'

import { AssetValueHistoryApi } from './assetValueHistory/assetValueHistory.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class Asset extends AssetApi {}

  export class Interest extends InterestApi {}

  export class Ownership extends OwnershipApi {}

  export class Group extends GroupApi {}

  export class GroupMembership extends GroupMembershipApi {}

  export class LegalDocument extends LegalDocumentApi {}

  export class Transaction extends TransactionApi {}

  export class AssetValueHistory extends AssetValueHistoryApi {}
}
