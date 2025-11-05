import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from '../app.routing';
import { appRoutingProvider } from '../app.routing';

import { App } from './app';
import { HomeComponent } from '../components/home.component/home.component';
import { CineComponent } from '../components/cine.component/cine.component';
import { MusicaComponent } from '../components/musica.component/musica.component';
import { MenuComponent } from '../components/menu.component/menu.component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    CineComponent,
    MusicaComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }
