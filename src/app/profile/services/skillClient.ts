import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { skill } from "../profile.component";
@Injectable({
    providedIn: 'root'
})
export class SkillClient {

    private skillsUrl = 'api/skills.json';
    constructor(private http: HttpClient){}

    getSkills(): Observable<skill[]> {
        return this.http.get<skill[]>(this.skillsUrl);
    }

    addSkill(skill: string){
        this.http.post(skill, this.skillsUrl);
        console.log("post skill using httpClient service")
    }

    updateSKill(skill: skill)
    {
        this.http.put(this.skillsUrl, skill)
    }

    deleteSkill(skillId: number)
    {
        this.http.delete(`${this.skillsUrl}/${skillId}`);
    }

}