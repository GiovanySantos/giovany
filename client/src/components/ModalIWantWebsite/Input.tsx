import React from 'react';
import EnumLanguageAvaliable from '../../types/enums';
import { InternationalizationValue } from '../../types/types';
import { MessageType } from './types';
import { getInputValue, handleChangeInput } from './actions';

interface IProps {
  key: number;
  fieldName: string;
  language: EnumLanguageAvaliable;
  label: InternationalizationValue;
  placeholder: InternationalizationValue;
  type: string;
  messageForm: MessageType;
  setMessageForm: React.Dispatch<React.SetStateAction<MessageType>>;
}

const Input: React.FC<IProps> = ({
  key,
  fieldName,
  language,
  label,
  placeholder,
  type,
  messageForm,
  setMessageForm,
}: IProps) => (
  <div key={key} className="flex flex-col items-start justify-start">
    <label htmlFor={fieldName} className="text-p_text dark:text-s_text">
      {language === EnumLanguageAvaliable.pt ? label.ptBR : label.en}
      {fieldName === 'description' && (
        <span> {messageForm.description.length}/2000</span>
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
        className="w-full p-3 rounded-md bg-slate-300 dark:text-secondary"
        type={type}
        value={getInputValue(fieldName, messageForm)}
        onChange={(e) => handleChangeInput(fieldName, e, setMessageForm)}
      />
    ) : (
      <textarea
        id={fieldName}
        placeholder={
          language === EnumLanguageAvaliable.pt
            ? placeholder.ptBR
            : placeholder.en
        }
        className="w-full p-3 rounded-md resize-none bg-slate-300 dark:text-secondary"
        rows={4}
        maxLength={2000}
        value={getInputValue(fieldName, messageForm)}
        onChange={(e) => handleChangeInput(fieldName, e, setMessageForm)}
      />
    )}
  </div>
);

export default Input;
