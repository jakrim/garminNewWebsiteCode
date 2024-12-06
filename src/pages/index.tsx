import Header from '@/components/Header/Header';
import NewsCard from '@/components/NewsCard/NewsCard';
import styles from './index.module.css';

const mockNews = [
  {
    title: "Garmin Announces New Forerunner Series with Advanced Training Features",
    date: "December 6, 2023",
    category: "Product News",
    link: "/news/forerunner-update"
  },
  {
    title: "Q3 2023 Financial Results Show Strong Growth in Fitness Segment",
    date: "December 5, 2023",
    category: "Company News",
    link: "/news/q3-results"
  },
  {
    title: "Garmin Launches New Marine Electronics Line",
    date: "December 4, 2023",
    category: "Marine",
    link: "/news/marine-launch"
  }
];

const quickLinks = [
  { title: "Press Releases", link: "/press" },
  { title: "Media Resources", link: "/media" },
  { title: "Company Info", link: "/about" },
  { title: "Contact PR Team", link: "/contact" }
];

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <section className={styles.newsSection}>
              <h1 className={styles.pageTitle}>Latest News</h1>
              <div className={styles.newsGrid}>
                {mockNews.map((news, index) => (
                  <NewsCard key={index} {...news} />
                ))}
              </div>
            </section>

            <aside className={styles.sidebar}>
              <div className={styles.quickLinks}>
                <h2 className={styles.sidebarTitle}>Quick Links</h2>
                <ul>
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
