import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuizService } from '../service/quiz.service';
import { Test } from '../service/test';

@Component({
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  nameForm: FormGroup;
  typesOfPlayers: string[] = ['Sachin Tendulkar', 'Virat Kohli', 'Adam Gilchrist', 'Jacques Kallis'];
  typesOfColors: string[] = ['White','Yellow','Orange','Green'];
  testObj : Test = {
    name: null,
    ques1:null,
    ques2:null,
    date:null
  };

  
  quizSelection$ = this.quizService.quizAction$;

  constructor(private quizService: QuizService,
              private fb: FormBuilder ) { }

  ngOnInit(): void {
    if( ! localStorage.getItem('testSubs')) {
      let test = [];
      localStorage.setItem( 'testSubs', JSON.stringify(test) );
    }

    this.nameForm = this.fb.group({
      enterName: ['',[Validators.required, Validators.minLength(4)]],
    }) 
  }

  nameState(state: number) {
    this.testObj.name = this.nameForm.get('enterName').value;
    this.quizService.quizSelected(state);
  }

  ques1State(value: string,state:number) {
    this.testObj.ques1 = value;
    this.quizService.quizSelected(state);
  }


  submitTest(value:Array<any>) {
    let tempDate = new Date().toLocaleString();
    this.testObj.ques2 = value.map( o => o.value);
    this.testObj.date = tempDate;
    this.quizService.test = this.testObj;
    let arraySubs = JSON.parse(localStorage.getItem('testSubs'));
    arraySubs.push(this.testObj);
    localStorage.setItem( 'testSubs', JSON.stringify(arraySubs) );
  }

  
}
