import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  selected: any;

  constructor(private http: HttpClient) { }
  
  // Edit the note object in data.json
  modifiedNote(query: any){
    this.http.put('http://localhost:3000/notes/'+ query.id, query)
    .subscribe(data => query.id)
  }

  // Add the note object in data.json to favorites
  addToFavorites(query: any){
    this.http.put('http://localhost:3000/notes/'+ query.id, query)
    .subscribe(data => query.id)
    // console.log('updating the selected note #' + this.query.id);
    // alert('updated and added note to favorites. navigating to home.')
  }

  // Remove the note object in data.json from favorites
  removeFromFavorites(query: any){
    this.http.put<any>('http://localhost:3000/notes/'+ query.id, query)
    .subscribe(data => query.id);
  }

  // Delete the note object in data.json
  deleteNote(query: any){
    return this.http.delete<any>('http://localhost:3000/notes/'+ query.id)
    .subscribe()
  }

  // Set selected note
  setSelectedNote(obj: any){
    this.selected = obj;
    console.log('this is the object setted')
  }

  // Get retrieved selected note
  getSelectedNote(){
    console.log('object being retrieved')
    return this.selected;
  }

  // Retrieve notes from JSON
  getNotes(): Observable<any>{
    return this.http.get('http://localhost:3000/notes')
  }

  // Add new note entry to JSON data.json
  addNote(newNoteInput: any): Observable<any>{
  return this.http.post('http://localhost:3000/notes', newNoteInput).pipe(
    catchError(this.handleErrors)
    )
  }

  // Add new user entry to JSON data.json
  register(user: { username: any; password: any}): Observable<any>{
    return this.http.post('http://localhost:3000/users',user).pipe(
      catchError(this.handleErrors)
    )
  }
  // Check if username and password are in users array in data.json
  login(): Observable<any>{
    return this.http.get('http://localhost:3000/users');
  }

  // For the errors
  handleErrors(error: any){
    return throwError(error)
  }

}