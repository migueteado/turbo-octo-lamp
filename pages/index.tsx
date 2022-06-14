import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Header from "../components/Header"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Turbo Octo Lamp</title>
        <meta name="description" content="Home Task for Fulltime Force" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main></main>
    </div>
  )
}

export default Home
