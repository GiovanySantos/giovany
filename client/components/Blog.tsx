import React from 'react';
import Header from './Header';
import IconBox from './IconsBox';
import ButtonsBox from './ButtonsBox';

export enum EnumPage {
  Home = 0,
  Portfolio = 1,
  About = 2,
  ßß,
}

const Blog: React.FC = () => {
  return (
    <div className="flex items-center justify-center max-w-full">
      <div className="flex flex-col p-5 text-center gap-7">
        <Header />
        <IconBox />
        <ButtonsBox />
      </div>
    </div>
  );
};

export default Blog;
