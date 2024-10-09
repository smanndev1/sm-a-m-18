import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, MatInputModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
   
 letters = ['a', 'b', 'c'  ]


}
