import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  movie = {};
  loading: boolean;

  constructor(public _ps: PeliculasService,
              private _activatedRouter: ActivatedRoute,
              private _router: Router) {
    this.loading = true;

    this._activatedRouter.params.subscribe(params => {
      this._ps.getDetails(params['id']).subscribe( data => {
        this.movie = data;
        this.loading = false;
        // console.log(data);
      });
    });
   }

  ngOnInit() {
  }

  goBack() {
    const pageBefore = localStorage.getItem('pageBefore');

    if (pageBefore === 'search') {
      this._router.navigate(['/search']);
    } else {
      this._router.navigate(['/home']);
    }
  }
}
