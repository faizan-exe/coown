export namespace AssetValueHistoryApplicationEvent {
  export namespace AssetValueHistoryCreated {
    export const key = 'assetValueHistory.application.assetValueHistory.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
