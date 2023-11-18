import './InputField.css';
import React, {useState} from 'react';

type InputFieldProps = {
  fieldType: string;
  fieldPlaceholder: string;
};

export const InputField = (props: InputFieldProps) => {
  const {fieldType, fieldPlaceholder} = props;

  const [viewPasswordState, setViewPasswordState] = useState(false);

  function viewPassword(event): void {
    if (event.target === event.currentTarget) {
      setViewPasswordState(prevState => !viewPasswordState);
      const passwordInput = event.target.previousElementSibling;
      if (passwordInput.getAttribute('type') === 'password') {
        passwordInput.setAttribute('type', 'text');
      } else {
        passwordInput.setAttribute('type', 'password');
      }
    }
  }

  return (
    <div className="input-wrap">
      <input type={fieldType} placeholder={fieldPlaceholder} />
      {fieldType === 'password' ? (
        <a
          href="#"
          className={viewPasswordState ? 'password-control view' : 'password-control no-view'}
          onClick={(event: React.MouseEvent<HTMLAnchorElement>) => viewPassword(event)}></a>
      ) : (
        ''
      )}
    </div>
  );
};
