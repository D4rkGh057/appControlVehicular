import { Injectable } from '@angular/core';

export interface IMenu {
  tittle: string;
  url: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private listMenu: IMenu[] = [
    { tittle: 'Agencias', url: '/agencias', icon: '/assets/icons/channel.svg' },
    { tittle: 'Canales', url: '/canales', icon: '/assets/icons/channel.svg' },
    { tittle: 'Clientes', url: '/clientes', icon: '/assets/icons/clients.svg' },
    { tittle: 'Mecanicos', url: '/mecanicos', icon: '/assets/icons/mechanic.svg' },
    { tittle: 'Mantenimientos', url: '/mantenimiento', icon: '/assets/icons/maintenance.svg' },
    { tittle: 'Seguimiento', url: '/seguimiento', icon: '/assets/icons/follow-up.svg' },
    { tittle: 'Tipo de Mantenimiento', url: '/tipo-mantenimiento', icon: '/assets/icons/type-maintenance.svg' },
  ];

  constructor() { }

  getMenu(): IMenu[] {
    return [...this.listMenu];
  }

  getMenubyUrl(url: string): IMenu {
    return this.listMenu.find((menu) => menu.url.toLowerCase() === url.toLowerCase()) as IMenu;
  }
}
