import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumComponent } from './components/album/album.component';
import { AlbumsService } from './services/albums.service';

@NgModule({
  imports: [CommonModule, HttpModule],
  exports: [AlbumListComponent],
  declarations: [AlbumComponent, AlbumListComponent],
  providers: [AlbumsService]
})
export class AlbumsModule { }