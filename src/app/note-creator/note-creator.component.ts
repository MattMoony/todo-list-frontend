import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  edit: boolean;

  constructor(
    private noteService: NoteServiceService, 
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.edit = this.route.snapshot.url[0].path === "edit";
    if (this.edit) {
      this.noteService.getNote(+this.route.snapshot.paramMap.get('id')).subscribe(n => this.cNote = n);
    } else {
      this.cNote = new Note("", "", new Date());
    }
  }

  createNote(): void {
    if (!this.edit) {
      if (this.cNote.title && this.cNote.content) {
        this.noteService.addNode(this.cNote).subscribe(r => window.location.assign('../dashboard'));
      }
    } else {
      if (this.cNote) {
        this.noteService.editNote(this.cNote).subscribe(r => window.location.assign('../dashboard'));
      }
    }
  }

  goBack(): void {
    this.location.back();
  }
}