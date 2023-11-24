export interface Local {
  username: string;
  password: string;
  login_title: string;
  submit: string;
  cancel: string;
  error_field: string;
  note_text: string;
  note_title: string;
  note_color: string;
  note_isPublic: string;
  new_note_title: string;
  save: string;
}

export interface Localization {
  en: Local;
  ru: Local;
}
