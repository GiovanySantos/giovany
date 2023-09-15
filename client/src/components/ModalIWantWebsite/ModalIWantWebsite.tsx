import React, { useContext, useState } from 'react';
import { HomePageInternationalizationContext } from '../../contexts/Internationalization/HomePageContext';
import { LanguageContext } from '../../contexts/LanguageContext';
import EnumLanguageAvaliable from '../../types/enums';
import CloseButton from './CloseButton';
import { MessageType } from './types';
import { handleCleanInputData } from './actions';
import Input from './Input';
import SendButton from './SendButton';

interface IProps {
  handleCloseModal: () => void;
  handleSendMessage: (name: string, email: string, description: string) => void;
}

const ModalIWantWebsite: React.FC<IProps> = ({
  handleCloseModal,
  handleSendMessage,
}: IProps) => {
  const {
    pageContent: { modalContacts },
  } = useContext(HomePageInternationalizationContext);

  const { language } = useContext(LanguageContext);

  const [messageForm, setMessageForm] = useState<MessageType>({
    name: '',
    email: '',
    description: '',
  });

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 z-10 transition duration-150 ease-in-out backdrop-blur-sm">
      <div className="flex items-center justify-center w-full h-full">
        <div className="bg-primary dark:bg-secondary border-[1px] border-zinc-500 dark:border-secondary w-10/12 xl:w-1/3 pb-10 rounded-md flex flex-col justify-between p-7">
          <div className="flex justify-between mb-10">
            <h3 className="text-lg font-bold text-secondary dark:text-primary">
              {language === EnumLanguageAvaliable.pt
                ? modalContacts?.title.ptBR
                : modalContacts?.title.en}
            </h3>
            <CloseButton
              handleCloseModal={handleCloseModal}
              handleCleanInputData={() => handleCleanInputData(setMessageForm)}
            />
          </div>
          <div className="flex flex-col w-full gap-10">
            {modalContacts?.regularFields.map((field, index) => {
              const fieldName = Object.keys(field)[0];
              const { label, placeholder, type } = field[fieldName];

              return (
                <Input
                  key={index}
                  fieldName={fieldName}
                  language={language}
                  label={label}
                  placeholder={placeholder}
                  type={type}
                  messageForm={messageForm}
                  setMessageForm={setMessageForm}
                />
              );
            })}
          </div>
          <div className="flex items-center justify-center w">
            <SendButton
              messageForm={messageForm}
              handleSendMessage={handleSendMessage}
              setMessageForm={setMessageForm}
              language={language}
              modalContacts={modalContacts}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalIWantWebsite;
