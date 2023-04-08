import * as fs from 'fs';

export default async function cat(path: string) {
  try {
    const content = await fs.promises.readFile(path, {encoding: 'utf-8'})
    console.log(content)
  } catch(err) {
    console.log(err);
  }
}
