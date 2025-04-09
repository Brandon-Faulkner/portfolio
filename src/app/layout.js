import './globals.css';
import { Inter } from 'next/font/google';
import ThemeSwitcher from './components/ThemeSwitcher';
import ScrollProgress from './components/ScrollProgress';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Brandon Faulkner | Portfolio',
  description: 'Professional portfolio showcasing software development projects and skills',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ScrollProgress />
        {children}
        <ThemeSwitcher />
      </body>
    </html>
  );
}
