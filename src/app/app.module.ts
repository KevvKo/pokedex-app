import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { CardComponent } from './components/card/card.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { CameraButtonComponent } from './camera-button/camera-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    CardComponent,
    PokemonDetailComponent,
    CameraButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
