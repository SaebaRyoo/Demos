import * as EventEmitter from "events";

const eventEmitter = new EventEmitter()

// eventEmitter.on('event', () => {
//   console.log('one')
// })

// console.log(1)
// eventEmitter.on('event', () => {
//   console.log('two')
// })

// console.log(2)
// eventEmitter.on('event', () => {
//   console.log('three')
// })

// console.log(3)
// eventEmitter.emit('event')
// console.log(4)

// eventEmitter.on('event', function() {
//   console.log('Event occured!'); // not logged into the console
// });



// eventEmitter.on('event', function(data) {
//   console.log(data); // { key: value }
//   console.log(this === eventEmitter); // true
// });

// eventEmitter.emit(
//   'event',
//   {
//     key: 'value'
//   }
// );

// const _self = this;

// eventEmitter.on('event', () => {
//   console.log(this === eventEmitter); // false
//   console.log(this === _self) // true
// });

// eventEmitter.emit('event');

// eventEmitter.on('event1', () => {
//   console.log('First event here!');
//   eventEmitter.emit('event2');
// });

// eventEmitter.on('event2', () => {
//   console.log('Second event here!');
//   eventEmitter.emit('event3');
// });

// eventEmitter.on('event3', () => {
//   console.log('Third event here!');
//   eventEmitter.emit('event1');
// });

// eventEmitter.emit('event1');



eventEmitter.on('event1', () => {
  setTimeout(() => {
    console.log('First event here!');
    eventEmitter.emit('event2');
  })
});

eventEmitter.on('event2', () => {
  setTimeout(() => {
    console.log('Second event here!');
    eventEmitter.emit('event3');
  })
});

eventEmitter.on('event3', () => {
  setTimeout(() => {
    console.log('Third event here!');
    eventEmitter.emit('event1');
  })
});

eventEmitter.emit('event1');
