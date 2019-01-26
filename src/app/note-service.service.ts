import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from '../../../Note';

const httpOptions: object = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
const baseURL: string = "http://localhost";

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  constructor(private httpClient: HttpClient) { }

  getNote(id: number): Observable<Note> {
    return this.httpClient.get<Note>(baseURL + `/api/notes/${id}`, httpOptions).pipe();
  }

  getNotes() : Observable<Note[]> {
    return this.httpClient.get<Note[]>(baseURL + '/api/notes', httpOptions).pipe();
  }

  addNode(note: Note): Observable<string> {
    return this.httpClient.post<string>(baseURL + '/api/notes/add', note, httpOptions).pipe();
  }

  editNote(note: Note): Observable<string> {
    return this.httpClient.post<string>(baseURL + `/api/notes/edit/${note.id}`, note, httpOptions).pipe();
  }

  deleteNote(id: number): void {
    this.httpClient.delete(baseURL + `/api/notes/delete/${id}`, httpOptions).subscribe(res => null);
  }
}
