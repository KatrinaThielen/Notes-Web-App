import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent {
  @Input() note: any;

  constructor(private server: HelperService, private router: Router){}
  // when page loads, retrieves the selected note from HelperService and store in 'note'
  ngOnInit(){
    this.note = this.server.getSelectedNote();
  }
  // submit edited note to be formatted and input into data.json file
  onSubmit(edited: any){
    console.log(this.note.dataCreated)
    let modified = {
      title: edited.controls.title.value,
      body: edited.controls.body.value,
      dataCreated: this.note.dataCreated,
      favorite: this.note.favorite,
      id: this.note.id
    }
    this.server.modifiedNote(modified);
    console.log(modified)
    alert('note has been successfully modified. navigating to home now')
    this.router.navigate(['home'])
  }
}