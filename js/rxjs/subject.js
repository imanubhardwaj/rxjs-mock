class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        if (!isFunction(observer)) {
            throw new Error("Invalid argument. Callback expected.");
        }
        const numberOfObservers = this.observers.push(observer);
        return {
            unsubscribe: this.unsubscribe.bind(this, numberOfObservers - 1)
        };
    }

    next(value) {
        this.observers.forEach(observer => observer(value));
    }

    complete() {
        this.observers = [];
    }

    unsubscribe(indexOfObserver) {
        this.observers.splice(indexOfObserver, 1);
    }
}
