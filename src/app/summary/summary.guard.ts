import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { QuizService } from '../service/quiz.service';

@Injectable({
  providedIn: 'root'
})
export class SummaryGuard implements CanActivate {

  constructor( private quizService:QuizService,
               private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.quizService.tempTest ) {
        return true;
      }
      else {
        this.router.navigate(['/home']);
        return false;
      }
  }
  
}
