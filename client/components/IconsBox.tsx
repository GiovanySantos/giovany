import React from 'react';
import {
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTypescript,
} from 'react-icons/bi';
import { GrGraphQl } from 'react-icons/gr';
import { SiRedis, SiMongodb, SiJest } from 'react-icons/si';

const IconBox: React.FC = () => (
  <div className="flex flex-col justify-center gap-3 text-5xl">
    <div className="flex flex-wrap justify-between gap-5">
      <BiLogoJavascript aria-label="Javascript" color="#EFD81D" />
      <BiLogoTypescript aria-label="Typescript" color="#2F75C0" />
      <div className="z-20">
        <BiLogoReact aria-label="React" color="#00D1F7" />
      </div>
      <BiLogoNodejs aria-label="NodeJS" color="#8CC24A" />
    </div>
    <div className="flex flex-wrap justify-between gap-5">
      <SiJest aria-label="Jest" color="#C03B13" />
      <GrGraphQl aria-label="GraphQL" color="#E63BAF" />
      <SiRedis aria-label="Redis" color="#ea4a19" />
      <SiMongodb aria-label="MongoDB" color="#1C9777" />
    </div>
  </div>
);

export default IconBox;
