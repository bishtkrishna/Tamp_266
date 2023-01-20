import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { BasePageComponent } from '../base-page/base-page.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'

@NgModule({
  declarations: [
    MainPageComponent,
    // BasePageComponent,
    HeaderComponent,
    SidebarComponent,
    
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MatSlideToggleModule
  ]
})
export class MainPageModule { }
