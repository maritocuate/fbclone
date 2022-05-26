import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Login from '../components/Login'
import Header from '../components/Header'

export default function Home ({ session }) {

  if(!session) return <Login />

  return (
    <div>
      <Head>
        <title>FB Clone</title>
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widget */}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  // Get user
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}