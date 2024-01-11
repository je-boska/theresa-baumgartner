import SinglePage from '@/components/SinglePage';
import { getDatesPage } from '@/queries/Dates';
import dayjs from 'dayjs';

export default async function dates() {
  const { page, dates } = await getDatesPage();

  const { title, coverImage, description } = page;

  return (
    <SinglePage title={title} coverImage={coverImage}>
      <div className='px-8'>
        {dates.map(({ date, title }, idx) => (
          <div key={idx}>
            <span className='font-semibold'>
              {dayjs(date).format('DD MM YYYY')}
            </span>{' '}
            {title}
          </div>
        ))}
      </div>
    </SinglePage>
  );
}
