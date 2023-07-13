import React from 'react';
import { ckType } from './ck';
import { EnumLanguageAvaliable } from '../types/enums';

type IProps = {
  ck?: string;
  css?: string;
  language?: EnumLanguageAvaliable;
  ckList?: ckType[];
};

const Content: React.FC<IProps> = (props) => {
  const { ck, language, css, ckList } = props;

  const handleLoadValue = () => {
    const value = ckList?.find((item) => item.key === ck);
    if (!value) return '';

    if (language === EnumLanguageAvaliable?.pt) return value.pt;
    if (language === EnumLanguageAvaliable?.en) return value.en;
  };

  return (
    <div className={css} data-testid={`content-${ck}`}>
      {handleLoadValue()}
    </div>
  );
};

export default Content;
