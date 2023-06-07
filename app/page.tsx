import Container from '@/components/Container';
import Section from '@/components/Section';

export default async function page() {
  return (
    <Container className='m-4'>
      <Section>
        <h1 className='mb-2 text-2xl font-medium uppercase'>
          Theresa Baumgartner
        </h1>
        <p>Berlin based visual artist</p>
      </Section>
    </Container>
  );
}
