import { formatRichText } from '@/libs/utils';
import { type Article } from '@/libs/microcms';
import PublishedDate from '../Date';
import styles from './index.module.css';
import TagList from '../TagList';
import HostList from '../HostList';

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  return (
    <main className={styles.main}>
      {/* <h1 className={styles.title}>{data.title}</h1> */}
      <PublishedDate date={data.publishedAt || data.createdAt} />
      <HostList hosts={data.hosts} />
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: `${formatRichText(data.description)}`,
        }}
      />
      <div className={styles.youtube}>
        <iframe
          width="560"
          height="315"
          src={'https://www.youtube.com/embed/' + data.youtubeID}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {/* <picture>
        <source
          type="image/webp"
          media="(max-width: 640px)"
          srcSet={`${data.thumbnail?.url}?fm=webp&w=414 1x, ${data.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
        />
        <source
          type="image/webp"
          srcSet={`${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504 1x, ${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504&dpr=2 2x`}
        />
        <img
          src={data.thumbnail?.url}
          alt=""
          className={styles.thumbnail}
          width={data.thumbnail?.width}
          height={data.thumbnail?.height}
        />
      </picture> */}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: `${formatRichText(data.content)}`,
        }}
      />
      {/* <Profile writer={data.writer} /> */}
      <TagList tags={data.tags} />
    </main>
  );
}
