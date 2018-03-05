import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ArtistComponent } from './components/artist/artist.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { ArtistsService } from './services/artists.service';

@NgModule({
  imports: [CommonModule, HttpModule],
  exports: [ArtistListComponent],
  declarations: [ArtistComponent, ArtistListComponent],
  providers: [ArtistsService]
})
export class ArtistsModule { }
