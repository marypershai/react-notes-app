type LinkButtonProps = {
  text: string;
  className?: string;
  onClick: unknown;
};

export const LinkButton = (props: LinkButtonProps) => {
  const {text, className = 'simple-link', onClick} = props;

  return (
    <a href="#" className={className} onClick={onClick}>
      {text}
    </a>
  );
};
