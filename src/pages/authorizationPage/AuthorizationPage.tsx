import {Button} from '../../components/button/Button';
import './AuthorizationPage.css';
import {FormField} from '../../components/formField/FormField';
import {useLocalization} from '../../services/hooks/UseLocalization';

export const AuthorizationPage = () => {
  const {language: loc} = useLocalization();

  return (
    <div className="login-wrap">
      <h2>{loc.login_title}</h2>
      <div className="form">
        <FormField fieldType={'text'} fieldPlaceholder={loc.username} errorState={true} />
        <FormField fieldType={'password'} fieldPlaceholder={loc.password} errorState={false} />
        <Button text={loc.submit} className={'login-btn'} />
        <a href="#">
          <p>{loc.cancel}</p>
        </a>
      </div>
    </div>
  );
};
