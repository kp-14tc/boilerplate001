import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hackathon App",
  description: "Built with Next.js + shadcn",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <nav className="border-b px-8 py-4 flex gap-6">
          <Link href="/" className="font-semibold hover:underline">Home</Link>
          <Link href="/dashboard" className="font-semibold hover:underline">Dashboard</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}