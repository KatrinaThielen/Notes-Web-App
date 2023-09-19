import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent {

  now = new Date();

  constructor(private router:Router, private server:HelperService){}
  // submit new note to be formatted and input into data.json file
  onSubmit(data: any){
    console.log(data)
    let newNote = {
      title: data.controls.title.value,
      body: data.controls.body.value,
      dataCreated: this.now,
      favorite: false
    }
    this.server.addNote(newNote).subscribe(query=>{
      if (query){
        this.router.navigate(['notes']);
        alert('note has been successfully added. redirecting user to homepage.')
        this.router.navigate(['/home']);
      }
      else {
        alert('Unable to successfully add new note.')
      }
    })
  }
}
