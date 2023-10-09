import React, { Suspense } from 'react';

import Loading from './loading';

export default function MovieLayout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
