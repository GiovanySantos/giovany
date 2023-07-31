import React, { useContext, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { BiMoon, BiSun } from 'react-icons/bi';
import { LanguageContext } from '../contexts/LanguageContext';
import { EnumLanguageAvaliable } from '../types/enums';
import ContactButtons from './ContactButtons';

const Sidebar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const { language, setLanguage } = useContext(LanguageContext);

  function isDark() {
    return theme === 'dark';
  }

  const getTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) =>
        data.country === 'BR'
          ? setLanguage?.(EnumLanguageAvaliable.pt)
          : setLanguage?.(EnumLanguageAvaliable.en)
      )
      .catch((error) => {
        console.log(`Error getting country: ${error}`);
      });
  }, [setLanguage]);

  useEffect(() => {
    setTheme(getTheme());
  }, [setTheme]);

  return (
    <div className="flex flex-col items-center justify-start h-full gap-10 p-2 transition duration-300 delay-150 bg-transparent">
      <div>
        <ul className="text-center">
          <li>
            <button
              data-testid="theme-toggler"
              className="p-2 text-3xl rounded-sm cursor-pointer focus:outline-none text-p_text dark:text-s_text hover:bg-p_buttons hover:text-primary dark:hover:bg-primary dark:hover:text-secondary"
              onClick={() => setTheme(isDark() ? 'light' : 'dark')}
              aria-label={theme}
            >
              {isDark() ? <BiSun /> : <BiMoon />}
            </button>
          </li>
          <li>
            <button
              aria-label="Language toggle"
              data-testid="language-toggler"
              className="p-2 text-2xl rounded-sm cursor-pointer focus:outline-none text-p_text dark:text-s_text hover:bg-p_buttons hover:text-primary dark:hover:bg-primary dark:hover:text-secondary"
              onClick={() =>
                setLanguage?.(
                  language === EnumLanguageAvaliable.pt
                    ? EnumLanguageAvaliable.en
                    : EnumLanguageAvaliable.pt
                )
              }
            >
              {language === EnumLanguageAvaliable.pt ? (
                <p data-testid="br-icon">PT</p>
              ) : (
                <p data-testid="usa-icon">EN</p>
              )}
            </button>
          </li>
        </ul>
      </div>
      <div>
        <ContactButtons />
      </div>
    </div>
  );
};

export default Sidebar;
