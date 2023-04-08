
import * as fs from 'fs';
import { StringDecoder } from 'string_decoder';

const decoder = new StringDecoder('utf-8')
// const stream = fs.createReadStream('./file.txt', {highWaterMark: 12});

// stream.on('data', (chunk) => {
//   console.log(chunk)
//   // console.log('New chunk of data:', decoder.write(chunk as Buffer));
// })


// setTimeout(() => {
//   stream.on('data', (chunk) => {
//     console.log(chunk);
//   })
// }, 2000);


// stream.resume();

// setTimeout(() => {
//   stream.on('data', (data) => {
//       console.log(data)
//   })
// }, 2000);


// import { Readable } from 'stream';

// const stream = new Readable();

// stream.push('Hello');
// stream.push('World!');
// stream.push(null);

// stream.on('data', (chunk) => {
//   console.log(chunk.toString());
// });


import { Readable } from 'stream';

const stream = new Readable();

const read = stream.read.bind(stream);
stream.read = function() {
  console.log('read() called');
  return read(2);
}

stream.push('Hello');
stream.push('World!');
stream.push(null);

stream.on('data', (chunk) => {
  console.log(chunk.toString());
});


// import { Readable } from 'stream';

// const stream = new Readable();

// stream.push('Hello');
// stream.push('World!');
// stream.push(null);

// stream.on('readable', () => {
//   let data;
//   console.log(data)
//   while (null !== (data = stream.read())) {
//     console.log('Received:', data.toString());
//   }
// });

// stream.on('end', () => {
//   console.log('Reached end of stream.');
// });
