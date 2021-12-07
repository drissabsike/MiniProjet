import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ConvertisseurComponent } from './components/convertisseur/convertisseur.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponent } from './components/home/home.component';
import { QuestionComponent } from './components/quiz/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ConvertisseurComponent,
    QuizComponent,
    HomeComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
