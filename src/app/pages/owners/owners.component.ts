import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoNotificationService, PoPageAction, PoPageModule, PoTableColumn, PoTableModule, PoTagModule } from '@po-ui/ng-components'
import { Owners } from './shared/interfaces/owners.interface';
import { OwnersService } from './shared/services/owners.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owners',
  imports: [ PoPageModule, PoTableModule, PoTagModule ],
  templateUrl: './owners.component.html',
  styleUrl: './owners.component.css'
})
export class OwnersComponent implements OnInit {
  isLoading = false
  hasNextPage = false
  page = 1
  pageSize = 10
  columns:Array<PoTableColumn> = []
 
  actions:Array<PoPageAction> = [
    { label: 'Novo', action: this.goToFormOwner.bind(this)}
  ]

  breadcrumb:PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/'},
      { label: 'Tutores'}
    ]
  }

  owners: Owners = {
    items: [],
    hasNext: false,
    remainingRecords: 0
  }

  textRemainingRecords:string = ""
  totalOwners:number = 10

  constructor(
    private ownersService:OwnersService,
    private poNotificationService:PoNotificationService,
    private router: Router
  ) { }

  ngOnInit():void { 
    this.setColumns()
    this.getOwners(1, 10)
  }

  goToFormOwner():void {
    this.router.navigate(['tutores/novo'])
  }

  setColumns():void {
    this.columns = [
      { property: 'id', label: 'Código', type: 'link', action:(row:string) => this.goToFormEdit(row) },
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

  goToFormEdit(id:string):void {
    this.router.navigate(['tutores/editar', id])
  }

  getOwners(page: number, pageSize: number):void {
    this.isLoading = true
    this.ownersService.get(page, pageSize).subscribe({
      next:(owners:Owners) => this.onGetSuccess(owners),
      error:(error:any) => this.onGetError(error)
    })
  }

  onGetSuccess(owners:Owners):void {
    if(this.owners.items.length === 0) {
      this.owners.items = owners.items
    } else {
      this.owners.items = this.owners.items.concat(owners.items)
    }
    
    this.isLoading = false 
    this.hasNextPage = owners.hasNext
    this.totalOwners = this.owners.items.length;
    this.textRemainingRecords = `Mostrando ${this.totalOwners} de ${this.totalOwners+owners.remainingRecords}`
  }

  onGetError(error:any):void {
    this.poNotificationService.error('Falha ao retornar tutores')
    this.isLoading = false
  }
  
  showMoreItems():void {
    this.page +=1
    this.getOwners(this.page,10)
  }
}