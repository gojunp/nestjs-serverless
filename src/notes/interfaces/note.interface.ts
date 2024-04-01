export interface INote {
  title: string;
  content: string;
}

export interface NoteRecord extends INote {
  createdAt?: Date;
  updatedAt?: Date;
}
