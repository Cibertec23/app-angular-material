import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-am-demo',
  templateUrl: './am-demo.component.html',
  styleUrls: ['./am-demo.component.css'],

})
export class AmDemoComponent {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}

interface Food {
  value: string;
  viewValue: string;
}
