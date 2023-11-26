import {Button} from '../../components/button/Button';
import './AuthorizationPage.css';
import {FormField} from '../../components/formField/FormField';
import {useLocalization} from '../../services/hooks/UseLocalization';
import {redirect, useNavigate, useSearchParams} from 'react-router-dom';

export const AuthorizationPage = () => {
  const {language: loc} = useLocalization();
  const navigate = useNavigate();

  const loginSubmit = () => {
    console.log('redirect');
    navigate('/public-notes');
  };

  return (
    <div className="login">
      <div className="login-wrap">
        <h2>{loc.login_title}</h2>
        <div className="form">
          <FormField fieldType={'text'} fieldPlaceholder={loc.username} errorState={false} />
          <FormField fieldType={'password'} fieldPlaceholder={loc.password} errorState={false} />
          <Button text={loc.submit} className={'login-btn'} onClick={loginSubmit} />
          <a href="#">
            <p>{loc.reset_password}</p>
          </a>
        </div>
      </div>
    </div>
  );
};
