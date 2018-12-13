import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  nowPlaying: any[] = [];
  populars: any[] = [];
  loadingNowPlaying: boolean;
  errorNowPlaying: boolean;
  errorMsgNowPlaying = '';
  loadingPopulars: boolean;
  errorPopulars: boolean;
  errorMsgPopulars = '';

  constructor(public _ps: PeliculasService) {
    this.loadingNowPlaying = true;
    this.loadingPopulars = true;

    this._ps.getNowPlaying().subscribe( data => {
      this.nowPlaying = data;
      this.loadingNowPlaying = false;
      // console.log(data);
    }, (errorServicio) => {
      this.errorNowPlaying = true;
      this.loadingNowPlaying = false;
      this.errorMsgNowPlaying = errorServicio.error.error.message;
    });

    this._ps.getPopulars().subscribe( data => {
      this.populars = data;
      this.loadingPopulars = false;
      // console.log(data);
    }, (errorServicio) => {
      this.errorPopulars = true;
      this.loadingPopulars = false;
      this.errorMsgPopulars = errorServicio.error.error.message;
    });
  }

  ngOnInit() {
  }

}
