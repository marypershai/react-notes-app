import {Button} from '../../components/button/Button';
import './AuthorizationPage.css';
import {FormField} from '../../components/formField/FormField';

export const AuthorizationPage = () => {
  return (
    <div className="login-wrap">
      <h2>Login</h2>
      <div className="form">
        <FormField fieldType={'text'} fieldPlaceholder={'UserName'} errorState={true} />
        <FormField fieldType={'password'} fieldPlaceholder={'Password'} errorState={false} />
        <Button text={'Submit'} />
        <a href="#">
          <p> Cancel </p>
        </a>
      </div>
    </div>
  );
};
