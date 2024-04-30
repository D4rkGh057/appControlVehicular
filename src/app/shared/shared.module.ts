import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { TittleComponent } from './tittle/tittle.component';
import { PruebaComponent } from './prueba/prueba.component';
import { ContainerComponent } from './container/container.component';
import { TableComponent } from './table/table.component';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { FlexModule } from '@angular/flex-layout';
import {NgScrollbarModule} from 'ngx-scrollbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [HeaderComponent,PaginatorComponent,TittleComponent, PruebaComponent, ContainerComponent, TableComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    FlexModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports:[HeaderComponent,PaginatorComponent,TittleComponent, PruebaComponent, ContainerComponent, TableComponent,NgScrollbarModule,FlexModule,MatIconModule,MatButtonModule,MatTableModule]
})
export class SharedModule { }
