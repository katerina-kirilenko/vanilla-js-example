/* eslint-disable class-methods-use-this */
import { PubSub } from "../../lib/pubsub";

export class MoviesList {
  constructor({ id }) {
    this.id = id
    this.movies = []

    PubSub.subscribe('fetchMovies/success', this.handleFetchMovies.bind(this))
  }

  handleFetchMovies(data) {
    console.log('handleFetchMovies', data)
    this.movies = data;
    document.getElementById(this.id).innerHTML = this.render()
  }

  render() {

    return `
      <ul id=${this.id}>
        ${this.movies.map(movie => `
            <li>
              ${JSON.stringify(movie)}
            </li>
          `)}
      </ul>
    `;
  }

  initEventListeners() {
  }
}