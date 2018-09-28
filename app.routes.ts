import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { ListagemDePostsComponent } from './listagem-de-posts/listagem-de-posts.component';
import { SobreComponent } from './sobre/sobre.component';
import { FormComponent } from './form/form.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'prefix' },
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'listagem', component: ListagemDePostsComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'formularios', component: FormComponent },

];

export const routing = RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules });