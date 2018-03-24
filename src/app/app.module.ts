import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ArtistsModule } from './artists/artists.module';
import { AlbumsModule } from './albums/albums.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ArtistsModule,
    AlbumsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
