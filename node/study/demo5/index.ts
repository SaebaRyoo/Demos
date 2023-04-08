import * as fs from 'fs';
import * as util from 'util'

// const stream = fs.createWriteStream('./file.txt')

// stream.write('hello world', () => {
//   console.log('file created')
// })

// 向文件写入数据
// function writeToFile(data: string | NodeJS.ArrayBufferView) {
//   fs.writeFile('test.txt', data, { flag: 'a+' }, (err) => {
//     if (err) {
//       console.error(err);
//     }
//   });
// }

// // 连续写入 5 次数据
// for (let i = 0; i < 5; i++) {
//   writeToFile(`Data ${i}\n`);
// }

// const writeToStream = (() => {
//   // 创建可写流
//   const writeStream = fs.createWriteStream('test.txt', { flags: 'a+' });
//   const write = (data: string) => {

//     writeStream.write(data);
//   }

//   return {
//     write,
//     writeStream
//   }
// })();
// // 连续写入 5 次数据
// for (let i = 0; i < 5; i++) {
//   writeToStream.write(`Data ${i}\n`);
// }

// // 关闭可写流
// writeToStream.writeStream.end();


// const readableStream = fs.createReadStream('./newFile.txt')
// const writableStream = fs.createWriteStream('./all.txt')

// readableStream.pipe(writableStream)


// import { pipeline, Readable } from 'stream';

// const readableStream1 = fs.createReadStream('./test.txt');
// const readableStream2 = fs.createReadStream('./file.txt');
// const writableStream = fs.createWriteStream('./output.txt');

// pipeline(
//   readableStream1,
//   readableStream2,
//   writableStream,
//   (err: any) => {
//     if (err) {
//       console.error('Pipeline failed:', err);
//     } else {
//       console.log('Pipeline succeeded.');
//     }
//   }
// );

// const readableStream1 = fs.createReadStream('test.txt');
// const readableStream2 = fs.createReadStream('file.txt');
// const writableStream = fs.createWriteStream('output.txt');

// readableStream1.pipe(writableStream, { end: false });
// readableStream2.pipe(writableStream, { end: false });



import { Writable } from 'stream';

// const writable = new Writable();

// writable._write = function(chunk, encoding, next) {
//   console.log(chunk.toString(), 'encoding: ', encoding);
//   next();
// };

// writable.write('Hello world!');
// writable.write('wuhu');


// const writeFile = util.promisify(fs.writeFile);
// class WritableFileStream extends Writable {
//   path: string;

//   constructor(path: string) {
//     super();
//     this.path = path;
//   }

//   async _write(chunk: any, encoding: string, next: (error?: Error) => void) {
//     try {
//       await fs.promises.writeFile(this.path, chunk, {flag: 'a+'})
//       next();
//     } catch(err) {
//       next(err)
//     }
//   }
// }

// const readable = fs.createReadStream('./test.txt')
// const readable1 = fs.createReadStream('./file.txt')
// const writable = new WritableFileStream('./output.txt')

// readable.pipe(writable)
// readable1.pipe(writable)

// import * as readline from 'readline';

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What is your name? ', (name: any) => {
//   console.log(`Hello, ${name}!`);
//   rl.close();
// });
// process.stdin.on('data', (data) => {
//   console.log(`Received: ${data}`);
// });


// let a: number;
// let b: number;

// process.stdin.on('data', (data) => {
//   if (a === undefined) {
//     a = Number(data.toString());
//   } else if (b === undefined) {
//     b = Number(data.toString());
//     console.log(`${a} + ${b} = ${a + b}`);
//   }
// });


const readable = fs.createReadStream('./test.txt');

readable.pipe(process.stdout);
