import './Button.css';

type ButtonProps = {
  text: string;
  className?: string;
  onClick: unknown;
};

export const Button = (props: ButtonProps) => {
  const {text, className = 'btn', onClick} = props;

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};
