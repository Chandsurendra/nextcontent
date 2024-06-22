import { Inter } from 'next/font/google';
import Provider from './lib/provider';
import './globals.css'
import './polyfllls'
import Header from './components/header';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Best education',
  description: 'the website for bbs students',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header/>
          {children}
        </Provider>
      </body>
    </html>
  );
}
