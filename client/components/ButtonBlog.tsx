import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  onClick: () => void;
}

const ButtonBlog: React.FC<IProps> = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="px-2 py-4 rounded-sm w-52 focus:outline-none bg-p_buttons text-primary md:hover:bg-p_buttons_hover md:hover:text-secondary md:dark:hover:bg-s_gradient md:dark:hover:text-primary dark:bg-s_buttons dark:text-secondary hover:border-p_buttons border-[1px]"
  >
    {children}
  </button>
);

export default ButtonBlog;
