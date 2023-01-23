// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray.map((movie) => {
    return movie.director
  })
  return directorsArray
}

console.log(getAllDirectors(movies))


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// function getAllDirectors(moviesArray) {}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

 function howManyMovies(moviesArray) {
  if (!moviesArray.length) {
    return 0
  }

   const spielbergDramas = moviesArray.filter((dramas) => {
       if (dramas.director === 'Steven Spielberg' && dramas.genre.includes('Drama')) {
         return dramas.title
         } else if (dramas.director !== 'Steven Spielberg' && !dramas.genre.includes('Drama')) {
          return 0
         }
       })

  return spielbergDramas.length 
 }

console.log(howManyMovies(movies))


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0 
  } 

  let totalScore = 0

    for (const scores of moviesArray) {
      totalScore += scores.score 
    } 

  return avrgsScore = Math.round((totalScore / moviesArray.length) * 100) / 100 
}

console.log(scoresAverage(movies)) 


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {

  let totalScoreDrama = 0

  for (const dramaScore of moviesArray) {
    if (dramaScore.genre.includes("Drama")) {
      totalScoreDrama += dramaScore.score
    } else if (!dramaScore.genre.includes("Drama")) {
      return 0
    } 

    return Math.round(totalScoreDrama)
  }
}

console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {

  const movieYear = moviesArray.map((years) => {
    return `${years.year} : ${years.title}`
    })
   
  return movieYear.sort()
}

console.log(orderByYear(movies))


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {

  const movieOrder = moviesArray.map((titles) => {
      return titles.title
  })

  return movieOrder.sort()
}

console.log(orderAlphabetically(movies))


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {

}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(moviesArray) {

}