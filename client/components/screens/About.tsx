import React, { useContext } from 'react';
import Content from '../utils/Content';
import { aboutPageContentKeys } from '../utils/ck';
import Image from 'next/image';
import ProfilePic from './../../assets/profile.webp';
import { LanguageContext } from '../../contexts/LanguageContext';

const About: React.FC = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="p-10 text-lg font-thin text-p_text dark:text-s_text">
      <div className="flex items-center justify-center pb-10">
        <Image
          data-testid="image"
          className="rounded-lg shadow-md"
          src={ProfilePic}
          alt="profile-picture"
          width={300}
          height={300}
        />
      </div>
      <div>
        <Content
          data-testid="about"
          ck="about-me"
          ckList={aboutPageContentKeys}
          language={language}
        />
      </div>
    </div>
  );
};

export default About;
