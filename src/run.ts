import autocannon, { Result } from 'autocannon';
import { spawn } from 'child_process';
import { join } from 'path';

export function toNumber(num: number) {
  return Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(num);
}

export function toBytes(bytes: number, decimals: number = 2) {
  if (!+bytes) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
}

export function run(
  version: string,
  port: number,
  flags?: string[],
  provRunner?: string
) {
  return new Promise<Result>((resolve, reject) => {
    const startTime = performance.now();

    const runner = spawn(
      'node',
      provRunner
        ? [provRunner]
        : [
            join(process.cwd(), 'versions', `zely-${version}`, 'runner.js'),
            `${port}`,
            ...(flags || []),
          ],
      { cwd: process.cwd() }
    );

    console.log(
      `$ ${
        provRunner ??
        [
          'node',
          join(process.cwd(), 'versions', `zely-${version}`, 'runner.js'),
          `${port}`,
          ...(flags || []),
        ].join(' ')
      }`.gray
    );

    runner.stdout.on('data', async (msg) => {
      const message = msg.toString();
      if (message.trim().startsWith('[run]') || message.trim().startsWith('server')) {
        process.env.NODE_ENV = 'development';
        await fetch(`http://localhost:${port}`);

        console.log(`Time to start : ${(performance.now() - startTime).toFixed(2)}ms`);

        const result = await autocannon({
          url: `http://localhost:${port}`,
        });

        console.log(`@${version}`.cyan);
        console.log(`latency: ${result.latency.average.toString().bold} ms`);
        console.log(`requests: ${toNumber(result.requests.average).bold}`);
        console.log(`bytes: ${toBytes(result.throughput.average).toString().bold}`);

        resolve(result);
      } else {
        console.log(`$ ${message}`);
      }
    });

    runner.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
      reject(data);
    });
  });
}
