import * as fs from 'fs';

export default async function touch(path: string, content: string) {
  try {
    await fs.promises.writeFile(path, content);
    console.log('File created successfully')
  } catch(err) {
    console.log(err)
  }
}
