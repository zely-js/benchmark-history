# Benchmark History

This is a repository that measures the performance of each previous zelyjs version.

- Target Versions

```ts
const targets = ['4.0.0-next.16', '4.0.0-next.9', '3.0.0', '2.0.0-next.24', '1.0.0'];
```

> To measure more versions, edit `src/index.ts`

## Benchmark

| Pkg                                                                                           | Latency | Requests/Sec | Bytes/Sec |
| --------------------------------------------------------------------------------------------- | ------- | ------------ | --------- |
| [**4.0.0-next.16:serpack-on**](https://www.npmjs.com/package/zely/v/4.0.0-next.16:serpack-on) | 0.07 ms | 14.8K        | 1.89 MB   |
| [**4.0.0-next.16**](https://www.npmjs.com/package/zely/v/4.0.0-next.16)                       | 0.23 ms | 11.9K        | 1.53 MB   |
| [**4.0.0-next.9:serpack-on**](https://www.npmjs.com/package/zely/v/4.0.0-next.9:serpack-on)   | 0.07 ms | 14.6K        | 1.87 MB   |
| [**4.0.0-next.9**](https://www.npmjs.com/package/zely/v/4.0.0-next.9)                         | 0.07 ms | 14.9K        | 1.91 MB   |
| [**3.0.0**](https://www.npmjs.com/package/zely/v/3.0.0)                                       | 1.53 ms | 4.8K         | 624.15 KB |
| [**2.0.0-next.24**](https://www.npmjs.com/package/zely/v/2.0.0-next.24)                       | 0.24 ms | 10.9K        | 1.39 MB   |
| [**1.0.0**](https://www.npmjs.com/package/zely/v/1.0.0)                                       | 0.05 ms | 15.9K        | 2.03 MB   |

## Usage

```bash
yarn build # build zely versions / benchmark
yarn build --keep # keep builds / benchmark
```

After running, check the automatically created `result.md`.
