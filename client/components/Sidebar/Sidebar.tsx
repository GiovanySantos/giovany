import React, { useContext, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { BsWhatsapp, BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { BiMoon, BiSun } from 'react-icons/bi';
import { LanguageContext } from '../../contexts/LanguageContext';
import { EnumLanguageAvaliable } from '../types/enums';

const Sidebar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const { language, setLanguage } = useContext(LanguageContext);

  function isDark() {
    return theme === 'dark';
  }

  const iconClass =
    'text-5xl cursor-pointer text-p_text dark:text-s_text hover:bg-p_buttons hover:text-primary dark:hover:bg-primary dark:hover:text-secondary rounded-lg p-2';

  const handleOpenWhatsapp = () => {
    window.open('https://wa.me/5192101771', '_blank');
  };
  const handleOpenGit = () => {
    window.open('https://github.com/GiovanySantos?tab=repositories', '_blank');
  };
  const handleOpenLinkedin = () => {
    window.open('https://www.linkedin.com/in/giovanysantos/', '_blank');
  };
  const handleOpenEmail = () => {
    window.open('mailto:giovany.santos@icloud.com');
  };

  useEffect(() => {
    try {
      fetch('https://ipapi.co/json/')
        .then((res) => res.json())
        .then((data) => {
          if (data.country === 'BR') {
            setLanguage?.(EnumLanguageAvaliable.pt);
          } else {
            setLanguage?.(EnumLanguageAvaliable.en);
          }
        });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="grid justify-center m-3 transition duration-300 delay-150 bg-transparent">
      <ul className="mb-10 space-y-5 list-none sm:mb-48">
        <li className="mt-4">
          <span
            data-testid="theme-toggler"
            className="focus:outline-none"
            onClick={() => setTheme(isDark() ? 'light' : 'dark')}
            aria-label="Theme toggle"
          >
            {isDark() ? (
              <BiSun className={iconClass} />
            ) : (
              <BiMoon className={iconClass} />
            )}
          </span>
        </li>
        <li>
          <span
            aria-label="Language toggle"
            data-testid="language-toggler"
            className="focus:outline-none"
            onClick={() =>
              setLanguage?.(
                language === EnumLanguageAvaliable.pt
                  ? EnumLanguageAvaliable.en
                  : EnumLanguageAvaliable.pt
              )
            }
          >
            {language === EnumLanguageAvaliable.pt ? (
              <p
                data-testid="br-icon"
                className="p-2 text-center rounded-lg cursor-pointer text-p_text dark:text-s_text hover:bg-p_buttons hover:text-primary dark:hover:bg-primary dark:hover:text-secondary"
              >
                PT
              </p>
            ) : (
              <p
                data-testid="usa-icon"
                className="p-2 text-center rounded-lg cursor-pointer text-p_text dark:text-s_text hover:bg-p_buttons hover:text-primary dark:hover:bg-primary dark:hover:text-secondary"
              >
                EN
              </p>
            )}
          </span>
        </li>
      </ul>
      <ul className="mb-16 space-y-5 list-none">
        <li>
          <BsWhatsapp
            aria-label="Whatsapp button"
            className={iconClass}
            data-testid="whatsapp-icon"
            onClick={handleOpenWhatsapp}
          />
        </li>
        <li>
          <BsGithub
            aria-label="git button"
            className={iconClass}
            data-testid="github-icon"
            onClick={handleOpenGit}
          />
        </li>
        <li>
          <BsLinkedin
            aria-label="linkedin button"
            className={iconClass}
            data-testid="linkedin-icon"
            onClick={handleOpenLinkedin}
          />
        </li>
        <li>
          <MdEmail
            aria-label="email button"
            className={iconClass}
            data-testid="email-icon"
            onClick={handleOpenEmail}
          />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
