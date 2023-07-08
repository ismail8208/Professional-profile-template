import { Component, OnDestroy, OnInit } from "@angular/core";
import { SkillClient } from "./services/skillClient";
import { Subscription, map } from "rxjs";
import { UserClient } from "./services/userClient";
import { EducationClient } from "./services/educationClient";
@Component({
    selector: 'ml-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy
{
    skills: skill[] = [];
    filteredSKills : skill[] = [];
    filteredEducations: IEducation[] = [];
    subSKill!: Subscription;
    subUser!: Subscription;
    subEducation!: Subscription;
    personalData?: UserDto;
    educations: IEducation[] = [];
    
    constructor(private skillClinet: SkillClient, private userClient: UserClient, private educationClient: EducationClient){}
    
    ngOnInit(): void {

        this.subSKill = this.skillClinet.getSkills().subscribe(
            {
                next: skills => {
                    this.skills = skills;
                    this.textskillbutton = `Show all ${this.skills.length} skills`;
                }
            }
        );

        this.subUser = this.userClient.getUser("AyaSoltan").subscribe(
            {
                next: data => {
                    this.personalData = data
                }
            }
        )

        this.subEducation = this.educationClient.getSEducations().subscribe(
            {
                next: data => {
                this.educations = data;
                this.textEducationbutton = `Show all ${this.educations.length} educations`;
                }
            }
        )
    }

    ngOnDestroy(): void {
        this.subSKill.unsubscribe();
        this.subUser.unsubscribe();
        console.log("sun observable is finshed");
    }


    //skills
    showAllSkills: boolean = false;
    textskillbutton: string = '';
    toggleSkills() {
        this.showAllSkills = !this.showAllSkills;
        this.textskillbutton = this.showAllSkills? 'Hide' : `Show all ${this.skills.length} skills`;
    }

    addSkill(skill: string) {
        console.log(`the skill ${skill} is added`)
        this.skillClinet.addSkill(skill);
    }

    updateSkill(skill: skill)
    {
        this.skillClinet.updateSKill(skill);
    }
    deleteSkill(id: number)
    {
        console.log(`the skil of Id ${id} is deleted`)
        this.skillClinet.deleteSkill(id);
    }
    searchSkills(skille: string)
    {
        this.filteredSKills = this.skills.filter((skill: skill) =>
        skill.title.toLocaleLowerCase().includes(skille.toLocaleLowerCase()));
        console.log(skille)
    }
    // skills end

    //education start
    showAllEducations: boolean = false;
    textEducationbutton: string = '';
    toggleEducations() {
        this.showAllEducations = !this.showAllEducations;
        this.textEducationbutton = this.showAllEducations ? 'Hide' : `Show all ${this.educations.length} educations`;
    }

    addEducation(education: string)
    {
        this.educationClient.addSEducation(education);
    }

    edu: IEducation = {
        id: 0,
        title: 'empty',
        level: 'empty'
    };

    chosenEducation(education: IEducation)
    {
        this.edu = education;
    }

    updateEducation(education: IEducation)
    {
        this.educationClient.updateEducation(education);
        console.log(`education ${education.title}`);
        this.edu = {id: 0, title: 'empty', level: 'empty'};
    }

    searchEducation(educatione: string)
    {
        this.filteredEducations = this.educations.filter((education: IEducation) =>
        education.title.toLocaleLowerCase().includes(educatione.toLocaleLowerCase()));
    }

    deleteEducation(id: number)
    {
        this.educationClient.deleteEducation(id);
    }
}
export interface skill {
    id: number;
    title: string;
}
export interface IEducation {
    id: number;
    title: string;
    level: string;
}
export interface UserDto {
    fullName: string;
    address: string;
    summary: string;
    followers: number;
    followings: number;
    profileImage: string;
}
