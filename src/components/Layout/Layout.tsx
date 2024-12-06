import Header from '../Header/Header'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4">
        {children}
      </main>
    </div>
  )
}
