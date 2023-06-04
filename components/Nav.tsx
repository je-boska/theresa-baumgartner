import React from 'react';

export default function Nav() {
  return (
    <ul className='m-4 flex justify-between gap-4'>
      <li>
        <a href='/'>Theresa Baumgartner</a>
      </li>
      <li>
        <a href='/contact'>Contact</a>
      </li>
    </ul>
  );
}
