import type { ReactNode } from 'react'
import { Header } from 'src/components/layout/Header/Header'
import { Footer } from 'src/components/layout/Footer/Footer'
import { CartDrawer } from 'src/components/layout/CartDrawer/CartDrawer'

interface DinerLayoutProps {
  children: ReactNode
}

const DinerLayout = ({ children }: DinerLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default DinerLayout
