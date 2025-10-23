import { Routes } from '@angular/router';
import { Login } from './components/login/login';

export const routes: Routes = [
    {path: "home", component: Login},
    {path: "login", component: Login},
    {path: "", pathMatch: 'full', redirectTo: "login"}
];
