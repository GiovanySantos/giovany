import React from 'react';
import {
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTypescript,
} from 'react-icons/bi';
import { GrGraphQl } from 'react-icons/gr';
import { SiApollographql, SiCypress, SiJest } from 'react-icons/si';

const IconBox: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-3 text-5xl">
      <div className="flex flex-wrap justify-between gap-5">
        <BiLogoJavascript color="#EFD81D" />
        <BiLogoTypescript color="#2F75C0" />
        <BiLogoReact color="#00D1F7" />
        <BiLogoNodejs color="#8CC24A" />
      </div>
      <div className="flex flex-wrap justify-between gap-5">
        <GrGraphQl color="#E63BAF" />
        <SiApollographql />
        <SiCypress color="#1C9777" />
        <SiJest color="#C03B13" />
      </div>
    </div>
  );
};

export default IconBox;
