import { Component, OnInit } from '@angular/core';
import { QuizService } from '../service/quiz.service';
import { Test } from '../service/test';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  myObj: any;
  arrayTest: Array<Test> = [];
  constructor(private quizService: QuizService) { }

  summary$ = this.quizService.summaryAction$;

  ngOnInit(): void {
    this.quizService.summarySelected(true);
    this.myObj = this.quizService.test;
    this.arrayTest = JSON.parse(localStorage.getItem('testSubs'))
  }

  changeState(state:boolean) {
    this.quizService.summarySelected(false);
  }

  quizStateChange() {
    this.quizService.quizSelected(0);
  }
  
}
