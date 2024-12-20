# Benchmark History

This is a repository that measures the performance of each previous zelyjs version.

- Target Versions

```ts
const targets = ['4.0.0-next.4', '3.0.0', '2.0.0-next.24', '1.0.0'];
```

> To measure more versions, edit `src/index.ts`

## Benchmark

| Pkg                                                                     | Latency | Requests/Sec | Bytes/Sec |
| ----------------------------------------------------------------------- | ------- | ------------ | --------- |
| [**4.0.0-next.4**](https://www.npmjs.com/package/zely/v/4.0.0-next.4)   | 0.13 ms | 13.4K        | 1.71 MB   |
| [**3.0.0**](https://www.npmjs.com/package/zely/v/3.0.0)                 | 1.44 ms | 5K           | 658.97 KB |
| [**2.0.0-next.24**](https://www.npmjs.com/package/zely/v/2.0.0-next.24) | 0.61 ms | 8.6K         | 1.11 MB   |
| [**1.0.0**](https://www.npmjs.com/package/zely/v/1.0.0)                 | 0.2 ms  | 12.4K        | 1.58 MB   |

## Usage

```bash
yarn build # build zely versions / benchmark
yarn build --keep # keep builds / benchmark
```

After running, check the automatically created `result.md`.
