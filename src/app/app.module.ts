import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreComponent } from './sobre/sobre.component';
import { InicioComponent } from './inicio/inicio.component';
import { BarrauserComponent } from './barrauser/barrauser.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LogarComponent } from './logar/logar.component';
import { FormsModule } from '@angular/forms';
import { FeedComponent } from './feed/feed.component';
import { TemaComponent } from './tema/tema.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditarUsuarioComponent } from './editar/editar-usuario/editar-usuario.component'
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    SobreComponent,
    InicioComponent,
    BarrauserComponent,
    CadastrarComponent,
    LogarComponent,
    FeedComponent,
    TemaComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
