import React, { useContext } from 'react';
import Content from './utils/Content';
import { LanguageContext } from '../contexts/LanguageContext';
import { homePageContentKeys } from './utils/ck';

const Header: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const ckList = homePageContentKeys;

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold text-p_text dark:text-s_text sm:text-6xl">
        <Content ckList={ckList} ck="home-title" language={language} />
      </h1>
      <h2 className="font-thin text-p_text dark:text-s_text text-1xl sm:text-2xl">
        <Content ckList={ckList} ck="home-web" language={language} />
      </h2>
    </div>
  );
};

export default Header;
