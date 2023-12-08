import {useLocalization} from '../../../services/hooks/UseLocalization';
import {useNavigate} from 'react-router-dom';
import {FormField} from '../../../components/formField/FormField';
import {Button} from '../../../components/button/Button';
import React, {useState} from 'react';
import {LinkButton} from '../../../components/linkButton/LinkButton';
import './ChangePasswordPage.css';
import {useAppDispatch, useAppSelector} from '../../../services/hooks/redux';
import {changePassword} from '../../../services/store/reducers/ActionCreator';
import {selectToken} from '../../../services/store/store';

export const ChangePasswordPage = () => {
  const {language: loc} = useLocalization();
  const [error, setErrorState] = useState<boolean>(false);
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmedPassword, setConfirmedPassword] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {token} = useAppSelector(selectToken);

  const savePassword = async (event: React.MouseEvent<HTMLElement>): Promise<void> => {
    event.preventDefault();
    checkPassword();
    if (!error && newPassword && confirmedPassword) {
      dispatch(changePassword(newPassword, token));
      navigate('/login');
    }
  };

  const handleNewPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmedPassword(event.target.value);
  };

  const cancelChangePassword = () => {
    navigate('/login');
  };

  const checkPassword = () => {
    const isPasswordMatch: boolean =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(newPassword);
    if (isPasswordMatch) {
      if (newPassword === confirmedPassword) {
        setErrorState(false);
      } else {
        setErrorState(true);
      }
    } else {
      setErrorState(true);
    }
  };

  return (
    <div className="change-password">
      <h2 className="change-password-title">{loc.change_password_title}</h2>
      <div className="change-password-form">
        <FormField
          fieldType={'password'}
          fieldPlaceholder={loc.new_password}
          errorState={error}
          id={'new-pass'}
          onChange={handleNewPassword}
        />
        <FormField
          fieldType={'password'}
          fieldPlaceholder={loc.confirm_password}
          errorState={error}
          id={'confirm-pas'}
          onChange={handleConfirmPassword}
        />
        <Button text={loc.save} className={'login-btn'} onClick={savePassword} />
        <div className="link">
          <LinkButton text={loc.cancel} onClick={cancelChangePassword} />
        </div>
      </div>
    </div>
  );
};
