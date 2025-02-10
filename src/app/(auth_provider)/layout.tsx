

export default function AuthProviderRootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <div className="flex bg-[#272727] flex-col min-h-screen">
		{children}
	</div>
}