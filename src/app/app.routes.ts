// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ErroLoginComponent } from './components/erro-login/erro-login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { GerenciamentoNotasComponent } from './pages/gerenciamento-notas/gerenciamento-notas.component';
import { CadastroAlunoComponent } from './pages/cadastro-aluno/cadastro-aluno.component';
import { CadastroAlunoNotasComponent } from './pages/cadastro-aluno-notas/cadastro-aluno-notas.component';
import { EditarComponent } from './components/editar/editar.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'erro', component: ErroLoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'gerenciamento-notas', component: GerenciamentoNotasComponent },
  { path: 'cadastro-aluno', component: CadastroAlunoComponent },
  { path: 'cadastro-aluno-notas', component: CadastroAlunoNotasComponent },
  { path: 'editar', component: EditarComponent },
  { path: '**', component: HomeComponent } // fallback
];
