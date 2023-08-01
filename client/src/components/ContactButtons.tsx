import React from 'react';
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const ContactButtons: React.FC = () => {
  const handleClickIcon = (url: string) => {
    window.open(url, '_blank');
  };
  const classes =
    'p-2 mb-5 text-3xl rounded-sm cursor-pointer focus:outline-none text-p_text dark:text-s_text hover:bg-p_buttons hover:text-primary dark:hover:bg-primary dark:hover:text-secondary';

  return (
    <ul>
      <li>
        <button
          className={classes}
          aria-label="email"
          data-testid="email-icon"
          onClick={() => handleClickIcon('mailto:giovany.santos@icloud.com')}
        >
          <MdEmail />
        </button>
      </li>
      <li>
        <button
          className={classes}
          aria-label="whatsapp"
          onClick={() => handleClickIcon('https://wa.me/4888131725')}
          data-testid="whatsapp-icon"
        >
          <BsWhatsapp />
        </button>
      </li>
      <li>
        <button
          className={classes}
          aria-label="git-hub"
          data-testid="github-icon"
          onClick={() =>
            handleClickIcon('https://github.com/GiovanySantos?tab=repositories')
          }
        >
          <BsGithub />
        </button>
      </li>
      <li>
        <button
          className={classes}
          aria-label="linkedin"
          data-testid="linkedin-icon"
          onClick={() =>
            handleClickIcon('https://www.linkedin.com/in/giovanysantos/')
          }
        >
          <BsLinkedin />
        </button>
      </li>
    </ul>
  );
};

export default ContactButtons;
