import React from 'react';

export default function Nav() {
  return (
    <ul className='flex gap-4'>
      <li>
        <a href='/'>Home</a>
      </li>
      <li>
        <a href='/other-place'>Other place</a>
      </li>
    </ul>
  );
}
