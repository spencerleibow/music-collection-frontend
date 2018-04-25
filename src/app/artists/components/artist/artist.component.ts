import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../../classes/Artist';
import {EmitterService} from 'app/common/services/emitter.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  @Input()
  artist: Artist;
  
  @Input()
  emitterId: string;
  
  private value = "artist.comp";

  constructor() { }

  ngOnInit() {
  }
  
  onClick() {
  	console.log("Artist clicked, emitting artist id " + this.artist.id);
  	EmitterService.get(this.emitterId).emit(this.artist.id);
  }

}
