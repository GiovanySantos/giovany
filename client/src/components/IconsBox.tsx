import React from 'react';
import {
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTypescript,
} from 'react-icons/bi';
import { GrGraphQl } from 'react-icons/gr';
import { SiRedis, SiMongodb, SiJest } from 'react-icons/si';

const IconBox: React.FC = () => {
  const icons = [
    <BiLogoJavascript aria-label="Javascript" color="#EFD81D" key={0} />,
    <BiLogoTypescript aria-label="Typescript" color="#2F75C0" key={1} />,
    <BiLogoReact aria-label="React" color="#00D1F7" key={2} />,
    <BiLogoNodejs aria-label="NodeJS" color="#8CC24A" key={3} />,
    <SiJest aria-label="Jest" color="#C03B13" key={4} />,
    <GrGraphQl aria-label="GraphQL" color="#E63BAF" key={5} />,
    <SiRedis aria-label="Redis" color="#ea4a19" key={6} />,
    <SiMongodb aria-label="MongoDB" color="#1C9777" key={7} />,
  ];
  return (
    <div className="flex flex-col justify-center gap-3 text-5xl">
      <div className="flex flex-wrap justify-center gap-5">
        {icons.map((icon) => icon)}
      </div>
    </div>
  );
};

export default IconBox;
