import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {
  public currentTopic:string;

  constructor(
    public http:HttpClient
  ) { }

  // ! dummy example of query, but it isn't necessary to do for us
  public getQuizzes():Observable<any> {
    return this.http.get("http://localhost:3000/quizzes")
    .pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  public getQuizzesBack():Observable<any> {
    this.currentTopic = "back-end";

    return this.http.get("http://localhost:3000/quizzes/back-end")
    .pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );

  }
  public getQuizzesFront():Observable<any> {
    this.currentTopic = "front-end";

    return this.http.get("http://localhost:3000/quizzes/front-end")
    .pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    )
  }
  public getQuizzesQA():Observable<any> {
    this.currentTopic = "qa";
    
    return this.http.get("http://localhost:3000/quizzes/qa")
    .pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    )
  }
}
