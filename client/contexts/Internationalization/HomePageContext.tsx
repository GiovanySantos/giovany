import { createContext } from 'react';
import { HomePageInternationalization } from '../../types/types';

interface InternationalizationHomePageContext {
  homePageKeys: HomePageInternationalization;
  setHomePageKeys?: React.Dispatch<React.SetStateAction<HomePageInternationalization>>;
}

const INITIAL_VALUE = {} as HomePageInternationalization;

const HomePageInternationalizationContext = createContext<InternationalizationHomePageContext>({
  homePageKeys: INITIAL_VALUE,
  setHomePageKeys: () => {
    return;
  },
});

export { INITIAL_VALUE, HomePageInternationalizationContext };
