export namespace AssetApplicationEvent {
  export namespace AssetCreated {
    export const key = 'asset.application.asset.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
