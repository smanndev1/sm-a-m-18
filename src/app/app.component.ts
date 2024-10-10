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
 
  formGroup = this.fb.group({

  });

  word = ['a', 'b', 'c' , '', 'p' ]

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createSpaces();
  }

 
  createSpaces() {
    this.word.forEach((element: String, index: number)  => {
      this.formGroup.addControl('control'+ (index + 1), new FormControl('10'))
    });
  }


 checkAnswer() {
  

}
}