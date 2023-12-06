export interface INote {
  id: number | string;
  isPublic: boolean;
  owner: string;
  tags: string[];
  text: string;
  title: string;
  color: string;
  isFavorite?: boolean;
}
