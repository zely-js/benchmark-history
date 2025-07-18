/* eslint-disable no-unused-expressions */
import { join } from 'path';
import { build } from 'zely';
import { rmSync } from 'fs';

import { buildVersion } from './build-version';
import { createRunner } from './create-runner';
import { run } from './run';
import { printResult } from './print';

const targets = ['4.0.3-beta.0', '4.0.1'];

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

    const port = 8080 + index;
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

  // Run production server

  const prod = await build({});

  const outputProd = await run('', 3000, [], prod.filename);

  output.built = outputProd;

  const outputExpress = await run('', 3001, [], join(process.cwd(), 'express.js'));

  output.express = outputExpress;

  printResult(output);

  console.log('\n==> See result.md');
  process.exit(0);
}

main(process.argv.includes('--keep'));
