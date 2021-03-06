import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Servicios
import { PeliculasService } from './services/peliculas.service';

import { AppComponent } from './app.component';
import { JsonpModule } from '@angular/http';

// Components
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';

// Pipes
import { MovimagePipe } from './pipes/movimage.pipe';

// Router
import { ROUTES } from './app.routes';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { MovdisplayComponent } from './components/movdisplay/movdisplay.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    MovimagePipe,
    MovieComponent,
    LoadingComponent,
    MovdisplayComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    FormsModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
