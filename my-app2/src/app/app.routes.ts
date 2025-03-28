import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouteGuardService } from './services/route-guard.service';
import { GridComponent } from './grid/grid.component';

export const routes: Routes = [
    //route configuration
    { path: '', component: HomeComponent, canActivate: [RouteGuardService] },         //<your-domain>/
    { path: 'login', component: LoginComponent },       ////<your-domain>/login
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NotFoundComponent },
];
