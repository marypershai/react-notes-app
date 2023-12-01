import './LoginPage.css';
import {useNavigate} from 'react-router-dom';
import {useLocalization} from '../../../services/hooks/UseLocalization';
import {FormField} from '../../../components/formField/FormField';
import {Button} from '../../../components/button/Button';
import {LinkButton} from '../../../components/linkButton/LinkButton';
import {useContext, useState} from 'react';
import {AuthContext} from '../../../services/contexts/AuthContext';

export const LoginPage = () => {
  const {language: loc} = useLocalization();
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorState, setErrorState] = useState(false);
  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext);

  const loginSubmit = () => {
    const creds = {
      password,
      username,
    };
    fetch('https://dull-pear-haddock-belt.cyclic.app/auth', {
      method: 'POST',
      body: JSON.stringify(creds),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response: Response) => response.json())
      .then(json => {
        localStorage.setItem('authToken', json.token);
        setIsAuthenticated(true);
        navigate('/public-notes', {replace: true});
      })
      .catch(() => {
        setErrorState(true);
        throw Error;
      });
  };

  const handleUsername = event => {
    setUserName(event.target.value);
    setErrorState(false);
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
      <div className="login-form">
        <FormField
          fieldType={'text'}
          fieldPlaceholder={loc.username}
          errorState={errorState}
          onChange={handleUsername}
        />
        <FormField
          fieldType={'password'}
          fieldPlaceholder={loc.password}
          errorState={errorState}
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
