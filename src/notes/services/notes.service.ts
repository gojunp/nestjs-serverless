import { Injectable } from '@nestjs/common';
import { Note } from '../schemas/note.schema';
import { NotesRepository } from '../repositores/notes.repository';
import { AbstractNotesService } from './abstract.notes.service';

@Injectable()
export class NotesService extends AbstractNotesService {
  constructor(private readonly notesRepository: NotesRepository) {
    super();
  }

  async findAll(): Promise<Note[]> {
    return await this.notesRepository.findAll();
  }

  async findById(id: string): Promise<Note> {
    return await this.notesRepository.findById(id);
  }

  async create(note: Note): Promise<Note> {
    return await this.notesRepository.create(note);
  }

  async update(id: string, updatedNote: Note): Promise<Note> {
    return await this.notesRepository.update(id, updatedNote);
  }

  async delete(id: string): Promise<Note> {
    return await this.notesRepository.delete(id);
  }
}
