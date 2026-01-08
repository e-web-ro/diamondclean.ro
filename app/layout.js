import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Diamond Clean - Servicii Profesionale de Curățenie București',
  description: 'Servicii complete de curățenie în București: curățare canapele, covoare, curățenie generală, post-constructor și birouri. Echipă profesionistă și soluții eco.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
