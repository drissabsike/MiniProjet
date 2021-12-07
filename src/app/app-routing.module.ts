import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConvertisseurComponent} from "./components/convertisseur/convertisseur.component";
import {QuizComponent} from "./components/quiz/quiz.component";

const routes: Routes = [
  {path: "convertisseur", component:ConvertisseurComponent},
  {path: "quiz", component:QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
