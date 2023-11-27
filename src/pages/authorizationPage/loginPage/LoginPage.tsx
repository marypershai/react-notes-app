import './LoginPage.css';
import {useNavigate} from 'react-router-dom';
import {useLocalization} from '../../../services/hooks/UseLocalization';
import {FormField} from '../../../components/formField/FormField';
import {Button} from '../../../components/button/Button';
import {LinkButton} from '../../../components/linkButton/LinkButton';

export const LoginPage = () => {
  const {language: loc} = useLocalization();
  const navigate = useNavigate();

  const loginSubmit = () => {
    console.log('redirect');
    navigate('/public-notes');
  };

  const changePassword = () => {
    console.log('redirect');
    navigate('/login/change-password');
  };

  return (
    <div className="login">
      <h2 className="login-title">{loc.login_title}</h2>
      <div className="login-form">
        <FormField fieldType={'text'} fieldPlaceholder={loc.username} errorState={false} />
        <FormField fieldType={'password'} fieldPlaceholder={loc.password} errorState={false} />
        <Button text={loc.submit} className={'login-btn'} onClick={loginSubmit} />
        <div className="link">
          <LinkButton text={loc.reset_password} onClick={changePassword} />
        </div>
      </div>
    </div>
  );
};
