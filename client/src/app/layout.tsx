import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Giovany Santos',
  description: 'Bem vindo ao portfolio de Giovany Santos',
  keywords: [
    'frontend',
    'react',
    'node',
    'javascript',
    'graphql',
    'programação',
    'programador',
    'desenvolvedor',
    'site',
    'fazer um site',
  ],
  openGraph: {
    title: 'Giovany',
    description: 'Portfólio Giovany Santos',
    url: 'https://www.giovany.com.br',
    siteName: 'Giovany',
    images: [
      {
        url: '/img/profile.png',
        alt: 'Giovany Santos',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
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
