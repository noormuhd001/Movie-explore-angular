import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-favourites',
  imports: [NgFor, NgIf],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent {
  favorites: any[] = [];

  ngOnInit(): void {
    this.loadFavorites();
  }

  // Load favorites from localStorage
  loadFavorites(): void {
    const stored = localStorage.getItem('favorites');
    this.favorites = stored ? JSON.parse(stored) : [];
  }

  // Remove a movie from favorites
  removeFromFavorites(movie: any): void {
    this.favorites = this.favorites.filter(fav => fav.id !== movie.id);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
