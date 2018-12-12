import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  searchResults: any[] = [];

  constructor(public _ps: PeliculasService) { }

  ngOnInit() {
  }

  searchMovie(text: string) {
    if (text) {
      this._ps.searchMovie(text).subscribe( data => {
        this.searchResults = data;
        console.log(data);
      });
    } else {
      this.searchResults = [];
    }
  }
}
