import React, { useContext, useState } from 'react';
import ButtonBlog from './ButtonBlog';
import { HomePageInternationalizationContext } from '../contexts/Internationalization/HomePageContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { EnumLanguageAvaliable } from '../types/enums';
import ModalIWantWebsite from './ModalIWantWebsite';
import CarreerIconsBox from './CarreerIconsBox';

const ButtonsBox: React.FC = () => {
  const {
    pageContent: {
      homePage: { buttons },
    },
  } = useContext(HomePageInternationalizationContext);
  const { language } = useContext(LanguageContext);
  const [showModal, setShowModal] = useState(false);
  const [showCareer, setShowCarreer] = useState(false);

  const handleClickButton = (key: number) => {
    if (key === 0) {
      setShowModal(true);
      return;
    }
    setShowCarreer(!showCareer);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSendMessage = (name: string, email: string, message: string) => {
    const lineBreak = '%0A';
    const phoneNumber = '4888131725';
    const wppUrlApi = 'https://wa.me/';
    const nameEncoded = encodeURIComponent(name);
    const emailEncoded = encodeURIComponent(email);
    const messageEncoded = encodeURIComponent(message);

    const url = `${wppUrlApi}${phoneNumber}?text=Name${lineBreak}${nameEncoded}${lineBreak}${lineBreak}Email${lineBreak}${emailEncoded}${lineBreak}${lineBreak}Description${lineBreak}${messageEncoded}`;

    window.open(url, '_blank');
    handleCloseModal();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div
        className={`transition-opacity duration-500 ${
          showModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ModalIWantWebsite
          handleCloseModal={handleCloseModal}
          handleSendMessage={handleSendMessage}
        />
      </div>
      <div className="flex flex-col gap-2 md:flex-row">
        {buttons.map((item, key) => (
          <ButtonBlog key={key} onClick={() => handleClickButton(key)}>
            {language === EnumLanguageAvaliable.pt ? item.ptBR : item.en}
          </ButtonBlog>
        ))}
      </div>
      <div
        className={`transition-opacity duration-500 flex justify-center items-center w-full ${
          showCareer ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <CarreerIconsBox />
      </div>
    </div>
  );
};

export default ButtonsBox;
