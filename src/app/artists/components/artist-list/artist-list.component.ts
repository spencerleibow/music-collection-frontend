import { Component, OnInit } from '@angular/core';
import { Artist } from '../../classes/Artist';
import { ArtistsService } from '../../services/artists.service'; 


@Component({
  selector: 'app-artist-list', 
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css'],
  providers: [ArtistsService]
})
export class ArtistListComponent implements OnInit {

  artists: Array<Artist>;

  constructor(private artistsService: ArtistsService) { console.log("artist component constructor");}
  
  getArtists(): void {
    this.artistsService.getArtists()
      .subscribe(resultArray => this.artists = resultArray,
      			error => console.log("ERROR: " + error))
  }

  ngOnInit() {
    console.log("artist component init");
  	this.getArtists();
  }

}
