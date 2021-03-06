import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  searchMovie(text: string) {
    if (!text) {
      return;
    }

    localStorage.setItem('pageBefore', '/search');
    localStorage.setItem('searchText', text);
    this._router.navigate(['/search', text]);
  }
}
