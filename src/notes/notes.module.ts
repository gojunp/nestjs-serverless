import { Module } from '@nestjs/common';
import { NotesService } from './services/notes.service';
import { NotesController } from './notes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, NoteSchema } from './schemas/note.schema';
import { NotesRepository } from './repositores/notes.repository';
import { AbstractNotesService } from './services/abstract.notes.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }]),
  ],
  controllers: [NotesController],
  providers: [
    NotesService,
    NotesRepository,
    {
      provide: AbstractNotesService,
      useClass: NotesService,
    },
  ],
})
export class NotesModule {}
