import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import "rxjs/Rx";

import { Artist } from '../classes/Artist';


@Injectable()
export class ArtistsService {

  private readonly URL = "http://localhost:3000"
  
  constructor(private http: Http) { }
  
  getArtists(): Observable<Artist[]> {
	return this.http.get(this.URL)
		.map((response: Response) => {return response.json();})
		.catch(this.handleError);
  }
  
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
   }
   
 }
