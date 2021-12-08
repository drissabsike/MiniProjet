import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ConvertisseurComponent } from './components/convertisseur/convertisseur.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponent } from './components/home/home.component';
import { QuestionComponent } from './components/quiz/question/question.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import { ChangeBgDirective } from './change-bg.directive';
import {NoRightClickDirective} from "./components/no-right-click.directive";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ConvertisseurComponent,
    QuizComponent,
    HomeComponent,
    QuestionComponent,
    ChangeBgDirective,
    NoRightClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
