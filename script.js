// Arrays of movie objects for each genre
const comedyMovies = [
  { title: "Deadpool", year: 2016, description: "A sarcastic anti-hero breaks the fourth wall while seeking revenge." },
  { title: "Step Brothers", year: 2008, description: "Two immature adults are forced to live together as siblings." },
  { title: "Anchorman", year: 2004, description: "A clueless news anchor dominates 1970s San Diego TV." },
  { title: "The Hangover", year: 2009, description: "Friends retrace their wild Vegas night to find a missing groom." }
];

const actionMovies = [
  { title: "Mad Max: Fury Road", year: 2015, description: "A high-speed chase across a post-apocalyptic desert." },
  { title: "John Wick", year: 2014, description: "A retired hitman seeks vengeance for a personal loss." },
  { title: "Die Hard", year: 1988, description: "A cop battles terrorists in a Los Angeles skyscraper." },
  { title: "The Dark Knight", year: 2008, description: "Batman faces the Joker in a battle for Gotham’s soul." }
];

const dramaMovies = [
  { title: "The Shawshank Redemption", year: 1994, description: "A man finds hope and friendship in prison." },
  { title: "Forrest Gump", year: 1994, description: "A simple man experiences major moments in U.S. history." },
  { title: "Fight Club", year: 1999, description: "An underground club spirals into chaos and identity crisis." },
  { title: "The Godfather", year: 1972, description: "The powerful story of a crime family’s legacy." }
];

const sciFiMovies = [
  { title: "Inception", year: 2010, description: "A thief enters dreams to steal secrets." },
  { title: "The Matrix", year: 1999, description: "A hacker discovers reality is a simulation." },
  { title: "Interstellar", year: 2014, description: "Explorers travel through space to save humanity." },
  { title: "Blade Runner 2049", year: 2017, description: "A blade runner uncovers a buried secret." }
];


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

  // Clear previous content
  movieRecommendations.innerHTML = "";

  // Create <ul>
  const ul = document.createElement("ul");
  ul.classList.add("movie-grid");

  // Loop through movies
  for (let i = 0; i < movieList.length; i++) {

    const movie = movieList[i];
    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
      <h3>${movie.title}</h3>
      <p class="movie-year">(${movie.year})</p>
      <p class="movie-desc">${movie.description}</p>
    `;

    ul.appendChild(card);
  }

  movieRecommendations.appendChild(ul);
});