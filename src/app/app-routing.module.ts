import { ListaLivrosComponent } from './views/lista-livros/lista-livros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComentarioComponent } from './views/modal-livro/listar-comentario/listar-comentario.component';
import { ComentarioComponent } from './views/modal-livro/comentario/comentario.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'lista-livros',
    pathMatch: 'full'
  },
  {
    path: 'lista-livros',
    component: ListaLivrosComponent
  },
  {
    path: 'criarPensamento',
    component: ListarComentarioComponent
  },
  {
    path: 'ComentarioComponent',
    component: ComentarioComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
