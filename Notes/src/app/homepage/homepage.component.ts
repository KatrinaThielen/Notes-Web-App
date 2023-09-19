import { Component, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
  
  constructor(public route: ActivatedRoute, private server: HelperService, private router: Router){}
  
  notes: any;
  // when page loads, retrieve notes array from data.json and store data in 'notes'
  ngOnInit(){
    this.server.getNotes().subscribe((data)=>{
      this.notes = data;
    })
  }
  // navigates user to create new note page
  goToNew(){
    this.router.navigate(['/home/new']);
  }
  // navigates user to view all notes page
  goToAll(){
    this.router.navigate(['/home/viewAll']);
  }
  // navigates user to single note details page and sets the selected note for the view
  details(obj: any){
    this.server.setSelectedNote(obj); // sets selected note to selected
    this.router.navigate(['/home/details']); // navigates to note detail page
  }
}
