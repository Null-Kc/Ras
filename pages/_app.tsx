import '../styles/globals.css'
import '../styles/Footer.css'
import '../styles/Members.css'
import '../styles/Contato.css'
import '../styles/Menu.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
