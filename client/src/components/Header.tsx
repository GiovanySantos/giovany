import React, { useContext } from 'react';
import { HomePageInternationalizationContext } from '../contexts/Internationalization/HomePageContext';
import { LanguageContext } from '../contexts/LanguageContext';
import EnumLanguageAvaliable from '../types/enums';

const Header: React.FC = () => {
  const {
    pageContent: {
      homePage: { title, subTitle },
    },
  } = useContext(HomePageInternationalizationContext);

  const { language } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold text-p_text dark:text-s_text sm:text-6xl">
        {language === EnumLanguageAvaliable.pt ? title.ptBR : title.en}
      </h1>
      <h2 className="font-thin text-p_text dark:text-s_text text-1xl sm:text-2xl">
        {language === EnumLanguageAvaliable.pt ? subTitle.ptBR : subTitle.en}
      </h2>
    </div>
  );
};

export default Header;
