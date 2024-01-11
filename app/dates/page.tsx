import SinglePage from '@/components/SinglePage';
import { getDatesPage } from '@/queries/Dates';
import dayjs from 'dayjs';

export default async function dates() {
  const { page, dates } = await getDatesPage();

  const { title, coverImage } = page;

  return (
    <SinglePage title={title} coverImage={coverImage}>
      <div className='px-4 pb-20 md:px-8'>
        {dates.map(({ date, title }, idx) => (
          <div key={idx}>
            <span className='font-semibold'>
              {dayjs(date).format('DD · MM · YYYY')}
            </span>{' '}
            <br />
            <span>{title}</span>
          </div>
        ))}
      </div>
    </SinglePage>
  );
}
