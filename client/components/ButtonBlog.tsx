import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const ButtonBlog: React.FC<IProps> = ({ children, ...props }) => {
  return (
    <button {...props} className="px-2 py-4 rounded-md bg-p_buttons text-primary hover:bg-p_buttons_hover hover:text-secondary dark:hover:bg-s_gradient dark:hover:text-primary dark:bg-s_buttons dark:text-secondary">
      {children}
    </button>
  )
}

export default ButtonBlog