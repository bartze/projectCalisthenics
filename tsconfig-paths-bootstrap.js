import { resolve } from 'path';
import { pathToFileURL } from 'url';

const url = pathToFileURL(resolve('src/index.ts')).href;
const loader = 'ts-node/esm';

import('./register.js').then(({ register }) => {
  register(loader, url);
});
