import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import ThemeSwitcher from './components/utils/ThemeSwitcher';
import ScrollProgress from './components/utils/ScrollProgress';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Brandon Faulkner | Portfolio',
  description: 'Professional portfolio showcasing software development projects and skills',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            className: 'react-hot-toast'
          }}
        />
        <ScrollProgress />
        {children}
        <ThemeSwitcher />
      </body>
    </html>
  );
}
