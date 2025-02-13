import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'

import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly menus: Array<PoMenuItem> = [
    { link: '/', label: 'Home', icon: 'an an-house'},
    { link: '/', label: 'Tutores', icon: 'an an-user-circle'},
    { link: '/', label: 'Pets', icon: 'an an-dog'},
    { link: '/', label: 'Sair', icon: 'an an-sign-out'},
  ];

}
