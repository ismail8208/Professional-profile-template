import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { skill } from "../../profile.component";
@Component({
    selector: 'ml-add-skill',
    templateUrl: './add-skill.component.html',
    styleUrls: ['./add-skill.component.css'],
})
export class AddSKillComponent{


    @Output() selectedSKill: EventEmitter<string> = new EventEmitter<string>();

    @Output() _listFilter: EventEmitter<string> = new EventEmitter<string>(); //output
    
    @Input() filteredSKills : skill[] = []; //input

    v: string = '';

    public set listFilter(v : string) {
        this._listFilter.emit(v);
        this.v = v;
    }
    
    
    chosenSkill: string ='';
    chooseSkill(skill: skill) {
        this.chosenSkill = skill.title;
    }

    saveSkill()
    {
        this.v !=' ' &&  this.selectedSKill.emit((this.chosenSkill == '' ? this.v : this.chosenSkill));
        this.chosenSkill = '';
    }

}