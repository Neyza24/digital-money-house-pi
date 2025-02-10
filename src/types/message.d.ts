export interface ErrorMessage {
	[key: string]: string | object | null
}


export type ErrorMessageType = ErrorMessage | null | string | object