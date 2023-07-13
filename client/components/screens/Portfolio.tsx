import React, { useContext } from 'react';
import { portfolioPageContentKeys } from '../utils/ck';
import Content from '../utils/Content';
import { LanguageContext } from '../../contexts/LanguageContext';

export const history = [
  {
    companyName: 'globo-title',
    jobDescription: 'globo-activities',
  },
  {
    companyName: 'stf-title',
    jobDescription: 'stf-activities',
  },
  {
    companyName: 'sfw-dev-title',
    jobDescription: 'sfw-dev-activities',
  },
  {
    companyName: 'sfw-supp-title',
    jobDescription: 'sfw-supp-activities',
  },
  {
    companyName: 'maxi-title',
    jobDescription: 'maxi-activities',
  },
];

const Portfolio: React.FC = () => {
  const ckList = portfolioPageContentKeys;
  const { language } = useContext(LanguageContext);

  return (
    <div className="grid p-3 mx-auto text-p_text dark:text-s_text">
      {history.map((company, key) => {
        return (
          <div key={key} className="flex md:contents">
            <div className="relative mr-5">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full pointer-events-none bg-p_buttons dark:bg-p_gradient"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 rounded-full shadow bg-p_buttons_hover dark:bg-s_gradient top-1/2"></div>
            </div>
            <div className="col-start-6 col-end-10 p-4 my-4 mr-auto shadow-md dark:bg-s_gradient bg-primary rounded-xl">
              <h3
                className="mb-1 text-lg font-semibold"
                data-testid={company.companyName}
              >
                <Content
                  ck={company.companyName}
                  language={language}
                  ckList={ckList}
                />
              </h3>
              <Content
                data-testid={company.jobDescription}
                ck={company.jobDescription}
                language={language}
                ckList={ckList}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Portfolio;
