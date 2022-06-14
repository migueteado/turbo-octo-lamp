import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Head from "next/head"
import React, { useState } from "react"
import Commit from "../components/Commit"
import Header from "../components/Header"
import { getCommits, ListCommitsResponseType } from "../lib/commits"
import styles from "../styles/Home.module.css"

const initialPage = 1

const Home: React.FC<{ commits: ListCommitsResponseType }> = ({ commits }) => {
  const [page, setPage] = useState(initialPage)
  const [projectCommits, setProjectCommits] = useState(commits.data)
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadMore = async () => {
    setIsLoading(true)
    const newPage = page + 1
    const moreCommits = (await getCommits(newPage)) as ListCommitsResponseType
    if (moreCommits.data) {
      setProjectCommits((projectCommits) => [
        ...projectCommits,
        ...moreCommits.data,
      ])
      setPage(newPage)
    }
    setIsLoading(false)
  }

  let content
  if (projectCommits) {
    content = (
      <>
        <h1 className={styles.Title}>Latest Commits</h1>
        <div>
          {projectCommits.map((commit, index) => (
            <Commit key={index} commit={commit} />
          ))}
        </div>
        <div className={styles.ButtonContainer}>
          <button
            onClick={handleLoadMore}
            className={styles.Button}
            disabled={isLoading}
          >
            {isLoading ? (
              <FontAwesomeIcon
                icon={faSpinner}
                pulse
                className={styles.Spinner}
              />
            ) : (
              "Load Older Commits"
            )}
          </button>
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
  const commits = await getCommits(initialPage)

  return {
    props: {
      commits,
    },
  }
}

export default Home
