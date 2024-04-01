import { Note } from '../schemas/note.schema';

export abstract class AbstractNotesService {
  abstract findAll(): Promise<Note[]>;
  abstract findById(id: string): Promise<Note>;
  abstract create(note: Note): Promise<Note>;
  abstract update(id: string, updatedNote: Note): Promise<Note>;
  abstract delete(id: string): Promise<Note>;
}
