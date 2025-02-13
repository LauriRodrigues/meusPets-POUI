import { Component } from '@angular/core';
import { PoToolbarModule, } from '@po-ui/ng-components';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [ PoToolbarModule ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

}
