import '@/styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css';
import { Space_Grotesk } from "next/font/google";
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space-grotesk' });

export default function App({ Component, pageProps }: AppProps) {
  return <main className={`${spaceGrotesk.variable} font-space-grotesk`}>
  <Component {...pageProps} />
  <ToastContainer  className="p-6"/>
  </main>
}
