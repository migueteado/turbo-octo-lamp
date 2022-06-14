import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { ListCommitsResponseType } from "../lib/commits"
import styles from "./Commit.module.css"

interface CommitProps {
  commit: ListCommitsResponseType["data"][0]
}

const Commit = ({ commit }: CommitProps) => {
  return (
    <div className={styles.Commit}>
      <div className={styles.GithubLink}>
        <a href={commit.html_url} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faUpRightFromSquare} className={styles.Icon} />
        </a>
      </div>
      <a href={commit.author?.html_url} target="_blank" rel="noreferrer">
        <div className={styles.Author}>
          <div className={styles.AuthorImageContainer}>
            <Image
              layout="responsive"
              alt="profile image"
              src={`${commit.author?.avatar_url}`}
              width={100}
              height={100}
            />
          </div>
          <div className={styles.AuthorName}>{commit.author?.login}</div>
        </div>
      </a>
      <div className={styles.CommitInfo}>
        <div className={styles.Message}>{commit.commit.message}</div>
      </div>
    </div>
  )
}

export default Commit
