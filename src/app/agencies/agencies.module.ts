import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';
import { AgenciesRoutingModule } from './agencies-routing.module';
import { AgencyService } from './services/agency.service';



@NgModule({
  declarations: [PageListComponent],
  imports: [
    CommonModule,SharedModule,AgenciesRoutingModule
  ]
})
export class AgenciesModule { }
