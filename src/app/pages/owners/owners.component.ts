import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoPageAction, PoPageModule, PoTableColumn, PoTableModule } from '@po-ui/ng-components'
import { Owners } from './shared/interfaces/owners.interface';

@Component({
  selector: 'app-owners',
  imports: [ PoPageModule, PoTableModule ],
  templateUrl: './owners.component.html',
  styleUrl: './owners.component.css'
})
export class OwnersComponent implements OnInit {
  actions:Array<PoPageAction> = [
    { label: 'Novo'}
  ]

  breadcrumb:PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/'},
      { label: 'Tutores'}
    ]
  }

  columns:Array<PoTableColumn> = []

  owners: Owners = {
    items: [],
    hasNext: false,
    remainingRecords: 0
  }

  constructor() { }

  ngOnInit():void { 
    this.setColumns()
    this.getOwners()
  }

  setColumns():void {
    this.columns = [
      { property: 'id', label: 'Código'},
      { property: 'name', label: 'Nome'},
      { property: 'rg', label: 'RG', visible: false },
      { property: 'cpf', label: 'CPF'},
      { property: 'email', label: 'E-mail' },
      { property: 'tel1', label: 'Telefone 1' },
      { property: 'tel2', label: 'Telefone 2', visible: false },
      { property: 'pets', label: 'Pets', type: 'icon', icons: [
        { value: 'view-pet', icon: 'an an-eye', tooltip: 'Visualizar pets' },
        { value: 'include-pet', icon: 'an an-plus-circle', tooltip: 'Incluir pets' }
      ] }
    ]
  }

  getOwners():void {
    this.owners.items = [
      { id: '0000001', name: 'Teste', rg: '123456', cpf: '123456', email: 'teste@email', tel1: '123456', tel2: '123456'}
    ]
  }
  
}