import React from 'react';

export default function Nav() {
  return (
    <ul className='m-4 flex justify-end gap-4'>
      <li>
        <a href='/'>Home</a>
      </li>
      <li>
        <a href='/contact'>Contact</a>
      </li>
    </ul>
  );
}
