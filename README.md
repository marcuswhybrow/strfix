Affix strings, arrays and objects, with prefixes and suffixes:

`npm install strfix`

Usage:

```node
const strfix = require('strfix');

strfix('input', {prefix: 'pre-', suffix: '-post'});
// pre-input-post

strfix(['input1', 'input2'], {prefix: 'pre-', suffix: '-post'});
// [ 'pre-input1-post', 'pre-input2-post' ]

strfix({key1: 'val1', key2: 'val2'}, {prefix: 'pre-', suffix: '-post'});
// { key1: 'pre-val1-post', key2: 'pre-val2-post' }
```
