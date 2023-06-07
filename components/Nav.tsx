import React from 'react';

export default function Nav() {
  return (
    <ul className='border-b-2 border-dotted border-black p-4 text-right'>
      <li className='text-lg font-medium uppercase'>
        <a href='/'>Theresa Baumgartner</a>
      </li>
      <li>
        <a href='/contact'>Contact</a>
      </li>
    </ul>
  );
}
