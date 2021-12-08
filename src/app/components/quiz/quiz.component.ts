import {Component, ElementRef, HostListener, Inject, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  @ViewChild('name')
  namekey!: ElementRef;

  submitted:boolean=false;
  msg: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  startQuiz(){
    localStorage.setItem("name", this.namekey.nativeElement.value);
    if(this.namekey.nativeElement.value==""){
      this.msg = "Le Nom est Vide !";
    }else {
    window.location.href = "/question";
    }
  }

}
