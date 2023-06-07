import Container from '@/components/Container';
import Section from '@/components/Section';

export default async function page() {
  return (
    <Container className='m-4'>
      <Section>
        <h1 className='mb-2 font-title text-2xl font-medium uppercase md:text-3xl lg:text-5xl'>
          Theresa Baumgartner
        </h1>
        <p>Berlin based visual artist</p>
      </Section>
    </Container>
  );
}
