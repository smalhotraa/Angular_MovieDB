import { Component, OnInit } from '@angular/core';
import {FetchpersonslistService} from '../fetchpersonslist.service';
import {PersonsResponse} from '../PersonsResponse';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {

  personResponse: PersonsResponse;
  progressOn: boolean;
  constructor(private fetchPersons: FetchpersonslistService) { }

  ngOnInit() {
    this.progressOn = true;
    this.getPopularPersonsList();
  }

  getPopularPersonsList() {
    this.fetchPersons.getPersonsList().subscribe((personresponse) => {
      this.personResponse = personresponse;
      console.log('personssssss', this.personResponse);
      this.progressOn = false;
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {

          this.progressOn = false;
          console.log('Client-side error occured');
          console.log(err.message);

        } else {
          this.progressOn = false;
          console.log('Server-side error');
        }
      });
  }

}
