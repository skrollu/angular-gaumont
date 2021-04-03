import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './components/movies/movies-grid/movies-grid.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { PageNotFoundComponent } from './components/error/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login/login.component';
import { RegisterComponent } from './components/login/register/register.component';
import { CinemaMaapComponent } from './components/cinema/cinema-maap/cinema-maap.component';
import { TestComponent } from './components/test/test/test.component';
import { Test2Component } from './components/test/test2/test2.component';
import { AccountViewComponent } from './components/account/account-view/account-view.component'

import { 
  AuthGuardService as AuthGuard 
} from './services/login/auth-guard.service';

const routes: Routes = [
    { path: '', component: MovieComponent },
    { path: 'account', component: AccountViewComponent, canActivate: [AuthGuard] },
    { path: 'cinema', component: CinemaMaapComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'movie/:id', component: MovieDetailsComponent },
    { path: 'test', component: TestComponent },
    { path: 'test2', component: Test2Component },
    { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }