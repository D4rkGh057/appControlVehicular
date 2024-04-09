import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { PageIndexComponent } from './page-index/page-index.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [HeaderComponent,LoginComponent,MenuComponent,PageLoginComponent, PageIndexComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule
  ]
  ,exports:[PageLoginComponent, PageIndexComponent]
})
export class CoreModule { }
