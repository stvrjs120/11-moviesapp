import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  searchResults: any[] = [];
  searchText: string;
  noResults: boolean;

  constructor(public _ps: PeliculasService,
              private _activatedRouter: ActivatedRoute,
              private _router: Router) {
    const pageBefore = localStorage.getItem('pageBefore');

    if (pageBefore === '/search') {
      this._activatedRouter.params.subscribe(parameters => {
        console.log(parameters);
        if (parameters['text']) {
          this.searchText = localStorage.getItem('searchText');

          this.searchMovie();
        }
      });
    }
  }

  ngOnInit() {
  }

  searchMovie() {
    if (this.searchText) {
      localStorage.setItem('searchText', this.searchText);
      this._ps.searchMovie(this.searchText).subscribe( data => {
        this.searchResults = data;
        this.noResults = (this.searchResults['results'].length === 0);
      });
    } else {
      this.searchResults = [];
    }
  }

  getDetails(id: number) {
    localStorage.setItem('pageBefore', '/search');

    this._router.navigate(['/movie', id]);
  }
}
