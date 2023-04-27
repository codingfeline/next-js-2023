import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useState } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ resources }) {
  const [search, setSearch] = useState('')
  // const filtered = [1, 2, 3]
  // console.log(filtered) // will appear in terminal at first load only
  const filtered = resources.map(res => res.topic.match(/A-Z/g))
  return (
    <>
      <Head>
        <title>NextJS</title>
      </Head>
      <div className="hero flex flex-col items-center justify-between">
        <h1>welcome</h1>
        <h2>front-end web dev</h2>
        <h3>flavoured with bespoke APIs</h3>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {search}
        <ul>
          {resources
            .filter(item =>
              search.toLowerCase() === ''
                ? item
                : item.topic.toLowerCase().includes(search)
            )
            .map(resource => (
              <li key={resource._id}>{resource.topic}</li>
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
