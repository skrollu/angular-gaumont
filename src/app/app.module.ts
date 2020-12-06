import { BrowserModule } from '@angular/platform-browser';
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MovieComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
