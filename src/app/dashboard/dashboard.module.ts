import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CoinsComponent } from './coins/coins.component';
import { IcoComponent } from './ico/ico.component';

import { RouterModule} from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [DashboardComponent, SidebarComponent, CoinsComponent, IcoComponent]
})
export class DashboardModule { }
