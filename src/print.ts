import { writeFileSync } from 'fs';
import { Result } from 'autocannon';
import os from 'os';
import { toBytes, toNumber } from './run';

export function printResult(results: Record<string, Result>) {
  let markdown = '';

  markdown += `+ **Run**: ${new Date()}\n`;
  markdown += `+ **Machine**: ${process.platform} | ${os.cpus()[0].model}\n`;
  markdown += `+ **Node**: ${process.version}\n\n`;

  markdown += '| Pkg | Latency | Requests/Sec | Bytes/Sec |\n';
  markdown += '|-----|---------|--------------|-----------|\n';

  for (const version of Object.keys(results)) {
    const result = results[version];

    markdown += `| [**${version}**](https://www.npmjs.com/package/zely/v/${version}) | ${result.latency.average.toString()} ms | ${toNumber(
      result.requests.average
    )} | ${toBytes(result.throughput.average)} |\n`;
  }

  writeFileSync('result.md', markdown);
}
