import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import Image from 'next/image';
import { formatDate } from '@/libs/utils';
import { Host } from '@/libs/microcms';
import styles from './index.module.css';

dayjs.locale('ja');
dayjs.extend(utc);
dayjs.extend(timezone);

type Props = {
  date: string;
  hosts?: Host[];
};

const getDate = (date) => {
  return date ? 'grid-cols-1' : 'grid-cols-3';
};

export default function PublishedDate({ date }: Props) {
  return (
    <div className={`${styles.thumbnail} getDate(date)`}>
      <Image src="/clock.svg" alt="" width={16} height={16} priority />
      {dayjs(date).tz('Asia/Tokyo').format('YYYY.MM.DD（dd）')}
    </div>
  );
}
