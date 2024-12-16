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
| [**4.0.0-next.4**](https://www.npmjs.com/package/zely/v/4.0.0-next.4)   | 0.05 ms | 17.1K        | 2.18 MB   |
| [**3.0.0**](https://www.npmjs.com/package/zely/v/3.0.0)                 | 1.13 ms | 6.3K         | 820.66 KB |
| [**2.0.0-next.24**](https://www.npmjs.com/package/zely/v/2.0.0-next.24) | 0.06 ms | 13.2K        | 1.69 MB   |
| [**1.0.0**](https://www.npmjs.com/package/zely/v/1.0.0)                 | 0.02 ms | 19K          | 2.43 MB   |

## Usage

```bash
yarn build # build zely versions / benchmark
yarn build --keep # keep builds / benchmark
```

After running, check the automatically created `result.md`.
