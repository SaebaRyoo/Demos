
import * as fs from 'fs';

// fs.writeFile('./newFile.txt', 'hello-world', (error: any) => {
//   if (error) {
//     console.log(error);
//     return
//   }
//   console.log('File created successfully');
// });


// async/await 写法
// async function writeFile() {
//   console.log(2)
//   try {
//     await fs.promises.writeFile('./newFile.txt', 'hello-world');
//     console.log('File created successfully')
//   } catch (err) {
//     console.log(err)
//   }
//   console.log(3)
// }
// writeFile()
// console.log(1)

import touch from './utils/touch';
import cat from './utils/cat'

const command = process.argv[2];
const path = process.argv[3];
const content = process.argv[4] || '';

if (command && path) {
  switch (command) {
    case 'touch': {
      touch(path, content);
      break;
    }
    case 'cat': {
      cat(path);
      break;
    }
    default: {
      console.log('Unknown command');
    }
  }
} else {
  console.log('Command missing');
}
