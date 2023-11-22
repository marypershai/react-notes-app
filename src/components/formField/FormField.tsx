import './FormField.css';
import {InputField} from '../inputField/InputField';
import {useContext} from 'react';
import {LocalizationContext} from '../../services/contexts/LocalizationContext';

type FormFieldProps = {
  fieldType: string;
  fieldPlaceholder: string;
  errorState: boolean;
};

export const FormField = (props: FormFieldProps) => {
  const {fieldType, fieldPlaceholder, errorState} = props;
  const {language, setLanguage} = useContext(LocalizationContext);

  return (
    <div className={errorState ? 'error form-field' : 'form-field'}>
      <InputField fieldType={fieldType} fieldPlaceholder={fieldPlaceholder} />
      {errorState ? <p className="error-text">{language.error_field}</p> : ''}
    </div>
  );
};
