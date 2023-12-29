# Movie Rating Project 

This is a simple Node.js project utilizing Flow, a static type checker for JavaScript. The project defines a `Movie` class, which has properties for the movie's title, release year, and rating. Additionally, there is a function `rateMovie` to assign a rating to a movie.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-rating-project.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run Flow to check types:

   ```bash
   npm run flow
   ```

   This command uses Flow to statically analyze the code and ensure type correctness.

4. Remove Flow types for production:

   ```bash
   npm run flow-remove-types
   ```

   This command removes Flow types from the code, producing a version ready for deployment.

5. Run the project:

   ```bash
   npm start
   ```

## Project Structure

- `index.js`: Main entry point of the application.
- `Movie.js`: Contains the `Movie` class definition and the `rateMovie` function.
- `package.json`: Configuration file for Node.js project, includes dependencies and scripts.
- `flow.config.js`: Configuration file for Flow, specifying options and settings.

## Usage

Modify the `index.flow.js` file or create new instances of the `Movie` class in your application. Use the `rateMovie` function to assign ratings to movies. Run Flow to check for type errors, and remove types before deploying to production.

```javascript
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

const ironMan: Movie = new Movie("Iron Man", 2008);
rateMovie(ironMan, 4);

console.log(ironMan);
```

## Flow Type Checking

Ensure the correctness of types in your code by running:

```bash
npm run flow
```

## Removing Flow Types for Production

Before deploying your application, remove Flow types using:

```bash
npm run flow-remove-types
```

## Contributing

Feel free to contribute by opening issues or submitting pull requests. Follow the [contribution guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.