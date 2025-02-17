import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/styles/globals.css";
import { AuthContextProvider } from "@/context/AuthContext";
import Footer from "@/components/footer";
// import Header from "@/components/header";
import { HeaderContextProvider } from "@/context/HeaderContext";


const openSans = Open_Sans({
  // variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Billetera Virtual DH",
  description: "A virtual wallet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased flex flex-col`}>
        <AuthContextProvider>
          <HeaderContextProvider>
            {children}
            <Footer />
          </HeaderContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
