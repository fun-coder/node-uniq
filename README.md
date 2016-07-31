## Node Uniq

Remove repeatable item for an array

### Install

```bash
npm install node-uniq
```

### Usage

```javascript
import uniq from 'node-uniq';

let arr = [0, 1, 2, 1];
uniq(arr); # => [0, 1, 2]


let arr = [{id: 1}, {id: 2}, {id: 3}, {id: 2}];
uniq(arr, i => i.id); # => [{id: 1}, {id: 2}, {id: 3}]
```

### Run Test

```
npm install

npm run test
```