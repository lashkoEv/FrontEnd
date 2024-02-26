import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

import { QuizzesService } from '../services/quizzes.service';

import { changeStateByKey } from '../utils/changeState'

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrl: './quizzes.component.scss'
})
export class QuizzesComponent implements OnInit{
  public topics = this.quizzesService.topics;
  public quizzes: any;
  constructor(
    public quizzesService:QuizzesService,
    public headerService:HeaderService
  ) {
  }

  ngOnInit(): void {
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
        this.topics = changeStateByKey(this.topics, link, "isActive", true);
        this.quizzesService.getQuizzesFront();

        break;
      case "back-end": 
        this.topics = changeStateByKey(this.topics, link, "isActive", true);
        this.quizzesService.getQuizzesBack();
        break;
      case "qa": 
      this.topics = changeStateByKey(this.topics, link, "isActive", true);
        this.quizzesService.getQuizzesQA();
        break;

      default: 
        break;
    }
  }
}
