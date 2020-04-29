/* eslint-disable no-prototype-builtins */
class PubSubClass {
  constructor() {
    this.events = {};
  }

  subscribe(event, callback) {

    const self = this;
  
    if(!self.events.hasOwnProperty(event)) {
      self.events[event] = [];
    }
  
    return self.events[event].push(callback);
  }

  publish(event, data = {}) {

    const self = this;
  
    if(!self.events.hasOwnProperty(event)) {
      return [];
    }
  
    return self.events[event].map(callback => callback(data));
  }
}

export const PubSub = new PubSubClass()