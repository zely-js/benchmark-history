# Benchmark History

This is a repository that measures the performance of zely, dobs and express.

- Target Versions

> To measure more versions, edit `src/index.ts`

## Benchmark

- **Run**: Fri Nov 14 2025 22:05:51 GMT+0900 (Korean Standard Time)
- **Machine**: win32 | Intel(R) Core(TM) i7-10710U CPU @ 1.10GHz
- **Node**: v22.17.1

| Pkg                                                    | Latency | Requests/Sec | Bytes/Sec |
| ------------------------------------------------------ | ------- | ------------ | --------- |
| [**dobs**](https://www.npmjs.com/package/dobs)         | 0.03 ms | 17.3K        | 2.1 MB    |
| [**dobs(Build)**](https://www.npmjs.com/package/dobs)  | 0.02 ms | 18.1K        | 2.19 MB   |
| [**zely(Build)**](https://www.npmjs.com/package/zely/) | 0.04 ms | 16.8K        | 2.03 MB   |
| [**express**](https://www.npmjs.com/package/express)   | 1.11 ms | 6.3K         | 1.39 MB   |

> This benchmark sends an initial request to `/` to warm up the server, so the measured performance reflects warm (not cold) response times.

## Usage

```bash
yarn build # build zely versions / benchmark
yarn build --keep # keep builds / benchmark
```

After running, check the automatically created `result.md`.
