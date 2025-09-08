import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-movies',
  imports: [NgFor, FormsModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  searchQuery = '';
  trendingMovies: any[] = [
    {
      id: 1,
      title: 'Inception',
      poster_path: '/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
      vote_average: 9.8,
      added: false,
    },
    {
      id: 2,
      title: 'The Dark Knight',
      poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      vote_average: 9.0,
      added: false,
    },
    {
      id: 3,
      title: 'Interstellar',
      poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      vote_average: 8.6,
      added: false,
    },
    {
      id: 4,
      title: 'The Matrix',
      poster_path: '/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
      vote_average: 8.7,
      added: false,
    },
    {
      id: 5,
      title: 'Avatar',
      poster_path: '/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg',
      vote_average: 7.8,
      added: false,
    },
    {
      id: 6,
      title: 'Gladiator',
      poster_path: '/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
      vote_average: 8.5,
      added: false,
    },
    {
      id: 7,
      title: 'Titanic',
      poster_path: '/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
      vote_average: 8.2,
      added: false,
    },
    {
      id: 8,
      title: 'Avengers: Endgame',
      poster_path: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
      vote_average: 8.4,
      added: false,
    },
    {
      id: 9,
      title: 'Joker',
      poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
      vote_average: 8.5,
      added: false,
    },
    {
      id: 10,
      title: 'Spider-Man: No Way Home',
      poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
      vote_average: 8.3,
      added: false,
    },
    {
      id: 11,
      title: 'Black Panther',
      poster_path: '/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
      vote_average: 7.4,
      added: false,
    },
    {
      id: 12,
      title: 'Frozen II',
      poster_path: '/qdfARIhgpgZOBh3vfNhWS4hmSo3.jpg',
      vote_average: 7.0,
      added: false,
    },
    {
      id: 13,
      title: 'The Lion King',
      poster_path: '/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg',
      vote_average: 8.5,
      added: false,
    },
    {
      id: 14,
      title: 'Shutter Island',
      poster_path: '/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg',
      vote_average: 8.1,
      added: false,
    }
  ];

  // 🔍 Search movies locally (filter array)
  searchMovies() {
    if (!this.searchQuery.trim()) {
      return;
    }
    this.trendingMovies = this.trendingMovies.filter(movie =>
      movie.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  addToFavorites(movie: any) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (!favorites.find((m: any) => m.id === movie.id)) {
      favorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    movie.added = true;
  }
}
