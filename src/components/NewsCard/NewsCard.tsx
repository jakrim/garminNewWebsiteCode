import Link from 'next/link';
import styles from './NewsCard.module.css';

interface NewsCardProps {
  title: string;
  date: string;
  category: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, date, category, link }) => {
  return (
    <div className={styles.newsCard}>
      <div className={styles.metadata}>
        <span className={styles.date}>{date}</span>
        <span className={styles.category}>{category}</span>
      </div>
      <Link href={link} className={styles.title}>
        {title}
      </Link>
    </div>
  );
};

export default NewsCard;
