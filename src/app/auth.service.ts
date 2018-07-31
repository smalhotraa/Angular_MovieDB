import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitHubUser } from './Models/git-hub-user';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(username, password){

    this.http.get<GitHubUser>("https://api.github.com/users/" + username)
        .subscribe(data =>{
            console.log(data.login);
            console.log(data.avatar_url);
            console.log(data.name);
        },(err: HttpErrorResponse) => {
            if(err.error instanceof Error){

              console.log('Client-side error occured');

            }else{

                console.log('Server-side error');
            }
        });
  }
}
