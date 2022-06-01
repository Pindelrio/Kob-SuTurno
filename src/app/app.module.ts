import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRepertorieComponent } from './views/create-repertorie/create-repertorie.component';
import { ListRepertorieComponent } from './views/list-repertorie/list-repertorie.component';
import { NextSongComponent } from './views/next-song/next-song.component';
import { DetailRepertorieComponent } from './views/detail-repertorie/detail-repertorie.component';
import { ConfigComponent } from './views/config/config.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRepertorieComponent,
    ListRepertorieComponent,
    NextSongComponent,
    DetailRepertorieComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
