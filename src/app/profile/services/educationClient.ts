import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IEducation } from "../profile.component";
@Injectable({
    providedIn: 'root'
})
export class EducationClient {

    private educationsUrl = 'api/educations.json';
    constructor(private http: HttpClient){}

    getSEducations(): Observable<IEducation[]> {
        return this.http.get<IEducation[]>(this.educationsUrl);
    }

    addSEducation(education: string){
        this.http.post(education, this.educationsUrl);
        console.log(`post ${education} using httpClient service`)
    }

    updateEducation(education: IEducation)
    {
        this.http.put(this.educationsUrl, education)
    }

    deleteEducation(educationId: number)
    {
        this.http.delete(`${this.educationsUrl}/${educationId}`);
    }

}