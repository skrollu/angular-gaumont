import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { GraphQLModule } from './graphql.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MovieComponent } from './components/movies/movies-grid/movies-grid.component';
import { MovieCardComponent } from './components/movies/movie-card/movie-card.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { PageNotFoundComponent } from './components/error/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login/login.component';
import { RegisterComponent } from './components/login/register/register.component';
import { CinemaMaapComponent } from './components/cinema/cinema-maap/cinema-maap.component';
import { TestComponent } from './components/test/test/test.component';
import { Test2Component } from './components/test/test2/test2.component';
import { CinemaMaap2Component } from './components/cinema/cinema-maap2/cinema-maap2.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MovieComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    CinemaMaapComponent,
    TestComponent,
    Test2Component,
    CinemaMaap2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
