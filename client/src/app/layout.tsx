import { Metadata } from 'next';
import './globals.css';

const commons = {
  title: 'Giovany Santos',
  description: 'Encontre aqui meu portifólio, carreira e meus contatos',
  img: '/img/profile.jpg',
};

export const metadata: Metadata = {
  title: commons.title,
  description: commons.description,
  metadataBase: new URL('https://giovany.com.br'),
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
  },
  keywords: [
    'Desenvolvimento de software',
    'Agência digital',
    'software house',
    'Programação',
    'Soluções',
    'Desenvolvimento de sistemas',
    'Front-end',
    'Back-end',
    'Design responsivo',
    'UX/UI',
    'Desenvolvimento de sites',
    'Desenvolvimento de aplicativos mobile',
    'Desenvolvimento de sistemas',
    'Desenvolvimento web',
  ],
  authors: [
    { name: 'Giovany Santos' },
    { name: 'Giovany Santos', url: 'https://giovany.com.br' },
  ],
  creator: 'Giovany Santos',
  publisher: 'Giovany Santos',
  openGraph: {
    title: commons.title,
    description: commons.description,
    url: 'https://giovany.com.br',
    siteName: 'Giovany',
    images: [
      {
        url: commons.img,
        width: 667,
        height: 1003,
      },
    ],
    locale: 'pt-br',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  twitter: {
    title: commons.title,
    description: commons.description,
    card: 'summary',
    site: '@torradinha0',
    creator: '@torradinha0',
    images: [
      {
        url: commons.img,
        width: 667,
        height: 1003,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
