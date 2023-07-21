import React, { useContext } from 'react';
import Content from './utils/Content';
import { LanguageContext } from '../contexts/LanguageContext';
import { homePageContentKeys } from './utils/ck';
import JS from '../assets/JS.svg';
import TS from '../assets/TS.svg';
import ReactIcon from '../assets/React.svg';
import Node from '../assets/Node.svg';

const Title: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const ckList = homePageContentKeys;
  const iconsList = [JS, TS, ReactIcon, Node];

  return (
    <div className="flex flex-col p-5 text-center gap-7">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-p_text dark:text-s_text sm:text-6xl">
          <Content ckList={ckList} ck="home-title" language={language} />
        </h1>
        <h2 className="font-thin text-p_text dark:text-s_text text-1xl sm:text-2xl">
          <Content ckList={ckList} ck="home-web" language={language} />
        </h2>
      </div>
      <div className="flex w-48">
        {iconsList.map((Icon) => (
          <Icon />
        ))}
      </div>
    </div>
  );
};

export default Title;
