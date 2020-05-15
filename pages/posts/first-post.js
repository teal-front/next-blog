import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import React from 'react'

export default function FirstPost({name}) {
  let [age, setAge] = React.useState(0)
  React.useEffect(() => {
    setTimeout(() => {
      setAge(30)
      document.title = '30'
    }, 1000)
  }, [])

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      name: 'teal'
    }
  }
}
