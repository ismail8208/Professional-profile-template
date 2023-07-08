import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillComponent } from './profile/skills/skill.component';
import { AddSKillComponent } from './profile/skills/addSkill/add-skill.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateSKillComponent } from './profile/skills/updateSkill/update-skill.component';
import { EducationComponent } from './profile/educations/education.component';
import { RouterModule } from '@angular/router';
import { AddEducationComponent } from './profile/educations/addEducation/add-education.component';
import { UpdateEducationComponent } from './profile/educations/updateEducation/update-education.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SkillComponent,
    AddSKillComponent,
    UpdateSKillComponent,
    EducationComponent,
    AddEducationComponent,
    UpdateEducationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
