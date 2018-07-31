import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  loginUser(){
    event.preventDefault();
    console.log(this.username);
    console.log(this.password);

    this.auth.getUserDetails(this.username, this.password);
  }
}
