/* @flow */
class Movie {
  title: string;
  year: number;
  rating: number;
  constructor(title: string, year: number) {
    this.title = title;
    this.year = year;
  }
}

function rateMovie(movie: Movie, rating: number) {
  movie.rating = rating;
}

const ironMan: Movie = new Movie("Iron man", 2008);
rateMovie(ironMan, 4);

console.log(ironMan);
