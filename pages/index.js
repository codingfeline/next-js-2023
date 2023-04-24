import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS</title>
      </Head>
      <h1>welcome</h1>
      {/* <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      ></main> */}
    </>
  )
}
