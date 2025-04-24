// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ErroLoginComponent } from './components/erro-login/erro-login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { GerenciamentoNotasComponent } from './pages/gerenciamento-notas/gerenciamento-notas.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'erro', component: ErroLoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'gerenciamento-notas', component: GerenciamentoNotasComponent },
  { path: '**', component: HomeComponent } // fallback
];
