import React from 'react';
import Header from './Header';
import IconBox from './IconsBox';
import ButtonsBox from './ButtonsBox';

const Blog: React.FC = () => (
  <div className="flex items-center justify-center max-w-full">
    <div className="flex flex-col p-5 text-center gap-7">
      <Header />
      <IconBox />
      <ButtonsBox />
    </div>
  </div>
);

export default Blog;
