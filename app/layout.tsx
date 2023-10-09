import type { Metadata } from 'next';

import ThemeRegistry from '@/components/theme/theme-registry';

export const metadata: Metadata = {
  title: 'Movies',
  description: 'A movies website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
