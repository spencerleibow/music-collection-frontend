import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Album } from '../../classes/Album';
import { AlbumsService } from '../../services/albums.service';
import {EmitterService} from 'app/common/services/emitter.service';


@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
  providers: [AlbumsService]
})
export class AlbumListComponent implements OnInit, OnChanges {

  @Input()
  emitterId: string;

  albums: Array<Album>;

  constructor(private albumsService: AlbumsService) { }

  getAlbums(): void {
    this.albumsService.getAlbums()
      .subscribe(resultArray => this.albums = resultArray,
      			error => console.log("ERROR: " + error))
  }

  getAlbumsByArtist(artist_id: number): void {
    this.albumsService.getAlbumsByArtist(artist_id)
      .subscribe(resultArray => this.albums = resultArray,
      			error => console.log("ERROR: " + error))
  }

  ngOnInit() {
    console.log("albums component init");
  	this.getAlbums();
  }
  
   ngOnChanges() {
     EmitterService.get(this.emitterId).subscribe(value => this.getAlbumsByArtist(value));
  }


}
