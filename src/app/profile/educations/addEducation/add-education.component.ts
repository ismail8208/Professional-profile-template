import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEducation } from '../../profile.component';

@Component({
  selector: 'ml-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent {

  constructor(){
    console.log('this addEducation')
  }

  @Output() selectdEducation: EventEmitter<string> = new EventEmitter<string>();

  @Output() _listFilter: EventEmitter<string> = new EventEmitter<string>(); //output
  
  @Input() filteredEducations : IEducation[] = []; //input

  v: string = '';

  public set listFilter(v : string) {
      this._listFilter.emit(v);
      this.v = v;
  }
  
  
  chosenEducation: string ='';
  chooseEducation(education: IEducation) {
      this.chosenEducation = education.title;
  }

  saveEducation()
  {
      this.v !=' ' &&  this.selectdEducation.emit((this.chosenEducation == '' ? this.v : this.chosenEducation));
      this.chosenEducation = '';
  }
}
