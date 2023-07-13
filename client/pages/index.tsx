import { useEffect, useMemo, useState } from 'react';
import Blog from '../components/Blog';
import Sidebar from '../components/Sidebar/Sidebar';
import { INITIAL_VALUE, LanguageContext } from '../contexts/LanguageContext';
import { EnumLanguageAvaliable } from '../components/types/enums';
import Meta from '../components/Meta';

export default function Home() {
  const [language, setLanguage] =
    useState<EnumLanguageAvaliable>(INITIAL_VALUE);
  const [mounted, setMounted] = useState(false);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={value}>
      <Meta />
      <main className="flex flex-col bg-gradient-to-r from-primary to-p_gradient dark:bg-gradient-to-r dark:from-secondary dark:to-s_gradient bg-animation">
        <nav className="">
          <Sidebar />
        </nav>
        <section className="">
          <Blog />
        </section>
      </main>
    </LanguageContext.Provider>
  );
}
