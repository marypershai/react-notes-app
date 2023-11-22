import {Button} from '../../components/button/Button';
import './AuthorizationPage.css';
import {FormField} from '../../components/formField/FormField';
import {useContext, useState} from 'react';
import {LocalizationContext} from '../../services/contexts/LocalizationContext';

export const AuthorizationPage = () => {
  const {language: loc} = useContext(LocalizationContext);

  return (
    <div className="login-wrap">
      <h2>{loc.login_title}</h2>
      <div className="form">
        <FormField fieldType={'text'} fieldPlaceholder={loc.username} errorState={true} />
        <FormField fieldType={'password'} fieldPlaceholder={loc.password} errorState={false} />
        <Button text={loc.submit} />
        <a href="#">
          <p>{loc.cancel}</p>
        </a>
      </div>
    </div>
  );
};
