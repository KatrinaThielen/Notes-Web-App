import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  @Input() note: any;

  constructor(private server: HelperService, private router: Router){}

  ngOnInit(): void {
  }

  // navigates user to single note details page and sets the selected note for the view
  details(obj: any){
    this.server.setSelectedNote(obj); // sets selected note to selected
    this.router.navigate(['/home/details']); // navigates to note detail page

  }
}
