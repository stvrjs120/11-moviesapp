import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  nowPlaying: any[] = [];
  populars: any[] = [];
  constructor(public _ps: PeliculasService) {
    this._ps.getNowPlaying().subscribe( data => {
      this.nowPlaying = data;
      // console.log(data);
    });

    this._ps.getPopulars().subscribe( data => {
      this.populars = data;
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
