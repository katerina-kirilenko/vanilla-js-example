/* eslint-disable class-methods-use-this */
import { getMoviesByQuery } from "../../api/movies";
import { PubSub } from "../../lib/pubsub";

export class SearchForm {
  constructor({ id }) {
    this.id = id
  }

  async handleSubmit(e) {
    e.preventDefault()

    const value = document.getElementById('query').value.trim()
    console.log(value)
    PubSub.publish('fetchMovies/pending')
    const result = await getMoviesByQuery(value)
    if (result) {
      PubSub.publish('fetchMovies/success', result.Search)
    }
  }

  render() {
    return `
      <form id=${this.id}>
        <input type="text" id="query" name="query" placeholder="Type your search query" value="">
        <input type="submit" value="Submit">
      </form> 
    `;
  }

  initEventListeners() {
    const form = document.getElementById(this.id);
    form.addEventListener('submit', this.handleSubmit)
  }
}