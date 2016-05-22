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

## template-literals.js

[template-literals.js](src/template-literals.js)

* テンプレートはバッククォート　(`` ` ``)　でくくる。
* バッククォートでくくった場合、`+` 演算子を使用しなくとも改行を含むテンプレートを定義できる。

```
let name = 'foo'

const markup = `
<div>
  <h2>${name}</h2>
</div>
`
```

## arrow-functions.js

[arrow-functions.js](src/arrow-functions.js)

* return は {} を使用し明示することも可能。次はどちらの定義方法も同じ関数である。

```
const add = (a, b) => {
  return a + b
}

const add = (a, b) => a + b
```


* 引数をとらない関数は `()` もしくは ` _` を使用し定義する。次はどちらの定義方法も同じ関数である。

```
const eight = () => 3 + 5
const eight = _ => 3 + 5
```

## spread parameters.js

[spread parameters.js](src/spread parameters.js)

* `...array` で、Array のそれぞれの値をカンマ区切りで表現することを意味する。


```
let numbers = [2, 4, 20, 43, 50, 23]
console.log(Math.max(...numbers))  // -> 50

```


* そのため、Array 同士の結合も簡単

```
let numbers1 = [1, 13]
let numbers2 = [21, 24]
console.log([...numbers1, ...numbers2]) // -> [ 1, 13, 21, 24 ]
```

