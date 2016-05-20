# sandbox-es2015

refs:
https://css-tricks.com/lets-learn-es2015

## let-and-const.js

[let-and-const.js](src/let-and-const.js)

* `const` は宣言する時点で値を代入する。そうしないとエラーとなる。
* `const` は、再代入を使用とした時点でエラーとなる。
* `const` にオブジェクトを代入した場合、プロパティの値の再代入は可能。オブジェクトの再代入はエラーとなる。

```
const d = {name: 'foo'};
console.log(d.name); // -> foo

d.name = 'bar'
console.log(d.name); // -> bar

try {
  d = {name: 'baz'} // -> syntax error
} catch(e) {
  console.log(e.message)
}
```

