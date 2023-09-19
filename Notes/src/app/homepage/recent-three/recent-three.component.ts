import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-recent-three',
  templateUrl: './recent-three.component.html',
  styleUrls: ['./recent-three.component.css']
})
export class RecentThreeComponent {

  constructor(private route: ActivatedRoute, private server: HelperService, private router: Router){}
  
  notes: any;
  
  // when page loads, retrieve notes array from data.json and store data in 'notes'
  ngOnInit(){
    this.server.getNotes().subscribe((data)=>{
      this.notes = data;
    })
  }
}