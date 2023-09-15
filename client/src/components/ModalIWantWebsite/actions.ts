import React from 'react';
import { MessageType } from './types';

const getInputValue = (
  fieldName: string,
  { name, email, description }: MessageType
) => {
  if (fieldName === 'name') return name;
  if (fieldName === 'email') return email;
  if (fieldName === 'description') return description;
  return '';
};

const handleChangeInput = (
  fieldName: string,
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setMessageForm: React.Dispatch<React.SetStateAction<MessageType>>
) => {
  setMessageForm((data: MessageType) => ({
    ...data,
    [fieldName]: e.target.value,
  }));
};

const handleCleanInputData = (
  setMessageForm: React.Dispatch<React.SetStateAction<MessageType>>
) => {
  setMessageForm({
    name: '',
    email: '',
    description: '',
  });
};

export { getInputValue, handleChangeInput, handleCleanInputData };
