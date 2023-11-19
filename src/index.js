import ui from './ui';
import data from './data';
import api from './api';

function updateMeals(meals) {
  data.setMeals(meals);
  ui.renderMeals(data.getMeals());
}

ui.renderPage({
  onSearch: (searchTerm) => {
    api.searchMeals(searchTerm).then(updateMeals);
  },
});

api.getPopularMeals().then(updateMeals);
