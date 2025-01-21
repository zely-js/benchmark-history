# Benchmark History

This is a repository that measures the performance of each previous zelyjs version.

- Target Versions

```ts
const targets = ['4.0.0-next.4', '3.0.0', '2.0.0-next.24', '1.0.0'];
```

> To measure more versions, edit `src/index.ts`

## Benchmark

| Pkg                                                                                         | Latency | Requests/Sec | Bytes/Sec |
| ------------------------------------------------------------------------------------------- | ------- | ------------ | --------- |
| [**4.0.0-next.9:serpack-on**](https://www.npmjs.com/package/zely/v/4.0.0-next.9:serpack-on) | 0.04 ms | 17.8K        | 2.27 MB   |
| [**4.0.0-next.9**](https://www.npmjs.com/package/zely/v/4.0.0-next.9)                       | 0.05 ms | 16.8K        | 2.14 MB   |
| [**3.0.0**](https://www.npmjs.com/package/zely/v/3.0.0)                                     | 1.15 ms | 6.1K         | 793.93 KB |
| [**2.0.0-next.24**](https://www.npmjs.com/package/zely/v/2.0.0-next.24)                     | 0.1 ms  | 12.8K        | 1.63 MB   |
| [**1.0.0**](https://www.npmjs.com/package/zely/v/1.0.0)                                     | 0.02 ms | 19.4K        | 2.48 MB   |

## Usage

```bash
yarn build # build zely versions / benchmark
yarn build --keep # keep builds / benchmark
```

After running, check the automatically created `result.md`.
