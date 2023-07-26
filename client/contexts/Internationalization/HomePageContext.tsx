import React, { createContext } from 'react';
import { HomePageInternationalization } from '../../types/types';

interface InternationalizationHomePageContext {
  homePageKeys: HomePageInternationalization;
  setHomePageKeys?: React.Dispatch<
    React.SetStateAction<HomePageInternationalization>
  >;
}

const INITIAL_VALUE = {} as HomePageInternationalization;

const HomePageInternationalizationContext =
  createContext<InternationalizationHomePageContext>({
    homePageKeys: INITIAL_VALUE,
    setHomePageKeys: () => {},
  });

export { INITIAL_VALUE, HomePageInternationalizationContext };
