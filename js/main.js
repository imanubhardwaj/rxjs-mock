const subject = new Subject();

const subscription = subject.subscribe(val => console.log(val));

subject.next(7);

subscription.unsubscribe();
