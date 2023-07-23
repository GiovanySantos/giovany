import { createContext } from 'react';
import { EnumLanguageAvaliable } from '../types/enums';

interface ILanguageContext {
  language: EnumLanguageAvaliable;
  setLanguage?: React.Dispatch<React.SetStateAction<EnumLanguageAvaliable>>;
}

const INITIAL_VALUE = EnumLanguageAvaliable.pt;

const LanguageContext = createContext<ILanguageContext>({
  language: INITIAL_VALUE,
  setLanguage: () => {
    return;
  },
});

export { INITIAL_VALUE, LanguageContext };
