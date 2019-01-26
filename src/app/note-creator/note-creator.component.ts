import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Note } from '../../../../Note';
import { NoteServiceService } from '../note-service.service';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.scss']
})
export class NoteCreatorComponent implements OnInit {
  faArrowLeft = faArrowLeft;

  cNote: Note;

  constructor(private noteService: NoteServiceService, private location: Location) { }

  ngOnInit() {
    this.cNote = new Note("", "", new Date());
  }

  createNote(): void {
    if (this.cNote.title && this.cNote.content) {
      this.noteService.addNode(this.cNote).subscribe(r => this.location.back());
    }
  }

  goBack(): void {
    this.location.back();
  }
}