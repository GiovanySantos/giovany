import React from 'react';
import { GiThorHammer } from 'react-icons/gi';

type IProps = {
  component: string;
};

const ComingSoon: React.FC<IProps> = (props) => {
  const { component } = props;

  return (
    <h1 className="flex gap-5 text-5xl">
      <GiThorHammer />
      {component} Coming soon
      <GiThorHammer />
    </h1>
  );
};

export default ComingSoon;
