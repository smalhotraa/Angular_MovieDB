import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsRoutingModule } from './persons-routing.module';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { MatToolbarModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';



@NgModule({
  imports: [
    CommonModule,
    PersonsRoutingModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatProgressBarModule,
  ],
  declarations: [PersonsListComponent]
})
export class PersonsModule { }
