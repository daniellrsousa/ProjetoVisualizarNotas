// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ErroLoginComponent } from './pages/erro-login/erro-login.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'erro', component: ErroLoginComponent },
  { path: '**', redirectTo: '' } // fallback
];
