import { useEffect, useMemo, useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Blog from '../components/Blog';
import Sidebar from '../components/Sidebar';
import { INITIAL_VALUE, LanguageContext } from '../contexts/LanguageContext';
import { EnumLanguageAvaliable } from '../types/enums';
import { InternationalizationApiResponseType } from '../types/types';
import { HomePageInternationalizationContext } from '../contexts/Internationalization/HomePageContext';
import getPageTextContent from '../utils';

interface ISSRProps {
  data: InternationalizationApiResponseType;
}

export const getServerSideProps: GetServerSideProps<ISSRProps> = async () => {
  const data: InternationalizationApiResponseType = await getPageTextContent();
  return { props: { data } };
};

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [language, setLanguage] =
    useState<EnumLanguageAvaliable>(INITIAL_VALUE);
  const [mounted, setMounted] = useState(false);
  const [pageContent] = useState<InternationalizationApiResponseType>(data);

  const lang = useMemo(() => ({ language, setLanguage }), [language]);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <LanguageContext.Provider value={lang}>
      <HomePageInternationalizationContext.Provider value={{ pageContent }}>
        <div className="flex justify-between h-screen mx-auto overflow-hidden md:w-screen bg-gradient-to-r from-primary to-p_gradient dark:bg-gradient-to-r dark:from-secondary dark:to-s_gradient bg-animation">
          <main className="flex items-center justify-center w-full">
            <Blog />
          </main>
          <aside>
            <Sidebar />
          </aside>
        </div>
      </HomePageInternationalizationContext.Provider>
    </LanguageContext.Provider>
  );
}
