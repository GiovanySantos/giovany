import React from 'react';
import { AiFillCloseSquare } from 'react-icons/ai';

interface IProps {
  handleCloseModal: () => void;
  handleCleanInputData: () => void;
}

const CloseButton: React.FC<IProps> = ({
  handleCloseModal,
  handleCleanInputData,
}: IProps) => (
  <button
    className="text-2xl cursor-pointer text-p_buttons dark:text-s_buttons"
    aria-label="X"
    onClick={() => {
      handleCloseModal();
      handleCleanInputData();
    }}
  >
    <AiFillCloseSquare />
  </button>
);

export default CloseButton;
