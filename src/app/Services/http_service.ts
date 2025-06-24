import { inject, Injectable } from "@angular/core";
import { User } from "../Models/User";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
    providedIn:'root',
})
export class HTTPServices{
    http:HttpClient = inject(HttpClient);
    subject_emit = new Subject();
    user_post(user_details:User){
        this.http.post("http://localhost:3000/user",user_details).subscribe();
    }

    users_fetch(){
        return this.http.get("http://localhost:3000/user");
    }
}