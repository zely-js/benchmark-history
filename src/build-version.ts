import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import 'colors';
import esbuild from 'esbuild';

import pkgJSON from '../package.json';

export async function buildVersion(version: string) {
  // install dep
  console.log(`${'info'.blue} building "zely@${version}"`);

  execSync(`yarn add zely@${version}`, { stdio: 'pipe' });

  // bundle dep

  const rawPkg = readFileSync(
    join(process.cwd(), './node_modules/zely/package.json')
  ).toString();
  const pkg = JSON.parse(rawPkg);
  const out = join(process.cwd(), 'versions', `zely-${version}`);

  await esbuild.build({
    entryPoints: [join(process.cwd(), 'node_modules', 'zely', pkg.main)],
    outfile: join(out, 'index.js'),
    bundle: true,
    minify: true,
    platform: 'node',
    external: [
      ...Object.keys(pkgJSON.devDependencies),
      ...['segify', 'source-map', 'mime-types', 'chokidar', 'serpack'],
    ],
  });

  writeFileSync(join(out, 'pkg.json'), JSON.stringify({ version }));
}
