import './Button.css';

type ButtonProps = {
  text: string;
  className?: string;
};

export const Button = (props: ButtonProps) => {
  const {text, className = 'btn'} = props;

  return <button className={className}>{text}</button>;
};
