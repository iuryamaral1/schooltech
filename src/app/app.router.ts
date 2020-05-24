import { AuthGuard } from './_helpers/auth.guard';

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [{
    path: 'login',
    component: LoginComponent
}, {
    path: 'register',
    component: RegisterComponent
}, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canActivate: [AuthGuard]
}, {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [{
        path: 'customers',
        component: CustomerComponent
    }]
}, {
    path: '**', redirectTo: '',
    pathMatch: 'full'
}]