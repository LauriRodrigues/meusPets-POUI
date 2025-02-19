import { Component } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-pets',
  imports: [ PoPageModule ],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css'
})
export class PetsComponent {

}
