import { Component, OnInit } from '@angular/core';
import { QuizzesService } from '../quizzes.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrl: './quizzes.component.scss'
})
export class QuizzesComponent implements OnInit{
  public quizzes: any;
  
  public topics: any[] = [
    {
      label: "Front-end",
      url: "/quizzes/front-end"
    },
    {
      label: "Back-end",
      url: "/quizzes/back-end"
    },
    {
      label: "QA",
      url: "/quizzes/qa"
    },
  ]

  constructor(
    public quizzesService:QuizzesService
  ) {}

  ngOnInit(): void {
    console.log( this.quizzesService.currentTopic)

    if(!this.quizzesService.currentTopic){
      this.quizzesService.getQuizzes().subscribe(data => {
       this.quizzes = data;
      });
    }else if(this.quizzesService.currentTopic === "front-end") {
      this.quizzesService.getQuizzesFront().subscribe(data => {
        this.quizzes = data;
       });
    }else if(this.quizzesService.currentTopic === "back-end") {
      this.quizzesService.getQuizzesBack().subscribe(data => {
        this.quizzes = data;
      });
    }else if(this.quizzesService.currentTopic === "qa"){
      this.quizzesService.getQuizzesQA().subscribe(data => {
        this.quizzes = data;
      });
    }
  }

  public onClickHandler(link:HTMLElement) {
    switch(link.textContent.trim().toLowerCase()) {
      case "front-end": 
        this.quizzesService.getQuizzesFront();
        break;
      case "back-end": 
        this.quizzesService.getQuizzesBack();
        break;
      case "qa": 
        this.quizzesService.getQuizzesQA();
        break;

      default: 
        break;
    }

    console.log(this.quizzes)
  }
}
