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
import { CAMERA_TOKEN } from '@pokemon-service/camera.service';
import { DialogComponent } from './components/dialog/dialog.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    CardComponent,
    PokemonDetailComponent,
    CameraButtonComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [{provide: CAMERA_TOKEN, useValue: {getPicture: () => { alert('Camera')}}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
  