import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { OverviewComponent } from 'src/app/components/overview/overview.component';
// import { BasePageComponent } from '../base-page/base-page.component';
import { MainPageComponent } from './main-page.component';

const routes: Routes = [
  {
    path: '', component: MainPageComponent,
    children: [
        { path: 'dashboard', component: DashboardComponent}, 
        {path: 'overview', component: OverviewComponent}, 

        // children: [
        //   { path: 'comments', loadChildren: './../comments/comments.module#CommentsModule' }
        // ]
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
