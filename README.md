# locale-pkg
[![NPM version](https://img.shields.io/npm/v/locale-pkg?color=a1b858&label=)](https://www.npmjs.com/package/locale-pkg)

Get information on local packages. Works on both CJS and ESM.

## Install

```bash
npm i locale-pkg
```

## Usage

```ts
import {
  getPackageInfo,
  importModule,
  isPackageExists,
  resolveModule,
} from 'locale-pkg'

isPackageExists('locale-pkg') // true
isPackageExists('foo') // false

await getPackageInfo('locale-pkg')
/* {
 *   name: "local-pkg",
 *   version: "0.1.0",
 *   rootPath: "/path/to/node_modules/local-pkg",
 *   packageJson: {
 *     ...
 *   }
 * }
 */

// similar to `require.resolve` but works also in ESM
resolveModule('locale-pkg')
// '/path/to/node_modules/local-pkg/dist/index.cjs'

// similar to `await import()` but works also in CJS
const { importModule } = await importModule('locale-pkg')
```
## License

[MIT](./LICENSE) License © 2023 [Joruno-w](https://github.com/Joruno-w)
