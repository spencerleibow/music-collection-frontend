import { Component, OnInit } from '@angular/core';
import { Album } from '../../classes/Album';
import { AlbumsService } from '../../services/albums.service'; 


@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
  providers: [AlbumsService]
})
export class AlbumListComponent implements OnInit {

  albums: Array<Album>;

  constructor(private albumsService: AlbumsService) { }

  getAlbums(): void {
    this.albumsService.getAlbums()
      .subscribe(resultArray => this.albums = resultArray,
      			error => console.log("ERROR: " + error))
  }

  ngOnInit() {
    console.log("albums component init");
  	this.getAlbums();
  }


}
