import React from 'react';
import GloboplaySVG from '../assets/GloboplaySVG';
import DellSVG from '../assets/DellSVG';

const CarreerIconsBox: React.FC = () => {
  const icons = [
    <GloboplaySVG className="text-9xl" key={0} />,
    <DellSVG key={1} />,
    <p className="font-bold text-1xl text-sky-700 sm:text-2xl" key={2}>
      Safeweb
    </p>,
  ];
  return (
    <div className="flex flex-wrap items-center justify-center w-full text-center sm:gap-4">
      {icons.map((icon) => icon)}
    </div>
  );
};

export default CarreerIconsBox;
