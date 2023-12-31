export interface ILocal {
  username: string;
  password: string;
  login_title: string;
  logout: string;
  submit: string;
  cancel: string;
  error_field: string;
  note_text: string;
  note_title: string;
  note_color: string;
  note_isPublic: string;
  note_tags: string;
  new_note_title: string;
  save: string;
  private_notes_title: string;
  public_notes_title: string;
  delete: string;
  edit: string;
  read_more: string;
  yes: string;
  no: string;
  delete_notification: string;
  delete_modal_title: string;
  reset_password: string;
  change_password_title: string;
  new_password: string;
  confirm_password: string;
  favorite_notes_title: string;
  edit_note_title: string;
}

export interface ILocalization {
  en: ILocal;
  ru: ILocal;
}
