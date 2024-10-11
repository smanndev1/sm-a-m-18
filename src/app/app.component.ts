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
 
  public formGroup = this.fb.group({});
  public formValues: any;
  public numberOfCharacters: number = 0;
  public inputMapping: any = []

  word = 'horse'
 
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.formGroup.valueChanges.subscribe(value => {
     this.formValues = value;
       console.log(this.isAnswerCorrect())
    })

    this.numberOfCharacters = this.inputMapping.length;
    this.createInputMappings();
    this.createControls();
  }

  createInputMappings() {
    
    const wordArray = this.word.split('');
    wordArray.forEach((letter: any, index: number) => {
         this.inputMapping.push({key: 'position_' + index , letter});
    });

  }

  createControls() {
    this.inputMapping.forEach((element: any, index: number)  => {
      this.formGroup.addControl(element.key, new FormControl(element.value))
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