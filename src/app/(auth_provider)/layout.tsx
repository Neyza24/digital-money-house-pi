

import { AuthContextProvider } from "@/context/AuthContext"


export default function AuthProviderRootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <AuthContextProvider>
		<div className="flex bg-[#272727] flex-col min-h-screen">
			{children}
		</div>
	</AuthContextProvider>
}