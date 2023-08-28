export interface EmailSenderAPI {
    files: () => string[]
    read: (fileName: string, encoding?: 'utf8' | string) => string
    remove: (fileName: string) => null
    write: (fileName: string, content: string, a?: string) => null
}

export var api: EmailSenderAPI;

export var input: {
     'from': string,
    'to': string,
    'cc': string,
    'subject':string,
    'text':string,
    'html':string,
    'attachments': string[]
}