export interface ErrorMessage {
	[key: string]: string | object | null
}
export interface ErrorRegisterMessage {
	firstName?: string
	lastName?: string
	dni?: string
	email?: string
	password?: string
	phone?: string
	userAlreadyExists?: string
}