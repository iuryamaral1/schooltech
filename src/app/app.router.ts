
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';

export const routes: Routes = [{
    path: '',
    component: LoginComponent
}, {
    path: 'home',
    component: HomeComponent
}];