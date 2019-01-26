import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../../../Note';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {
  note: Note;
  timeString: string;

  @Input()
  set sNote(note: Note) {
    this.note = note;
    
    let nDate: Date = new Date(note.timestamp);
    this.timeString = this.padZero(nDate.getDate()) + "." + this.padZero(nDate.getMonth()+1) + "." + 
                      this.padZero(nDate.getFullYear()) + " " + this.padZero(nDate.getHours()) + ":" + 
                      this.padZero(nDate.getMinutes());
  }

  constructor() { }

  ngOnInit() {
  }

  padZero(n: number): string {
    if (n < 10)
      return "0"+n;
    return n+"";
  }
}
