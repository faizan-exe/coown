export namespace GroupMembershipApplicationEvent {
  export namespace GroupMembershipCreated {
    export const key = 'groupMembership.application.groupMembership.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
