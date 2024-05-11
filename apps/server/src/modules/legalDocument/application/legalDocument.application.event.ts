export namespace LegalDocumentApplicationEvent {
  export namespace LegalDocumentCreated {
    export const key = 'legalDocument.application.legalDocument.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
