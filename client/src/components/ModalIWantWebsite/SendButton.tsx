import React from 'react';
import { BiSolidSend } from 'react-icons/bi';
import { MessageType } from './types';
import { handleCleanInputData } from './actions';
import EnumLanguageAvaliable from '../../types/enums';
import { ModalInternationalization } from '../../types/types';

interface IProps {
  messageForm: MessageType;
  handleSendMessage: (name: string, email: string, description: string) => void;
  setMessageForm: React.Dispatch<React.SetStateAction<MessageType>>;
  language: EnumLanguageAvaliable;
  modalContacts: ModalInternationalization | undefined;
}

const SendButton = ({
  messageForm,
  handleSendMessage,
  setMessageForm,
  language,
  modalContacts,
}: IProps) => (
  <button
    disabled={
      !(messageForm.name && messageForm.email && messageForm.description)
    }
    className="flex items-center justify-center gap-2 px-4 py-2 mt-5 rounded-md bg-p_buttons text-p_buttons_text md:hover:bg-p_buttons_hover md:hover:text-p_buttons_hover_text dark:bg-s_buttons dark:text-s_buttons_text dark:md:hover:bg-s_buttons_hover dark:md:hover:text-s_buttons_hover_text disabled:bg-slate-300 hover:disabled:bg-slate-300 disabled:text-slate-400 hover:disabled:text-slate-400 disabled:cursor-not-allowed"
    onClick={() => {
      handleSendMessage(
        messageForm.name,
        messageForm.email,
        messageForm.description
      );
      handleCleanInputData(setMessageForm);
    }}
  >
    <span>
      <BiSolidSend />
    </span>
    {language === EnumLanguageAvaliable.pt
      ? modalContacts?.buttonSend.ptBR
      : modalContacts?.buttonSend.en}
  </button>
);

export default SendButton;
