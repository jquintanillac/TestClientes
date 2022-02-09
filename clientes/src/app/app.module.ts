import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Modulos
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { ListClientesComponent } from './Components/list-clientes/list-clientes.component';
import { CreateClientesComponent } from './Components/create-clientes/create-clientes.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ListClientesComponent,
    CreateClientesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
