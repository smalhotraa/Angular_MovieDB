import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {HomeviewComponent} from './homeview/homeview.component';
import {MoviedetailComponent} from './moviedetail/moviedetail.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeviewComponent },
  { path: 'popular', component: HomeviewComponent },
  { path: 'now_playing', component: HomeviewComponent },
  { path: 'upcoming', component: HomeviewComponent },
  { path: 'top_rated', component: HomeviewComponent },
  { path: 'movie/:id', component: MoviedetailComponent },
  { path: 'persons', loadChildren: './persons/persons.module#PersonsModule' },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
