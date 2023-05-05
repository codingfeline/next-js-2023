import Head from 'next/head'
import Image from 'next/image'

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <h2>about</h2>

      {['1', '2', '3', '4', '5'].map(path => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpg`} alt="planet" width="880" height="820" />
          </div>
        )
      })}
    </>
  )
}

export default About
