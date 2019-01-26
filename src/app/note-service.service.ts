import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from '../../../Note';

const httpOptions = {
  headers: new HttpHeaders({})
}

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  constructor(private httpClient: HttpClient) { }

  getNotes() : Observable<Note[]> {
    return this.httpClient.get<Note[]>('http://localhost/api/notes').pipe();
  }

  addNode(note: Note): Observable<string> {
    return this.httpClient.post<string>('http://localhost/api/notes/add', note, httpOptions).pipe();
  }

  deleteNote(id: number): void {
    this.httpClient.delete(`http://localhost/api/notes/delete/${id}`, httpOptions).subscribe(res => null);
  }
}
