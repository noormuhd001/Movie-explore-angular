import { Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { register } from 'module';
import { RegisterComponent } from './register/register.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieAboutComponent } from './movie-about/movie-about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'teams', component: TeamComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'favorites', component: FavouritesComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'mabout', component: MovieAboutComponent },
];

