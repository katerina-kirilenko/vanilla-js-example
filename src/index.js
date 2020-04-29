import { SearchForm } from "./components/SearchForm";
import { MoviesList } from "./components/MoviesList";

const form = new SearchForm({
  id: 'search'
});
document.body.insertAdjacentHTML('beforeend', form.render())
form.initEventListeners()

const list = new MoviesList({ id: 'moviesList' });
document.body.insertAdjacentHTML('beforeend', list.render())