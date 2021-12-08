import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConvertisseurComponent} from "./components/convertisseur/convertisseur.component";
import {QuizComponent} from "./components/quiz/quiz.component";
import {QuestionComponent} from "./components/quiz/question/question.component";


//Configuration des URLs
const routes: Routes = [
  {path: "", redirectTo:"convertisseur", pathMatch: "full"},
  {path: "convertisseur", component:ConvertisseurComponent},
  {path: "question", component:QuestionComponent},
  {path: "quiz", component:QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
