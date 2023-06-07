import Container from '@/components/Container';
import Section from '@/components/Section';

export default function contact() {
  return (
    <Container className='m-4'>
      <Section>
        <h1 className='mb-2 font-title text-2xl font-medium uppercase md:text-3xl lg:text-5xl'>
          Contact
        </h1>
        <p>Instagram</p>
        <p>Vimeo</p>
      </Section>
    </Container>
  );
}
