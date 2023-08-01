import React, { useContext, useState } from 'react';
import { AiFillCloseSquare } from 'react-icons/ai';
import { BiSolidSend } from 'react-icons/bi';
import { HomePageInternationalizationContext } from '../contexts/Internationalization/HomePageContext';
import { LanguageContext } from '../contexts/LanguageContext';
import EnumLanguageAvaliable from '../types/enums';

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

  const [{ name, email, description }, setInputData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const getInputValue = (fieldName: string) => {
    if (fieldName === 'name') return name;
    if (fieldName === 'email') return email;
    if (fieldName === 'description') return description;
    return '';
  };
  const handleChangeInput = (
    fieldName: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputData((data) => ({
      ...data,
      [fieldName]: e.target.value,
    }));
  };

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 z-10 transition duration-150 ease-in-out backdrop-blur-sm">
      <div className="flex items-center justify-center w-full h-full">
        <div className="bg-primary dark:bg-secondary border-[1px] border-zinc-500 dark:border-secondary w-10/12 xl:w-1/3 pb-10 rounded-md flex flex-col justify-between">
          <div className="flex justify-between p-3 ">
            <div className="flex justify-center w-full">
              <h3 className="p-5 text-lg font-bold text-secondary dark:text-primary">
                {language === EnumLanguageAvaliable.pt
                  ? modalContacts?.title.ptBR
                  : modalContacts?.title.en}
              </h3>
            </div>
            <div>
              <button
                className="text-2xl cursor-pointer text-p_buttons dark:text-s_buttons"
                aria-label="X"
                onClick={() => {
                  handleCloseModal();
                  setInputData({
                    name: '',
                    email: '',
                    description: '',
                  });
                }}
              >
                <AiFillCloseSquare />
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full gap-4">
            {modalContacts?.regularFields.map((field, index) => {
              const fieldName = Object.keys(field)[0];
              const { label, placeholder, type } = field[fieldName];
              return (
                <div
                  key={index}
                  className="flex flex-col items-start justify-start px-10"
                >
                  <label
                    htmlFor={fieldName}
                    className="text-p_text dark:text-s_text"
                  >
                    {language === EnumLanguageAvaliable.pt
                      ? label.ptBR
                      : label.en}
                    {fieldName === 'description' && (
                      <span> {description.length}/2000</span>
                    )}
                  </label>
                  {fieldName !== 'description' ? (
                    <input
                      id={fieldName}
                      placeholder={
                        language === EnumLanguageAvaliable.pt
                          ? placeholder.ptBR
                          : placeholder.en
                      }
                      className="w-full p-1 rounded-md bg-slate-300 dark:text-secondary"
                      type={type}
                      value={getInputValue(fieldName)}
                      onChange={(e) => handleChangeInput(fieldName, e)}
                    />
                  ) : (
                    <div className="w-full">
                      <textarea
                        id={fieldName}
                        placeholder={
                          language === EnumLanguageAvaliable.pt
                            ? placeholder.ptBR
                            : placeholder.en
                        }
                        className="w-full p-1 rounded-md resize-none bg-slate-300 dark:text-secondary"
                        rows={4}
                        maxLength={2000}
                        value={getInputValue(fieldName)}
                        onChange={(e) => handleChangeInput(fieldName, e)}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center w">
            <button
              disabled={!(name && email && description)}
              className="flex items-center justify-center gap-2 px-4 py-2 mt-5 rounded-md bg-p_buttons text-p_buttons_text md:hover:bg-p_buttons_hover md:hover:text-p_buttons_hover_text dark:bg-s_buttons dark:text-s_buttons_text dark:md:hover:bg-s_buttons_hover dark:md:hover:text-s_buttons_hover_text disabled:bg-slate-300 hover:disabled:bg-slate-300 disabled:text-slate-400 hover:disabled:text-slate-400 disabled:cursor-not-allowed"
              onClick={() => {
                handleSendMessage(name, email, description);
                setInputData({
                  name: '',
                  email: '',
                  description: '',
                });
              }}
            >
              <span>
                <BiSolidSend />
              </span>
              {language === EnumLanguageAvaliable.pt
                ? modalContacts?.buttonSend.ptBR
                : modalContacts?.buttonSend.en}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalIWantWebsite;
