import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import "rxjs/Rx";

import { Album } from '../classes/Album';

@Injectable()
export class AlbumsService {

  private readonly URL = "http://localhost:3000/albums"

  constructor(private http: Http) { }
  
  getAlbums(): Observable<Album[]> {
	return this.http.get(this.URL)
		.map((response: Response) => {return response.json();})
		.catch(this.handleError);
  }
  
  getAlbumsByArtist(artist_id: number): Observable<Album[]> {
	return this.http.get(this.URL + "?artist_id=" + artist_id)
		.map((response: Response) => {return response.json();})
		.catch(this.handleError);
  }
  
  private handleError(error: Response) {
      return Observable.throw(error.statusText);
   }
}
