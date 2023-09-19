
import { Inter } from 'next/font/google';
import { Providers } from '@providers';
import {Nav} from '@/components/Nav';
import '@sass/styles.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HouseTechMX',
  description: 'Servicios de desarrollo de software y sitios web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} >
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>

  )
}
