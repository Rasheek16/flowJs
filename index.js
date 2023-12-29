/*       */
class Movie {
  title        ;
  year        ;
  rating        ;
  constructor(title        , year        ) {
    this.title = title;
    this.year = year;
  }
}

function rateMovie(movie       , rating        ) {
  movie.rating = rating;
}

const ironMan        = new Movie("Iron man", 2008);
rateMovie(ironMan, 4);

console.log(ironMan);
