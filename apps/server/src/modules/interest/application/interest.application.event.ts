export namespace InterestApplicationEvent {
  export namespace InterestCreated {
    export const key = 'interest.application.interest.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
