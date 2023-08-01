import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Giovany Santos',
  description: 'Bem vindo ao portfolio de Giovany Santos',
  metadataBase: new URL('https://giovany.com.br'),
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
    title: 'Giovany Santos',
    description: 'Bem vindo ao portfolio de Giovany Santos',
    url: 'https://giovany.com.br',
    siteName: 'Giovany',
    images: [
      {
        url: '/img/profile.png',
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
    card: 'summary',
    title: 'Giovany Santos',
    description: 'Bem vindo ao portfolio de Giovany Santos',
    site: '@torradinha0',
    creator: '@torradinha0',
    images: ['https://giovany.com.br/img/profile.png'],
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

// const Meta: React.FC = () => (
//   <Head>
//     <title>Giovany 1</title>
//     {/* <meta name="language" content={language} /> */}
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <meta name="author" content="Giovany Santos" />
//     <meta name="robots" content="max-image-preview:large" />
//     <meta name="robots" content="index, follow" />
//     {/* <meta name="title" content="Giovany Santos" /> */}
//     {/* <meta
//         name="description"
//         content="Bem vindo ao portfolio de Giovany Santos"
//       /> */}
//     {/* <meta
//         name="keywords"
//         content="frontend, react, node, javascript, giovany, santos, graphql, programação, programador, desenvolvedor"
//       /> */}

//     <meta property="twitter:title" content="Giovany Santos" />
//     <meta
//       property="twitter:description"
//       content="Desenvolvedor fullstack Giovany Santos"
//     />
//     <meta property="twitter:card" content="summary_large_image" />
//     <meta
//       property="twitter:image"
//       content="https://unsplash.com/photos/UYsBCu9RP3Y"
//     />

//     {/* <meta property="og:title" content="Giovany Santos" />
//       <meta
//         property="og:description"
//         content="Desenvolvedor fullstack Giovany Santos"
//       /> */}
//     {/* <meta property="og:url" content="https://www.giovany.com.br" />
//       <meta
//         property="og:image"
//         content="https://unsplash.com/photos/UYsBCu9RP3Y"
//       /> */}
//     <meta property="og:type" content="article" />
//     <meta property="og:site_name" content="Giovany Santos" />
//     <link rel="icon" href="/favicon.ico" />
//   </Head>
// );

// export default Meta;
