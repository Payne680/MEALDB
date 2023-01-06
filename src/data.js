const state = {
  movies: [],
};

function getMeals() {
  return state.movies;
}

function setMeals(meals) {
  state.movies = meals;
}

export default {
  getMeals,
  setMeals,
};
