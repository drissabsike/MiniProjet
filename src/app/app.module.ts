import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './composents/nav-bar/nav-bar.component';
import { ConvertisseurComponent } from './composents/convertisseur/convertisseur.component';
import { QuizComponent } from './composents/quiz/quiz.component';
import { HomeComponent } from './composents/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ConvertisseurComponent,
    QuizComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
