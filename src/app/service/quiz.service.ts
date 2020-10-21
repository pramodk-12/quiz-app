import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Test } from './test';

@Injectable({
    providedIn: 'root'
})

export class QuizService {
    tempTest: any;

    get test() {
        return this.tempTest;
    }

    set test(value: Test) {
        this.tempTest = value;
    }

    
    private summarySubject = new BehaviorSubject<Boolean>(true);
    summaryAction$ =  this.summarySubject.asObservable();

    private quizSubject = new BehaviorSubject<Array<boolean>>([true,false,false]);
    quizAction$ =  this.quizSubject.asObservable();

    
    quizSelected(state:number) {
        let stateArray = [false,false,false];
        stateArray[state] = true;
        this.quizSubject.next(stateArray);
    }

    summarySelected(value:boolean) {
        this.summarySubject.next(value);
    }
  

}

