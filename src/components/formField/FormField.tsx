import './FormField.css';

type FormFieldProps = {
  fieldType: string;
  fieldPlaceholder: string;
  errorState: boolean;
};

export const FormField = (props: FormFieldProps) => {
  const {fieldType, fieldPlaceholder, errorState} = props;

  return (
    <div className={errorState ? 'error form-field' : 'form-field'}>
      <input type={fieldType} placeholder={fieldPlaceholder} />
      {errorState ? <p className="error-text">Please check</p> : ''}
    </div>
  );
};
