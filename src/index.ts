/* eslint-disable no-unused-expressions */
import { join } from 'path';
import { rmSync } from 'fs';

import { buildVersion } from './build-version';
import { createRunner } from './create-runner';
import { run } from './run';
import { printResult } from './print';

const targets = ['4.0.0-next.4', '3.0.0', '2.0.0-next.24', '1.0.0'];

async function main(keep: boolean = false) {
  !keep && rmSync(join(process.cwd(), 'versions'), { recursive: true, force: true });

  for await (const version of targets) {
    if (!keep) {
      await buildVersion(version);
    }

    createRunner(version);
  }

  let index = -1;

  const output: Record<string, any> = {};

  for await (const version of targets) {
    index += 1;

    const port = 3000 + index;

    console.log(`${'running'.green} zely@${version} on ${port}`);

    const result = await run(version, port);

    output[version] = result;
  }

  printResult(output);

  console.log('\n==> See result.md');

  process.exit(0);
}

main(process.argv.includes('--keep'));
