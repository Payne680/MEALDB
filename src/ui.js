import './styles/styles.css';

const appContainer = document.getElementById('app');
let mainContainer;

function createSearchBar(options) {
  const searchBar = document.createElement('form');
  searchBar.classList.add('search');
  searchBar.innerHTML = "<input type='search' placeholder='search' class='searchi' name='searchTerm'>";
  searchBar.addEventListener('submit', (e) => {
    e.preventDefault();
    options.onSearch(e.target.searchTerm.value);
  });

  return searchBar;
}

function createHeader({ onSearch }) {
  const header = document.createElement('header');
  header.classList.add('hero');
  header.innerHTML = '<img myIcon.src = Logo;><h1 class="title">TheMealDB</h1><div class="nav-links"><a><span>Home</span></a><a class="norm">API</a><a class="norm">Forum</a></div>';
  header.appendChild(createSearchBar({ onSearch }));
  return header;
}

function createInfo() {
  const infoElement = document.createElement('div');
  infoElement.classList.add('info');
  infoElement.innerHTML = `<h2>Welcome to TheMealDM</h2><p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.</p><p>We also offer a free JSON API for anyone wanting to use it, with additional features for subscribers.</p>
  <button><span class='sp1'>Pay</span><span class='sp2'>pal</span> <span class='sp3'>Subscribe to our Newsletter</span></button><p>Click to Support $2 per month (cancel anytime)</p><p>Currently 50 supporters</p><hr><h4>Latest Meal</h4><hr>`;
  return infoElement;
}

function createMeal(meal) {
  const movieElement = document.createElement('div');
  movieElement.classList.add('meals');
  movieElement.innerHTML = `<h2>${meal.strMeal}</h2><p>${meal.strInstructions}</p>`;
  const img = `${meal.strMealThumb}`;
  movieElement.style.backgroundImage = `url(${img})`;
  return movieElement;
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('body');
  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.innerHTML = '<div class="foot1"><p class="copy">&copy TheMealDB</p><p>Proudly Built in The UK</p></div> <div class="footlinks"><a>About</a><a>Faq</a><a>Contact</a></div>';
  return footer;
}

function renderPage({ onSearch }) {
  appContainer.innerHTML = '';
  appContainer.appendChild(createHeader({ onSearch }));
  mainContainer = createMain();
  appContainer.appendChild(createInfo());
  appContainer.appendChild(mainContainer);
  appContainer.appendChild(createFooter());
}

function renderMeals(meals) {
  mainContainer.innerHTML = '';
  meals.forEach((meal) => {
    mainContainer.appendChild(createMeal(meal));
  });
}

export default {
  renderPage,
  renderMeals,
};
