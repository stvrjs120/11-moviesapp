import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movdisplay',
  templateUrl: './movdisplay.component.html',
  styles: []
})
export class MovdisplayComponent implements OnInit {

  @Input() movies: any[] = [];

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  getDetails(id: number) {
    localStorage.setItem('pageBefore', '/home');

    this._router.navigate(['/movie', id]);
  }
}
