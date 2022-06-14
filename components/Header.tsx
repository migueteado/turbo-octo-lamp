import Brand from "./Brand"
import styles from "./Header.module.css"

const Header = (): JSX.Element => {
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderContent}>
        <Brand />
      </div>
    </div>
  )
}

export default Header
