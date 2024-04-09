import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { TittleComponent } from './tittle/tittle.component';
import { PruebaComponent } from './prueba/prueba.component';



@NgModule({
  declarations: [HeaderComponent,PaginatorComponent,TittleComponent, PruebaComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,PaginatorComponent,TittleComponent, PruebaComponent]
})
export class SharedModule { }
