import {useLocalization} from '../../../services/hooks/UseLocalization';
import {useNavigate} from 'react-router-dom';
import {FormField} from '../../../components/formField/FormField';
import {Button} from '../../../components/button/Button';
import {useState} from 'react';
import {LinkButton} from '../../../components/linkButton/LinkButton';
import './ChangePasswordPage.css';

export const ChangePasswordPage = () => {
  const {language: loc} = useLocalization();
  const [errorState, setErrorState] = useState(false);
  const navigate = useNavigate();

  const savePassword = () => {
    checkPassword();
    if (errorState) {
      navigate('/login');
    } else {
      return;
    }
  };

  const cancelChangePassword = () => {
    navigate('/login');
  };

  const checkPassword = () => {
    const newPassword: string = (document.getElementById('new-pass') as HTMLInputElement).value;
    const confirmedPassword: string = (document.getElementById('confirm-pas') as HTMLInputElement)
      .value;
    if (newPassword !== confirmedPassword || newPassword === '') {
      setErrorState(() => true);
    } else {
      setErrorState(() => false);
    }
  };

  return (
    <div className="change-password">
      <h2 className="change-password-title">{loc.change_password_title}</h2>
      <div className="change-password-form">
        <FormField
          fieldType={'password'}
          fieldPlaceholder={loc.new_password}
          errorState={errorState}
          id={'new-pass'}
        />
        <FormField
          fieldType={'password'}
          fieldPlaceholder={loc.confirm_password}
          errorState={errorState}
          id={'confirm-pas'}
        />
        <Button text={loc.save} className={'login-btn'} onClick={savePassword} />
        <div className="link">
          <LinkButton text={loc.cancel} onClick={cancelChangePassword} />
        </div>
      </div>
    </div>
  );
};
