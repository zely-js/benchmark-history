/* eslint-disable no-unused-expressions */
import { join } from 'path';
import { rmSync } from 'fs';

import { buildVersion } from './build-version';
import { createRunner } from './create-runner';
import { run } from './run';
import { printResult } from './print';

const targets = ['4.0.0-next.9', '3.0.0', '2.0.0-next.24', '1.0.0'];

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
    const isV4 = Number(version.split('.')[0]) >= 4;
    const flags = ['--loader-performance'];

    if (isV4) {
      flags.push('--serpack', '--serpack-runtime');
    }

    if (isV4) {
      console.log(`${'running'.green} zely@${version}(serpack:on) on ${port}`);

      const result2 = await run(version, port, flags);

      output[`${version}:serpack-on`] = result2;

      index += 1;

      console.log(`${'running'.green} zely@${version} on(serpack:off) ${port + 1}`);

      const result1 = await run(version, port + 1);

      output[version] = result1;
    } else {
      console.log(`${'running'.green} zely@${version} on(serpack:off) ${port}`);

      const result1 = await run(version, port, flags);

      output[version] = result1;
    }
  }

  printResult(output);

  console.log('\n==> See result.md');

  process.exit(0);
}

main(process.argv.includes('--keep'));
