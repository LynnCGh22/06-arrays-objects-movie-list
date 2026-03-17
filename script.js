// Arrays holding movie titles for each genre
const comedyMovies = ["Deadpool", "Step Brothers", "Anchorman", "The Hangover"];
const actionMovies = ["Mad Max: Fury Road", "John Wick", "Die Hard", "The Dark Knight"];
const dramaMovies = ["The Shawshank Redemption", "Forrest Gump", "Fight Club", "The Godfather"];
const sciFiMovies = ["Inception", "The Matrix", "Interstellar", "Blade Runner 2049"];

// Get the genre dropdown and movie recommendations elements
const genreDropdown = document.getElementById("genre");
const movieRecommendations = document.getElementById("movieRecommendations");

// Set up event listener for when the user selects a genre
genreDropdown.addEventListener("change", function() {
  // Get the selected genre
  const selectedGenre = genreDropdown.value;

  // Variable to hold the list of movies
  let movieList = [];

  // Assign movies to the movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    movieList = comedyMovies;
  } else if (selectedGenre === "Action") {
    movieList = actionMovies;
  } else if (selectedGenre === "Drama") {
    movieList = dramaMovies;
  } else if (selectedGenre === "Sci-Fi") {
    movieList = sciFiMovies;
  }

  // Create a <ul> element
  let html = "<ul>";

  // Use a for loop to add each movie as a <li>
  for (let i = 0; i < movieList.length; i++) {
    html += `<li>${movieList[i]}</li>`;
  }

  html += "</ul>";


  // Display the list of movies on the page
  movieRecommendations.innerText = `Enjoy: ${movieList.join(", ")}!`;
});