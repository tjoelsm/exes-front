import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import {ConfigService} from '../app/config/config.service'
import {LoginService} from '../app/core/login/login.service';

const appInt = (config: ConfigService) => {
  return () =>{
    return config.load('config.json');
  }
}

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ConfigService, {
      provide: APP_INITIALIZER,
      useFactory: appInt,
      multi: true,
      deps: [ConfigService]
    },
    LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
