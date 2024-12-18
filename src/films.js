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
function orderAlphabetically(array) {}

// Exercise 5: Order by year, ascending
function orderByYear() {}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {}

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
