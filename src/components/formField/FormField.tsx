import './FormField.css';
import {InputField} from '../inputField/InputField';
import {useLocalization} from '../../services/hooks/UseLocalization';

type FormFieldProps = {
  fieldType: string;
  fieldPlaceholder: string;
  errorState?: boolean;
  label?: string;
  id?: string;
};

export const FormField = (props: FormFieldProps) => {
  const {fieldType, fieldPlaceholder, errorState, label, id} = props;
  const {language} = useLocalization();

  return (
    <div className={errorState ? 'error form-field' : 'form-field'}>
      {label ? <div className="input-label">{label}</div> : ''}
      <InputField fieldType={fieldType} fieldPlaceholder={fieldPlaceholder} id={id} />
      {errorState ? <p className="error-text">{language.error_field}</p> : ''}
    </div>
  );
};
