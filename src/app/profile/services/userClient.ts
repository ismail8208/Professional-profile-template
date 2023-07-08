import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { UserDto } from "../profile.component";
@Injectable({
    providedIn: 'root'
})
export class UserClient {
    private userUrl = 'api/user.json';
    constructor(private http: HttpClient){}

    getUser(username: string): Observable<UserDto> {
        console.log('getting user is done')
        return this.http.get<user>(this.userUrl).pipe(
            map( user =>   ({
                profileImage: user.profileImage,
                fullName: `${user.firstName} ${user.lastName}`,
                address: 'New York',
                summary: 'I am a JavaScript Developer and',
                followers: 133,
                followings: 862
            } as UserDto))
        );
    }

    updateUser(user: UserDto)
    {
        this.http.put(this.userUrl, user)
    }
}

interface user {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    profileImage: string;
}