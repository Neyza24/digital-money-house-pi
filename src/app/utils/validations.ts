
export function validateFieldsRequired(fields: Record<string, any> ) {
    const errors: Record<string, string> = {};
    for(const [key, value] of Object.entries(fields)) {
        if(!value) {
            errors[key] = 'Información requerida'
        }
    }
    return errors;
}

export function validatePassword(password: string) {
    const lengthRegex = /^.{6,20}$/
	const uppercaseRegex = /(?=.*[A-Z])/
	const numberRegex = /(?=.*\d)/
	const specialCharRegex = /(?=.*[!@#$%^&*])/

	if (!lengthRegex.test(password)) {
		return 'La contraseña debe tener entre 6 y 20 caracteres'
	}
	if (!uppercaseRegex.test(password)) {
		return 'La contraseña debe contener al menos una letra mayúscula'
	}
	if (!numberRegex.test(password)) {
		return 'La contraseña debe contener al menos un número'
	}
	if (!specialCharRegex.test(password)) {
		return 'La contraseña debe contener al menos un carácter especial (!@#$%^&*)'
	}
	return null
}