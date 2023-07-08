import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UpdateEducationComponent } from './profile/educations/updateEducation/update-education.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    // { path: 'editEducation/:id', component: UpdateEducationComponent },
    {path: '**', component: ProfileComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
