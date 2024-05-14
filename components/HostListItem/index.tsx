import Link from 'next/link';
import { Host } from '@/libs/microcms';
import styles from './index.module.css';

type Props = {
  host: Host;
  hasLink?: boolean;
  iconOnly?: boolean;
};

export default function hostListItem({ host, hasLink = true, iconOnly = false }: Props) {
  if (hasLink) {
    return (
      <Link href={`/hosts/${host.id}`} className={styles.host}>
        <span className={styles.hosticon}>{host.icon}</span>
        {host.name}
      </Link>
    );
  } else if (iconOnly) {
    return <span className={styles.hosticonOnly}>{host.icon}</span>;
  }
  return (
    <span className={styles.host}>
      <span className={styles.hosticon}>{host.icon}</span>
      {host.name}
    </span>
  );
}
