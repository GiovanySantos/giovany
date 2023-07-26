import { useEffect, useMemo, useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Blog from '../components/Blog';
import Sidebar from '../components/Sidebar';
import { INITIAL_VALUE, LanguageContext } from '../contexts/LanguageContext';
import { EnumLanguageAvaliable } from '../types/enums';
import Meta from '../components/Meta';
import {
  HomePageInternationalization,
  InternationalizationApiResponseType,
} from '../types/types';
import { HomePageInternationalizationContext } from '../contexts/Internationalization/HomePageContext';

interface ISSRProps {
  data: InternationalizationApiResponseType;
}

export const getServerSideProps: GetServerSideProps<ISSRProps> = async () => {
  const res = await fetch('http://localhost:8080/');
  const data: InternationalizationApiResponseType = await res.json();
  return { props: { data } };
};

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [language, setLanguage] =
    useState<EnumLanguageAvaliable>(INITIAL_VALUE);
  const [mounted, setMounted] = useState(false);
  const [homePageKeys] = useState<HomePageInternationalization>(data.homePage);

  const lang = useMemo(() => ({ language, setLanguage }), [language]);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <LanguageContext.Provider value={lang}>
      <HomePageInternationalizationContext.Provider value={{ homePageKeys }}>
        <Meta />
        <main className="flex justify-between h-screen mx-auto overflow-hidden bg-white shadow-md md:w-screen bg-gradient-to-r from-primary to-p_gradient dark:bg-gradient-to-r dark:from-secondary dark:to-s_gradient bg-animation">
          <div className="grow">
            <Blog />
          </div>
          <div className="flex-none">
            <Sidebar />
          </div>
        </main>
      </HomePageInternationalizationContext.Provider>
    </LanguageContext.Provider>
  );
}
