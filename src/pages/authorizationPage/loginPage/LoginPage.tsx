import './LoginPage.css';
import {useNavigate} from 'react-router-dom';
import {useLocalization} from '../../../services/hooks/UseLocalization';
import {FormField} from '../../../components/formField/FormField';
import {Button} from '../../../components/button/Button';
import {LinkButton} from '../../../components/linkButton/LinkButton';
import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../services/hooks/redux';
import {fetchAuth} from '../../../services/store/reducers/ActionCreator';
import {authChangeErrorState} from '../../../services/store/reducers/AuthSlice';

export const LoginPage = () => {
  const {language: loc} = useLocalization();
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const {isLoading, error} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const loginSubmit = async () => {
    const creds = {
      password,
      username,
    };
    await dispatch(fetchAuth(creds));
    navigate('/public-notes', {replace: true});
  };

  const handleUsername = event => {
    setUserName(event.target.value);
    dispatch(authChangeErrorState);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const changePassword = () => {
    navigate('/login/change-password');
  };

  return (
    <div className="login">
      <h2 className="login-title">{loc.login_title}</h2>
      {isLoading && <h1>Comming</h1>}
      <div className="login-form">
        <FormField
          fieldType={'text'}
          fieldPlaceholder={loc.username}
          errorState={error}
          onChange={handleUsername}
        />
        <FormField
          fieldType={'password'}
          fieldPlaceholder={loc.password}
          errorState={error}
          onChange={handlePassword}
        />
        <Button text={loc.submit} className={'login-btn'} onClick={loginSubmit} />
        <div className="link">
          <LinkButton text={loc.reset_password} onClick={changePassword} />
        </div>
      </div>
    </div>
  );
};
