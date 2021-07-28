import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
{path:'', component: InicioComponent},
{path:'sobre', component: SobreComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
