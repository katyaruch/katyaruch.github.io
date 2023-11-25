import './globals.scss'
import Header from './components/Header/Header'
import { Montserrat } from 'next/font/google'
 
const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Katya Ruch - Portfolio',
  description: 'HTML | CSS | JS | React',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  )
}
