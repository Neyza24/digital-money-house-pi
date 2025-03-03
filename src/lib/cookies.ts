"use server";
import { cookies } from "next/headers"

interface SetCookieServerSideProps {
	name: string
	value: string
}

interface RemoveCookieServerSideProps {
	name: string
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