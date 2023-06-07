import React, { ReactNode } from 'react';

export default function Section({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={'mx-auto max-w-5xl p-4 ' + className}>
      {children}
    </section>
  );
}
