import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { TittleComponent } from './tittle/tittle.component';
import { PruebaComponent } from './prueba/prueba.component';
import { ContainerComponent } from './container/container.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [HeaderComponent,PaginatorComponent,TittleComponent, PruebaComponent, ContainerComponent, TableComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports:[HeaderComponent,PaginatorComponent,TittleComponent, PruebaComponent, ContainerComponent, TableComponent]
})
export class SharedModule { }
