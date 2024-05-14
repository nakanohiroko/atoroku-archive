import { formatRichText } from '@/libs/utils';
import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/libs/microcms';
import styles from './index.module.css';
import TagList from '../TagList';
import HostList from '../HostList';
import PublishedDate from '../Date';
import Thumbnail from '../Thumbnail';

type Props = {
  article: Article;
};

export default function ArticleListItem({ article }: Props) {
  const publishedDay = 'thumbnail' + new Date(article.publishedAt).getDay();
  return (
    <li className={styles.list}>
      <Link href={`/articles/${article.id}`} className={styles.link}>
        {/*article.thumbnail ? (
          <picture>
            <source
              type="image/webp"
              media="(max-width: 640px)"
              srcSet={`${article.thumbnail?.url}?fm=webp&w=414 1x, ${article.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
            />
            <source
              type="image/webp"
              srcSet={`${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126 1x, ${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126&dpr=2 2x`}
            />
            <img
              src={article.thumbnail?.url || `/noimage.png`}
              alt=""
              className={styles.image}
              width={article.thumbnail?.width}
              height={article.thumbnail?.height}
            />
          </picture>
        ) : (
          <Image
            className={styles.image}
            src="/no-image.png"
            alt="No Image"
            width={1200}
            height={630}
          />
        )*/}
        <div className={`${styles.thumbnail} ${styles[publishedDay]}`}>
          <HostList hosts={article.hosts} hasLink={false} iconOnly={true} />
        </div>
        <dl className={styles.content}>
          {/* <dt className={styles.title}>{article.title}</dt> */}
          <dd className={styles.date}>
            <PublishedDate date={article.publishedAt || article.createdAt} />
          </dd>
          <dd>
            <HostList hosts={article.hosts} hasLink={false} />
          </dd>
          <dd
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: `${formatRichText(article.description)}`,
            }}
          />
          <dd>
            <TagList tags={article.tags} hasLink={false} />
          </dd>
        </dl>
      </Link>
    </li>
  );
}
