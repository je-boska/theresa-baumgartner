import React, { ReactNode } from 'react';

export default function Section({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <section className={'' + className}>{children}</section>;
}
