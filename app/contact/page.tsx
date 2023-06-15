import Container from '@/components/Container';
import Section from '@/components/Section';

export default function contact() {
  return (
    <Container className='m-4'>
      <Section>
        <h1 className='font-title mb-2 text-2xl uppercase md:text-3xl lg:text-4xl'>
          Contact
        </h1>
        <p>Instagram</p>
        <p>Vimeo</p>
      </Section>
    </Container>
  );
}
