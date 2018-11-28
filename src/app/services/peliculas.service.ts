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

  getNowPlaying() {
    const url = `${this.urlMoviedb}/movie/now_playing?api_key=${this.apikey}&language=en-US&results=6&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .pipe(map(resp => resp.json()));
  }

  getPopulars() {
    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .pipe(map(resp => resp.json()));
  }

  searchMovie( texto: string ) {
    const url =
      `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
      .pipe(map( res => res.json()));
  }
}
