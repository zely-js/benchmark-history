# Benchmark History

This is a repository that measures the performance of each previous zelyjs version.

- Target Versions

```ts
const targets = ['4.0.1']; // and express 5.1.0
```

> To measure more versions, edit `src/index.ts`

## Benchmark

| Pkg                                                                                         | Latency | Requests/Sec | Bytes/Sec |
| ------------------------------------------------------------------------------------------- | ------- | ------------ | --------- |
| [**4.0.3-beta.0:serpack-on**](https://www.npmjs.com/package/zely/v/4.0.3-beta.0:serpack-on) | 0.1 ms  | 14.7K        | 1.78 MB   |
| [**4.0.3-beta.0**](https://www.npmjs.com/package/zely/v/4.0.3-beta.0)                       | 0.1 ms  | 14.7K        | 1.78 MB   |
| [**4.0.1:serpack-on**](https://www.npmjs.com/package/zely/v/4.0.1:serpack-on)               | 0.14 ms | 13.7K        | 1.66 MB   |
| [**4.0.1**](https://www.npmjs.com/package/zely/v/4.0.1)                                     | 0.13 ms | 13.8K        | 1.68 MB   |
| [**built**](#)                                                                              | 0.14 ms | 13.8K        | 1.67 MB   |
| [**express**](#)                                                                            | 1.85 ms | 4.3K         | 959.84 KB |

> This benchmark sends an initial request to `/` to warm up the server, so the measured performance reflects warm (not cold) response times.

- **Run**: Fri Jul 18 2025 16:07:38 GMT+0900 (Korean Standard Time)
- **Node**: v22.17.1

## Usage

```bash
yarn build # build zely versions / benchmark
yarn build --keep # keep builds / benchmark
```

After running, check the automatically created `result.md`.
