import { Model } from 'mongoose';
import { Note, NoteDocument } from '../schemas/note.schema';
import { InjectModel } from '@nestjs/mongoose';
import { BaseRepository } from 'src/common/repositores/base.repository';

export class NotesRepository extends BaseRepository<Note> {
  constructor(
    @InjectModel(Note.name) private readonly noteModel: Model<NoteDocument>,
  ) {
    super(noteModel);
  }
}
