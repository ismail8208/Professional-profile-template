import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEducation } from '../../profile.component';
import { ActivatedRoute } from '@angular/router';
import { EducationClient } from '../../services/educationClient';

@Component({
  selector: 'ml-update-education',
  templateUrl: './update-education.component.html',
  styleUrls: ['./update-education.component.css']
})
export class UpdateEducationComponent { //education

  @Input() education?: IEducation;
  @Output() chosenEducation: EventEmitter<IEducation> = new EventEmitter<IEducation>();
  updateEducation()
  {
    this.chosenEducation.emit(this.education);
  }
}
