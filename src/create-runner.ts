import { writeFileSync } from 'fs';
import { join } from 'path';

export function createRunner(version: string) {
  const isV2 = Number(version.split('.')[0]) >= 3;

  let code =
    'const zely = require("./index.js");const port = process.argv[2];process.env.NODE_ENV = \'development\';';

  if (isV2) {
    code +=
      '(async function() {const server = await zely.zely({});server.server.listen(port, () => {console.log("[run]")})})()';
  } else {
    code +=
      '(async function() {const server = await zely.Zely({});server.listen(port, () => {console.log("[run]")})})()';
  }

  writeFileSync(join(process.cwd(), 'versions', `zely-${version}`, 'runner.js'), code);
}
