"use server";
import { cookies } from "next/headers"

interface SetCookieServerSideProps {
	name: string
	value: string
}

interface RemoveCookieServerSideProps {
	name: string
}


//Guardar una cookie
export const setAuthCookie = async (token: string) => {
    const cookieStore = await cookies();
    cookieStore.set('token', token, {
        httpOnly: true,
    })
}

//Obtener una cookie
export const getAuthCookie = async() => {
    const cookieStore = await cookies();
    return cookieStore.get('token')?.value;
}

//Eliminar una cookie
export const removeAuthCookie = async(name: string) => {
    const cookieStore = await cookies();
    cookieStore.delete(name);
}


export const SetCookieServerSide = async ({
	name,
	value,
}: SetCookieServerSideProps) => {
    const cookieStore = await cookies();
	cookieStore.set(name, value)
}

export const RemoveCookieServerSide = async ({
	name,
}: RemoveCookieServerSideProps) => {
    const cookieStore = await cookies();
	cookieStore.delete(name)
}

export default SetCookieServerSide