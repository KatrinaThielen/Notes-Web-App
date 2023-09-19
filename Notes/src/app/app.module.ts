import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotesComponent } from './homepage/notes/notes.component';
import { HeaderComponent } from './header/header.component';
import { NewNoteComponent } from './homepage/new-note/new-note.component';
import { ViewAllComponent } from './homepage/view-all/view-all.component';
import { RecentThreeComponent } from './homepage/recent-three/recent-three.component';
import { NoteDetailsComponent } from './homepage/note-details/note-details.component';
import { DateSearchPipe } from './pipes/date-search.pipe';
import { NoteEditComponent } from './homepage/note-edit/note-edit.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'home', component: HomepageComponent, children: [
    {path:'notes', component: NotesComponent},
    {path:'new', component: NewNoteComponent},
    {path:'viewAll', component: ViewAllComponent},
    {path:'recent', component: RecentThreeComponent},
    {path:'details', component:NoteDetailsComponent},
    {path:'modify', component:NoteEditComponent}
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomepageComponent,
    HeaderComponent,
    NotesComponent,
    NewNoteComponent,
    ViewAllComponent,
    RecentThreeComponent,
    NoteDetailsComponent,
    DateSearchPipe,
    NoteEditComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
