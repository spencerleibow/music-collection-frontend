import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../../classes/Artist';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  @Input()
  artist = Artist;

  constructor() { }

  ngOnInit() {
  }

}
