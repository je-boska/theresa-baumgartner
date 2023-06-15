import Container from '@/components/Container';
import Section from '@/components/Section';

export default async function page() {
  return (
    <Container className='m-4'>
      <Section>
        <h1 className='font-title mb-2 text-2xl uppercase md:text-3xl lg:text-4xl'>
          Theresa Baumgartner
        </h1>
        <p>Berlin based visual artist</p>
      </Section>
    </Container>
  );
}
