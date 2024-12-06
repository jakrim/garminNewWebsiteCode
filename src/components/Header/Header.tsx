import Link from 'next/link'
import styles from './Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <nav className={styles.secondaryNav}>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/careers">Careers</Link>
          </nav>
        </div>
      </div>

      <div className={styles.mainHeader}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            Garmin News
          </Link>

          <nav className={styles.mainNav}>
            <Link href="/products">Products</Link>
            <Link href="/company">Company</Link>
            <Link href="/newsroom">Newsroom</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
