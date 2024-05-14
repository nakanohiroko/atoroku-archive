import { Host } from '@/libs/microcms';
import HostListItem from '../HostListItem';
import styles from './index.module.css';

type Props = {
  hosts?: Host[];
  hasLink?: boolean;
  iconOnly?: boolean;
};

export default function HostList({ hosts, hasLink = true, iconOnly = false }: Props) {
  if (!hosts) {
    return null;
  } else if (iconOnly) {
    return (
      <ul className={`${styles.hosts} ${styles.hostsIconOnly}`}>
        {hosts.map((host) => (
          <li key={host.id}>
            <HostListItem host={host} hasLink={hasLink} iconOnly={iconOnly} />
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className={styles.hosts}>
      {hosts.map((host) => (
        <li key={host.id}>
          <HostListItem host={host} hasLink={hasLink} iconOnly={iconOnly} />
        </li>
      ))}
    </ul>
  );
}
