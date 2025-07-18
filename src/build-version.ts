import { execSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

import 'colors';

export async function buildVersion(version: string) {
  // install dep
  console.log(`${'info'.blue} building "zely@${version}"`);

  execSync(`yarn add zely${version.replace(/\./g, '-')}@npm:zely@${version}`, {
    stdio: 'pipe',
  });
  const out = join(process.cwd(), 'versions', `zely-${version}`);
  mkdirSync(out, { recursive: true });
}
