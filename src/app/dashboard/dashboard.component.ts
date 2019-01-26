import { Component, OnInit } from '@angular/core';

import { faStickyNote, faPlus, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Note } from '../../../../Note';
import { NoteServiceService } from '../note-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  faStickyNote = faStickyNote;
  faPlus = faPlus;
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;

  notes: Note[];
  selectedNote: Note;

  constructor(private noteService: NoteServiceService) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes() : void {
    this.noteService.getNotes().subscribe(noteS => this.notes = noteS);
  }

  focusNote(note: Note): void {
    this.selectedNote = note;
  }

  deleteNote() {
    this.noteService.deleteNote(this.selectedNote.id);
    this.notes = this.notes.filter(n => n.id != this.selectedNote.id);

    this.selectedNote = undefined;
  }
}
