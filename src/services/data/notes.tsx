import {INote} from '../interfaces/INote';

export const mockNotes: INote[] = [
  {
    color: 'lime',
    isPublic: false,
    owner: 'Samir',
    tags: ['tag1'],
    text: 'text1',
    title: 'title1',
    id: 1,
  },
  {
    color: 'steelblue',
    isPublic: false,
    owner: 'Samir',
    tags: ['tag1'],
    text: 'text2',
    title: 'title2',
    id: 2,
  },
  {
    color: 'tomato',
    isPublic: true,
    owner: 'Samir',
    tags: ['tag2'],
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only ",
    title: 'title3',
    id: 3,
  },
  {
    color: 'orange',
    isPublic: false,
    owner: 'Samir',
    tags: ['tag2'],
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised",
    title: 'title4',
    id: 4,
  },
  {
    color: '#ccc',
    isPublic: false,
    owner: 'Samir',
    tags: ['tag2'],
    text: 'text4',
    title: 'title4',
    id: 5,
  },

  {
    color: '#ccc',
    isPublic: true,
    owner: 'Samir',
    tags: ['tag2', 'tag4'],
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    title: 'title4',
    id: 6,
  },
];
