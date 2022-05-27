import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a href="https://twitter.com/SobekBattle"><img src="/twitter.svg" alt="Twitter" className={styles.logo} /></a>
        <a href="https://discord.gg/v4PwaamGd3"><img src="/discord.svg" alt="Discord" className={styles.logo} /></a>
      </footer>
    </>
  )
}
