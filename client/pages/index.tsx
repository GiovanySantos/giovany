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
  const lang = useMemo(() => ({ language, setLanguage }), [language]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <LanguageContext.Provider value={lang}>
      <Meta />
      <main className="flex justify-between h-screen max-w-screen bg-gradient-to-r from-primary to-p_gradient dark:bg-gradient-to-r dark:from-secondary dark:to-s_gradient bg-animation">
        <div className="grow">
          <Blog />
        </div>
        <div className="flex-none">
          <Sidebar />
        </div>
      </main>
    </LanguageContext.Provider>
  );
}
