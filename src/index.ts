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

  const output: Record<string, any> = {};

  // Run production server

  const prod = await build({});

  const outputProd = await run('', 3000, [], prod.filename);

  output.built = outputProd;

  const outputExpress = await run('', 3001, [], join(process.cwd(), 'express.js'));

  output.express = outputExpress;

  const outputDobs = await run('', 5050, [], join(process.cwd(), 'dobs.js'));

  output.dobs = outputDobs;

  process.env.PORT = 5051;
  const outputDobsBuild = await run('', 5051, [], join(process.cwd(), 'dist/index.js'));

  output.dobsBuild = outputDobsBuild;

  printResult(output);

  console.log('\n==> See result.md');
  process.exit(0);
}

main(process.argv.includes('--keep'));
