import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NoteCreatorComponent } from './note-creator/note-creator.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'create', component: NoteCreatorComponent},
  {path: 'edit/:id', component: NoteCreatorComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
