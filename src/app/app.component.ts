import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, MatInputModule, ReactiveFormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
 
  formGroup = this.fb.group({});
  formValues: any;
  numberOfCharacters: number = 0;

  word = 'horse'
  inputMapping = [{key: 'position_1', value: 'h'}, {key: 'position_2', value: 'o'}, {key: 'position_3', value: 'r'} , {key: 'position_4', value: ''}, {key: 'position_5', value: 'e'}]

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.formGroup.valueChanges.subscribe(value => {
     this.formValues = value;
       console.log(this.isAnswerCorrect())
    })

    this.numberOfCharacters = this.inputMapping.length;
    this.createControls();
  }

  createControls() {
    this.inputMapping.forEach((element: any, index: number)  => {
      this.formGroup.addControl('position_'+ (index + 1), new FormControl(element.value))
    });
  }

 isAnswerCorrect(): boolean {
     var userAnswer: string[] = [];

     this.inputMapping.forEach((x: any)=> {
      const userCharacter = this.formValues[x.key];
      userAnswer.push(userCharacter);
     })

     if(userAnswer.toString().replaceAll(',', '') !== this.word){
      return false;
    }

     return true;
  }
}