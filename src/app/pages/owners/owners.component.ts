import { Component } from '@angular/core';
import { PoBreadcrumb, PoPageAction, PoPageModule, PoTableModule } from '@po-ui/ng-components'

@Component({
  selector: 'app-owners',
  imports: [ PoPageModule, PoTableModule ],
  templateUrl: './owners.component.html',
  styleUrl: './owners.component.css'
})
export class OwnersComponent {
  actions:Array<PoPageAction> = [
    { label: 'Novo'}
  ]

  breadcrumb:PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/'},
      { label: 'Tutores'}
    ]
  }
    
  
}