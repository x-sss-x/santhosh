import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from "./Toggles/Button"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Button>Get started</Button>
      <h1 className='text-xl font-bold font-sans'> multi service app 06</h1>
    </main>
  )
}