import './Button.css';
import React from 'react';

type ButtonProps = {
  text: string;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Button = (props: ButtonProps) => {
  const {text, className = 'btn', onClick} = props;

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};
