# [broccoli](https://github.com/joliss/broccoli)-cssnano

> Minify CSS using [`cssnano`](https://github.com/ben-eb/cssnano)

*Issues with the output should be reported on the `cssnano` [issue tracker](https://github.com/ben-eb/cssnano/issues).*


## Install

```
$ npm install --save-dev broccoli-cssnano
```


## Usage

```js
var cssnano = require('broccoli-cssnano');
tree = cssnano(tree, options);
```


## API

### cssnano(tree, [options])

#### options

See the `cssnano` [options](https://github.com/ben-eb/cssnano#options).


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
