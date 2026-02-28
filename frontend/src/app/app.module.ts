import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: '', redirectTo: '/teachers', pathMatch: 'full' },
  { path: 'teachers', component: TeachersComponent },
  { path: 'students', component: StudentsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TeachersComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
