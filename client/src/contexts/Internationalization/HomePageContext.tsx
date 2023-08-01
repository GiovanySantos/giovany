import React, { createContext } from 'react';
import { InternationalizationApiResponseType } from '../../types/types';

interface InternationalizationHomePageContext {
  pageContent: InternationalizationApiResponseType;
  setPageContent?: React.Dispatch<
    React.SetStateAction<InternationalizationApiResponseType>
  >;
}

const INITIAL_VALUE = {} as InternationalizationApiResponseType;

const HomePageInternationalizationContext =
  createContext<InternationalizationHomePageContext>({
    pageContent: INITIAL_VALUE,
    setPageContent: () => {},
  });

export { INITIAL_VALUE, HomePageInternationalizationContext };
