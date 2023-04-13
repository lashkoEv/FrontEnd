'use strict';

class PubSub {
	constructor() {
		this.handlers = {};
	}
	publish(channel, args) { 
		if (this.handlers[channel] === undefined) { return; }
		this.handlers[channel].forEach((handler) => {
			handler(args);
		});
	}
	subscribe(channel, handler) {
		if (this.handlers[channel] === undefined) {
			this.handlers[channel] = [];
		} 
		this.handlers[channel].push(handler);
	}
	unsubscribe(channel, handler) { 
		this.handlers[channel] = this.handlers[channel].filter((storedHandler) => (storedHandler !== handler));
	}
}

const showElem = (elem) => {
	elem.classList.remove('hide');
}
const hideElem = (elem) => {
	elem.classList.add('hide');
}