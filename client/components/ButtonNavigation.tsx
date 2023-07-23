import React from 'react';

type IProps = {
  children: JSX.Element;
  onClick: () => void;
};

const ButtonNavigation: React.FC<IProps> = (props) => {
  const { children, onClick } = props;

  return (
    <button
      onClick={() => onClick()}
      className="px-6 py-3 font-extrabold rounded-md shadow-lg text-primary hover:text-p_buttons_hover_text bg-p_buttons hover:bg-p_buttons_hover dark:bg-s_buttons dark:hover:bg-s_buttons_hover dark:text-s_buttons_text dark:hover:text-s_buttons_hover_text"
    >
      {children}
    </button>
  );
};

export default ButtonNavigation;
