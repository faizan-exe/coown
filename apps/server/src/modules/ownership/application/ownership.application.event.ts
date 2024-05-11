export namespace OwnershipApplicationEvent {
  export namespace OwnershipCreated {
    export const key = 'ownership.application.ownership.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
