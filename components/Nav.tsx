export default function Nav() {
  return (
    <ul className='border-b-2 border-black p-4 text-lg md:text-xl'>
      <li className='mr-10 uppercase lg:mr-20'>
        <a href='/'>Theresa Baumgartner</a>
      </li>
      <li className='uppercase'>
        <a href='/contact'>Contact</a>
      </li>
      <li className='uppercase'>
        <a href='/dates'>Dates</a>
      </li>
    </ul>
  );
}
