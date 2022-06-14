import type { NextPageContext } from "next"
import Head from "next/head"
import React from "react"
import Commit from "../components/Commit"
import Header from "../components/Header"
import { getCommits, ListCommitsResponseType } from "../lib/commits"
import styles from "../styles/Home.module.css"

const Home: React.FC<{ commits: ListCommitsResponseType }> = ({ commits }) => {
  const { data } = commits

  return (
    <div>
      <Head>
        <title>Turbo Octo Lamp</title>
        <meta name="description" content="Home Task for Fulltime Force" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.MainContent}>
        <h1 className={styles.Title}>Latest Commits</h1>
        <div>
          {data.map((commit, index) => (
            <Commit key={index} commit={commit} />
          ))}
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const commits = await getCommits()

  return {
    props: {
      commits,
    },
  }
}

export default Home
