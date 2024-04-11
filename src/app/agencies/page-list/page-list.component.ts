import { Component } from '@angular/core';
import { MetaDataColumn } from '../../shared/interfaces/metacolumn.interface';
import { environment } from '../../../environments/environment.development';

export interface IAgency {
  id: string;
  name: string;
  address: string;
}

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.css',
})
export class PageListComponent {
  data: IAgency[] = [
    {
      id: '1',
      name: 'Agencia Ambato',
      address: 'Av. 12 de Noviembre y Bolivar',
    },
    {
      id: '2',
      name: 'Agencia Quito',
      address: 'Av. 10 de Agosto y Naciones Unidas',
    },
    {
      id: '3',
      name: 'Agencia Latacunga',
      address: 'Av. 5 de Junio y Bolivar',
    },
    {
      id: '4',
      name: 'Agencia Riobamba',
      address: 'Av. 10 de Agosto y 5 de Junio',
    },
    {
      id: '5',
      name: 'Agencia Guayaquil',
      address: 'Av. 9 de Octubre y Malecon',
    },
    {
      id: '1',
      name: 'Agencia Ambato',
      address: 'Av. 12 de Noviembre y Bolivar',
    },
    {
      id: '2',
      name: 'Agencia Quito',
      address: 'Av. 10 de Agosto y Naciones Unidas',
    },
    {
      id: '3',
      name: 'Agencia Latacunga',
      address: 'Av. 5 de Junio y Bolivar',
    },
    {
      id: '4',
      name: 'Agencia Riobamba',
      address: 'Av. 10 de Agosto y 5 de Junio',
    },
    {
      id: '5',
      name: 'Agencia Guayaquil',
      address: 'Av. 9 de Octubre y Malecon',
    },
    {
      id: '1',
      name: 'Agencia Ambato',
      address: 'Av. 12 de Noviembre y Bolivar',
    },
    {
      id: '2',
      name: 'Agencia Quito',
      address: 'Av. 10 de Agosto y Naciones Unidas',
    },
    {
      id: '3',
      name: 'Agencia Latacunga',
      address: 'Av. 5 de Junio y Bolivar',
    },
    {
      id: '4',
      name: 'Agencia Riobamba',
      address: 'Av. 10 de Agosto y 5 de Junio',
    },
    {
      id: '5',
      name: 'Agencia Guayaquil',
      address: 'Av. 9 de Octubre y Malecon',
    },
  ];
  metaDataColumns: MetaDataColumn[] = [
    { field: 'id', title: 'CODIGO' },
    { field: 'name', title: 'AGENCIA' },
    { field: 'address', title: 'DIRECCION' },
  ];

  records: IAgency[] = [];
  totalRecords: number = 0;

  constructor() {
    this.loadAgencies();
  }
  loadAgencies() {
    this.records = this.data;
    this.totalRecords = this.records.length;
    this.changePage(0)
  }
  changePage(page: number) {
    const pageSize= environment.PAGE_SIZE;
    const skip=pageSize*page
    this.data=this.records.slice(skip,skip+pageSize)
  }
}
