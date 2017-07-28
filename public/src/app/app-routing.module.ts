import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { PollComponent } from './poll/poll.component';

const routes: Routes = [
  { path: '', pathMatch: "full", component: LandingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'poll/:itemId', component: PollComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
