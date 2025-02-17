import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoNotificationService, PoPageAction, PoPageModule, PoTableColumn, PoTableModule } from '@po-ui/ng-components'
import { Owners } from './shared/interfaces/owners.interface';
import { OwnersService } from './shared/services/owners.service';

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

  isLoading = false

  constructor(
    private ownersService:OwnersService,
    private poNotificationService:PoNotificationService
  ) { }

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
    this.isLoading = true
    this.ownersService.get().subscribe({
      next:(owners:Owners) => { 
        this.owners.items = owners.items 
        this.isLoading = false 
      },
      
      error:(error:any) => {
        this.poNotificationService.error('Falha ao retornar tutores')
        this.isLoading = false
      }
    })
  }
  
}