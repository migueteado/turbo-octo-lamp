import type { NextPageContext } from "next"
import Head from "next/head"
import React from "react"
import Commit from "../components/Commit"
import Header from "../components/Header"
import { getCommits, ListCommitsResponseType } from "../lib/commits"
import styles from "../styles/Home.module.css"

const Home: React.FC<{ commits: ListCommitsResponseType }> = ({ commits }) => {
  const { data } = commits

  let content
  if (data) {
    content = (
      <>
        <h1 className={styles.Title}>Latest Commits</h1>
        <div>
          {data.map((commit, index) => (
            <Commit key={index} commit={commit} />
          ))}
        </div>
      </>
    )
  } else {
    content = (
      <>
        <h1 className={styles.ErrorTitle}>Oops, there is something wrong.</h1>
        <p className={styles.ErrorMessage}>
          Unable to fetch content, please try again.
        </p>
      </>
    )
  }

  return (
    <div>
      <Head>
        <title>Turbo Octo Lamp</title>
        <meta name="description" content="Home Task for Fulltime Force" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={styles.MainContent}>{content}</main>
    </div>
  )
}

export async function getServerSideProps() {
  const commits = await getCommits()

  return {
    props: {
      commits,
    },
  }
}

export default Home
