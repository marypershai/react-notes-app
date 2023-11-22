import './FormField.css';
import {InputField} from '../inputField/InputField';
import {useLocalization} from '../../services/hooks/UseLocalization';

type FormFieldProps = {
  fieldType: string;
  fieldPlaceholder: string;
  errorState: boolean;
};

export const FormField = (props: FormFieldProps) => {
  const {fieldType, fieldPlaceholder, errorState} = props;
  const {language, setLanguage} = useLocalization();

  return (
    <div className={errorState ? 'error form-field' : 'form-field'}>
      <InputField fieldType={fieldType} fieldPlaceholder={fieldPlaceholder} />
      {errorState ? <p className="error-text">{language.error_field}</p> : ''}
    </div>
  );
};
