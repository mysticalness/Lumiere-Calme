import "../styles/global.css"
import Navigation from "../components/navigation"
import { Metadata } from 'next'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
