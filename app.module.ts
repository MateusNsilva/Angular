import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FormComponent } from './form/form.component';
import { BannerComponent } from './banner/banner.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
import { ListagemDePostsComponent } from './listagem-de-posts/listagem-de-posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CepService } from './form/cep.service';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormComponent,
    BannerComponent,
    CardsComponent,
    FooterComponent,
    HomeComponent,
    ContatoComponent,
    SobreComponent,
    ListagemDePostsComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    CepService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
