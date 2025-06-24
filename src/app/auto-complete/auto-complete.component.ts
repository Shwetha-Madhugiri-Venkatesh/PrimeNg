import { Component, inject, OnInit } from '@angular/core';
import { User } from '../Models/User';
import { HTTPServices } from '../Services/http_service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css'],
})
export class AutoCompleteComponent implements OnInit{
    users:User[]=[];
    suggestions;
    user_service = inject(HTTPServices);

    ngOnInit(){
        this.user_service.users_fetch().subscribe((res:User[])=>{
            this.users=res;
            console.log(this.users);
        })
    }

    auto_complete(event){
        this.suggestions=[];
        let search = event.query.toLowerCase();
        this.users.forEach((user)=>{
            if(user.fname.startsWith(search)){
                this.suggestions.push(user);
            }
        })
        console.log(this.suggestions);
    }
}
