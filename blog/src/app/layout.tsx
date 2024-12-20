// src/app/layout.tsx
import './prism.css'  // Add this line
import './globals.css';
import Layout from '../components/Layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}