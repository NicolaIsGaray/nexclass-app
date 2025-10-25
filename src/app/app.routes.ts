import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Home } from './components/home/home/home';

export const routes: Routes = [
    {path: "home", component: Home},
    {path: "login", component: Login},
    {path: "", pathMatch: 'full', redirectTo: "home"},
    {path: "register", component:Register}
];
