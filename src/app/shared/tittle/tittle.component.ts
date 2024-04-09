import { Component } from '@angular/core';
import { IMenu, MenuService } from '../../services/menu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tittle',

  templateUrl: './tittle.component.html',
  styleUrl: './tittle.component.css',
})
export class TittleComponent {
  path: IMenu;

  constructor(
    private menuService: MenuService,
    private activatedRoute: ActivatedRoute
  ) {
    const currentPath =  '/' + activatedRoute.snapshot.pathFromRoot[1].routeConfig?.path;
    this.path = menuService.getMenubyUrl(currentPath);
  }
}
