import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent {

constructor(private route: ActivatedRoute, private server: HelperService, private router: Router){}
  
  notes: any;
  dataCreated = '';

  // when page loads, retrieve notes array from data.json and store data in 'notes'
  ngOnInit(){
    this.server.getNotes().subscribe((data)=>{
      this.notes = data;
    })
  }
}