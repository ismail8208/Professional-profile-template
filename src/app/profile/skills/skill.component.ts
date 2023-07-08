import { outputAst } from "@angular/compiler";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { skill } from "../profile.component";
@Component({
    selector: 'ml-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.css']
})
export class SkillComponent {

   @Input() skill?: skill; 
   
   @Output() skillForDeleted: EventEmitter<number> = new EventEmitter<number>();
   
   deleteSkill()
   {
    this.skillForDeleted.emit(this.skill!.id);
   }
}