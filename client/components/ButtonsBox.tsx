import React from 'react';

const ButtonsBox: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 py-10">
      <button className="px-2 py-4 rounded-md bg-p_buttons text-primary hover:bg-p_buttons_hover hover:text-secondary dark:hover:bg-s_gradient dark:hover:text-primary dark:bg-s_buttons dark:text-secondary">
        Projetos
      </button>
      <button className="px-2 py-4 rounded-md bg-p_buttons text-primary hover:bg-p_buttons_hover hover:text-secondary dark:hover:bg-s_gradient dark:hover:text-primary dark:bg-s_buttons dark:text-secondary">
        Carreira
      </button>
      <button className="px-2 py-4 rounded-md bg-p_buttons text-primary hover:bg-p_buttons_hover hover:text-secondary dark:hover:bg-s_gradient dark:hover:text-primary dark:bg-s_buttons dark:text-secondary">
        Faça um pedido
      </button>
    </div>
  );
};

export default ButtonsBox;
