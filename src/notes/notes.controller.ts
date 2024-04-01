import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  NotFoundException,
  Patch,
} from '@nestjs/common';
import { Note } from './schemas/note.schema';
import { NotesService } from './services/notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly noteService: NotesService) {}

  @Get()
  async findAll(): Promise<Note[]> {
    return this.noteService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Note> {
    const note = await this.noteService.findById(id);
    if (!note) {
      throw new NotFoundException('Note not found');
    }
    return note;
  }

  @Post()
  async create(@Body() note: Note): Promise<Note> {
    return this.noteService.create(note);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatedNote: Note,
  ): Promise<Note> {
    const note = await this.noteService.update(id, updatedNote);
    if (!note) {
      throw new NotFoundException('Note not found');
    }
    return note;
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Note> {
    const note = await this.noteService.delete(id);
    if (!note) {
      throw new NotFoundException('Note not found');
    }
    return note;
  }
}
