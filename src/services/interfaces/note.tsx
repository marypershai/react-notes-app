export interface NoteInterface {
  id: number;
  isPublic: boolean;
  owner: string;
  tags: string[];
  text: string;
  title: string;
  color: string;
}
