import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { INote } from '../interfaces/note.interface';

@Schema({ timestamps: true })
export class Note implements INote {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;
}

export type NoteDocument = mongoose.HydratedDocument<Note>;

export const NoteSchema = SchemaFactory.createForClass(Note);
