// Exercise 1: Get the array of all directors.
const getAllDirectors = (array) => {
  let result = array.map((element) => element.director);
  console.log('EXERCICE 1 ->', result);
  return result;
};

// Exercise 2: Get the films of a certain director
const getMoviesFromDirector = (array, director) =>
  array.filter((element) => element.director === director);

// Exercise 3: Calculate the average of the films of a given director.
const moviesAverageOfDirector = (array, director) => {
  const filteredMovies = getMoviesFromDirector(array, director);

  const totalScore = filteredMovies.reduce(
    (sum, movie) => sum + movie.score,
    0
  );
  const averageScore = totalScore / filteredMovies.length;
  return averageScore;
};

// Exercise 4:  Alphabetic order by title
const orderAlphabetically = (array) => {
  const titleMovies = array.map((element) => element.title);

  const orderMoviesAlphabetically = titleMovies.sort();
  return orderMoviesAlphabetically.slice(0, 20);
};

// Exercise 5: Order by year, ascending
const orderByYear = (array) => {
  let elementOrdered;
  const arrayOrdered = [...array].sort((a, b) => {
    a.year === b.year
      ? (elementOrdered = a.title.localeCompare(b.title))
      : (elementOrdered = a.year - b.year);
    return elementOrdered;
  });
  return arrayOrdered;
};

// Exercise 6: Calculate the average of the movies in a category
const moviesAverageByCategory = (movies, genre) => {
  const filteredMoviesGenre = movies.filter((movie) =>
    movie.genre.includes(genre)
  );

  if (filteredMoviesGenre.length === 0) {
    return 0;
  }
  const totalScore = filteredMoviesGenre.reduce(
    (total, movie) => total + movie.score,
    0
  );
  const averageScoreByCategory = totalScore / filteredMoviesGenre.length;
  return averageScoreByCategory;
};

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
