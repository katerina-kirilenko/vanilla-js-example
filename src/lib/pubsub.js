/* eslint-disable no-prototype-builtins */
class PubSubClass {
  constructor() {
    this.events = {};
  }

  subscribe(event, callback) {

    if(!this.events.hasOwnProperty(event)) {
      this.events[event] = [];
    }
  
    return this.events[event].push(callback);
  }

  publish(event, data = {}) {
  
    if(!this.events.hasOwnProperty(event)) {
      return [];
    }
  
    return this.events[event].map(callback => callback(data));
  }
}

export const PubSub = new PubSubClass()