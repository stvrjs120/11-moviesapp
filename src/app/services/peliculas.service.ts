import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey = 'd5f9a90016380fcb01f4fd6085179fa8';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor(private jsonp: Jsonp) { }

  getPopulares() {
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).pipe(map(resp => resp.json()));
  }
}
