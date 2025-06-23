# Benchmark History

This is a repository that measures the performance of each previous zelyjs version.

- Target Versions

```ts
const targets = ['4.0.1']; // and express 5.1.0
```

> To measure more versions, edit `src/index.ts`

## Benchmark

| Pkg                                                                             | Latency | Requests/Sec | Bytes/Sec |
| ------------------------------------------------------------------------------- | ------- | ------------ | --------- |
| [**4.0.1:serpack-on**](https://www.npmjs.com/package/zely/v/4.0.1:serpack-on)   | 0.03 ms | 17.4K        | 2.22 MB   |
| [**4.0.1**](https://www.npmjs.com/package/zely/v/4.0.1)                         | 0.03 ms | 16.9K        | 2.16 MB   |
| [**build server (built by 4.0.1)**](https://www.npmjs.com/package/zely/v/4.0.1) | 0.03 ms | 17.6K        | 2.25 MB   |
| [**express**](https://www.npmjs.com/package/express)                            | 1.19 ms | 6K           | 1.36 MB   |

> This benchmark sends an initial request to `/` to warm up the server, so the measured performance reflects warm (not cold) response times.

- **Run**: Mon Jun 23 2025 23:52:12 GMT+0900 (Korean Standard Time)
- **Node**: v20.9.0

## Usage

```bash
yarn build # build zely versions / benchmark
yarn build --keep # keep builds / benchmark
```

After running, check the automatically created `result.md`.
