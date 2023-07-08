import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEducation } from '../profile.component';

@Component({
  selector: 'ml-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  @Input() education?: IEducation;

  @Output() educationForUpdate: EventEmitter<IEducation> = new EventEmitter<IEducation>();

  @Output() educationForDeleted: EventEmitter<number> = new EventEmitter<number>();
  
  deleteEducation()
  {
   this.educationForDeleted.emit(this.education!.id);
   console.log(this.education!.id)
  }

  send()
  {
    this.educationForUpdate.emit(this.education)
  }

}
