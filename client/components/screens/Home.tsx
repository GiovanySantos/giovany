import React, { useContext } from 'react';
import Content from '../utils/Content';
import ButtonNavigation from '../utils/ButtonNavigation';
import {
  HiOutlineFolderOpen,
  HiOutlineInformationCircle,
} from 'react-icons/hi';
import { homePageContentKeys } from '../utils/ck';
import { EnumPage } from '../Blog';
import { LanguageContext } from '../../contexts/LanguageContext';

type IProps = {
  setCurrentPage?: React.Dispatch<React.SetStateAction<EnumPage>>;
};

const Home: React.FC<IProps> = ({ setCurrentPage }) => {
  const { language } = useContext(LanguageContext);

  const ckList = homePageContentKeys;

  return (
    <div className="flex items-center justify-between p-10">
      <div className="grid gap-10">
        <div className="text-start">
          <div className="mb-5 text-3xl font-bold text-p_text dark:text-s_text sm:text-6xl">
            <Content ckList={ckList} ck="home-title" language={language} />
          </div>
          <ul>
            <li className="font-thin text-p_text dark:text-s_text text-1xl sm:text-2xl">
              <Content ckList={ckList} ck="home-web" language={language} />
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap items-center justify-start gap-5 text-center">
          <ButtonNavigation
            onClick={() => setCurrentPage?.(EnumPage.Portfolio)}
          >
            <div className="flex gap-3">
              <HiOutlineFolderOpen
                data-testid="portfolio-icon"
                className="text-3xl"
              />
              <Content
                ckList={ckList}
                css="text:p_text dark:text:s_text mt-1 col-span-3"
                ck="history"
                language={language}
              />
            </div>
          </ButtonNavigation>
          <ButtonNavigation onClick={() => setCurrentPage?.(EnumPage.About)}>
            <div className="flex gap-3">
              <HiOutlineInformationCircle
                data-testid="about-icon"
                className="text-3xl"
              />
              <Content
                ckList={ckList}
                css="text:p_text dark:text:s_text mt-1 col-span-3"
                ck="about"
                language={language}
              />
            </div>
          </ButtonNavigation>
        </div>
      </div>
    </div>
  );
};

export default Home;
