import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ resources }) {
  // console.log('test from Home')
  return (
    <>
      <Head>
        <title>NextJS</title>
      </Head>
      <div className="hero flex flex-col items-center justify-between">
        <h1>welcome</h1>
        <h2>front-end web dev</h2>
        <h3>flavoured with bespoke APIs</h3>
        <input type="text" />
        <ul>
          {resources.map(resource => (
            <li>{resource.topic}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://nazs.net/api/journals')
  let resources = await res.json()
  resources = resources.map(res => {
    return {
      _id: res._id,
      topic: res.topic,
    }
  })

  return {
    props: { resources },
  }
}
