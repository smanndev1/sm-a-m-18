import { Component, ViewChild, afterNextRender, inject, Injector, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormArray} from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, MatInputModule, ReactiveFormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
 
  formGroup = this.fb.group({});

  letters = [{key: 'position_1', value: 'e'}, {key: 'position_1', value: 'r'}, {key: 'position_2', value: 't'} , {key: 'position_3', value: ''}, {key: 'position_4', value: 'e'} ]

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createSpaces();
  }

 
  createSpaces() {
    this.letters.forEach((element: any, index: number)  => {
      this.formGroup.addControl('position_'+ (index + 1), new FormControl('10'))
    });
  }


 checkAnswer() {
  

}
}