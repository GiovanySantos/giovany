import React, { useContext } from 'react';
import ButtonBlog from './ButtonBlog';
import { HomePageInternationalizationContext } from '../contexts/Internationalization/HomePageContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { EnumLanguageAvaliable } from '../types/enums';

const ButtonsBox: React.FC = () => {
  const { homePageKeys } = useContext(HomePageInternationalizationContext)
  const { language } = useContext(LanguageContext)
  return (
    <div className="flex flex-col gap-4 py-10">
      {
        homePageKeys.buttons.map((item, key) => {
          return (
            <ButtonBlog key={key}>
              {language === EnumLanguageAvaliable.pt ? item.ptBR : item.en}
            </ButtonBlog>
          )
        })
      }
    </div>
  );
};

export default ButtonsBox;
