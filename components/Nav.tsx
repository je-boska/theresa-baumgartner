import React from 'react';

export default function Nav() {
  return (
    <ul className='border-b-2 border-black p-4'>
      <li className='font-title text-xl font-medium uppercase md:text-2xl'>
        <a href='/'>Theresa Baumgartner</a>
      </li>
      <li>
        <a href='/contact'>Contact</a>
      </li>
    </ul>
  );
}
