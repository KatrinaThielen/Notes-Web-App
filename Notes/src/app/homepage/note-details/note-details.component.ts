import { query } from '@angular/animations';
import { getLocaleFirstDayOfWeek } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent {
  @Input() selected: any;

  constructor(private server: HelperService, private router: Router, private http: HttpClient){};
  // when page loads, retrieves the selected note from HelperService and store in 'selected'
  ngOnInit(){
    this.selected = this.server.getSelectedNote();
  }
  // navigates user to 'home/modify' to edit the note
  editThisNote(){
    this.router.navigate(['home/modify']);
  }
  // adds 'favorite' value of true to JSON object in data.json
  addFavorite(){
    //adding to favorite in JSON 
    let marked = {
      "title": this.selected.title,
      "body": this.selected.body,
      "dataCreated": this.selected.dataCreated,      
      "favorite": true,
      "id": this.selected.id};
      this.server.addToFavorites(marked);
      alert('updated and added to favorites. navigating to home.');
      this.router.navigate(['home']);
  }
  // removes 'favorite' value and sets it to false in JSON object in data.json
  removeFavorite(){
    // removing favorite in JSON
    let unmarked = {
      "title": this.selected.title,
      "body": this.selected.body,
      "dataCreated": this.selected.dataCreated,      
      "favorite": false,
      "id": this.selected.id};
    this.server.removeFromFavorites(unmarked);
    alert('updated and removed from favorites. navigating to home.');
    this.router.navigate(['home']);
  }
  // deletes selected note
  deleteThisNote(){
    this.server.deleteNote(this.selected);
    alert('Note has been deleted. navigating to home.');
    this.router.navigate(['home']);
  }
  // navigates user to home page dashboard
  back(){
    this.router.navigate(['home']);
  }
  // navigates user to view all page
  backToViewAll(){
    this.router.navigate(['home/viewAll']);
  }
}
