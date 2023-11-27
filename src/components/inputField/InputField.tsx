import './InputField.css';
import React, {useState} from 'react';

type InputFieldProps = {
  fieldType: string;
  fieldPlaceholder: string;
  id?: string;
  value?: string;
};

export const InputField = (props: InputFieldProps) => {
  const {fieldType, fieldPlaceholder, id, value} = props;

  const [viewPasswordState, setViewPasswordState] = useState(false);

  const viewPassword = (event: React.MouseEvent<HTMLElement>): void => {
    if (event.target && event.target === event.currentTarget) {
      setViewPasswordState(() => !viewPasswordState);
      const passwordInput = (event.target as HTMLElement).previousElementSibling as Element;
      if (passwordInput.getAttribute('type') === 'password') {
        passwordInput.setAttribute('type', 'text');
      } else {
        passwordInput.setAttribute('type', 'password');
      }
    }
  };

  return (
    <div className="input-wrap">
      <input type={fieldType} placeholder={fieldPlaceholder} id={id} value={value} />
      {fieldType === 'password' ? (
        <a
          href="#"
          onClick={viewPassword}
          className={viewPasswordState ? 'password-control view' : 'password-control no-view'}></a>
      ) : (
        ''
      )}
    </div>
  );
};
