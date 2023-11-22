export interface Local {
  username: string;
  password: string;
  login_title: string;
  submit: string;
  cancel: string;
  error_field: string;
}

export interface Localization {
  en: Local;
  ru: Local;
}
