import { Component, EventEmitter, Output, OutputEmitterRef } from '@angular/core';
import { IMenu, MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',

  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  @Output() onToggleExpanded:EventEmitter<boolean>=new EventEmitter<boolean>();
  expanded=true;
  listMenu: IMenu[];
  constructor(private menuService: MenuService) {
    this.listMenu = this.menuService.getMenu();
  }

  toggleExpanded(){
    this.expanded=!this.expanded;
    this.onToggleExpanded.emit(this.expanded)
  }
}
