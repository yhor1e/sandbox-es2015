# sandbox-es2015

refs:
* https://css-tricks.com/lets-learn-es2015
* https://ponyfoo.com/articles/es6#assignment-destructuring
* https://github.com/DrkSephy/es6-cheatsheet

## let and const

[let-and-const.js](src/let-and-const.js)

* `const` は宣言する時点で値を代入する。そうしないとエラーとなる。
* `const` は、再代入を使用とした時点でエラーとなる。
* `const` にオブジェクトを代入した場合、プロパティの値の再代入は可能。オブジェクトの再代入はエラーとなる。

```js
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


## template literals

[template-literals.js](src/template-literals.js)

* テンプレートはバッククォート　(`` ` ``)　でくくる。
* バッククォートでくくった場合、`+` 演算子を使用しなくとも改行を含むテンプレートを定義できる。

```js
let name = 'foo'

const markup = `
<div>
  <h2>${name}</h2>
</div>
`
```


## arrow functions

[arrow-functions.js](src/arrow-functions.js)

* return は {} を使用し明示することも可能。次はどちらの定義方法も同じ関数である。

```js
const add = (a, b) => {
  return a + b
}

const add = (a, b) => a + b
```


* 引数をとらない関数は `()` もしくは ` _` を使用し定義する。次はどちらの定義方法も同じ関数である。

```js
const eight = () => 3 + 5
const eight = _ => 3 + 5
```


## spread parameters

[spread-parameters.js](src/spread-parameters.js)

* `...array` で、Array のそれぞれの値をカンマ区切りで表現することを意味する。


```js
let numbers = [2, 4, 20, 43, 50, 23]
console.log(Math.max(...numbers))  // -> 50

```

* そのため、Array 同士の結合も簡単

```
let numbers1 = [1, 13]
let numbers2 = [21, 24]
console.log([...numbers1, ...numbers2]) // -> [ 1, 13, 21, 24 ]
```


## rest parameters

[rest-parameters.js](src/rest-parameters.js)

* `...Array`　を受け取る関数も次のように定義可能。 

```js
let numbers = [2, 4, 20]
const plusTwo = (...numbers) => {
  numbers.forEach(v => {
    console.log(v + 2)
  })
}
plusTwo(...numbers) // -> 4 6 22
```
## assifnment destructuring

ref: https://ponyfoo.com/articles/es6#assignment-destructuring

> var {foo} = pony is equivalent to var foo = pony.foo

```js
let foo = {bar: 5}
let {bar} = foo
console.log(bar)  // -> 5
```

> var {foo: baz} = pony is equivalent to var baz = pony.foo

```js
let foo = {bar: 5}
let {bar: baz} = foo
console.log(baz)  // -> 5
```

> You can provide default values, var {foo='bar'} = baz yields foo: 'bar' if baz.foo is undefined

```js
let {bar = 'baz'} = foo
console.log(bar)  // -> 'baz'
```

```js
let foo = {bar: `a`}
let {bar = 'baz'} = foo
console.log(bar)  // -> 'a'
```

> var {foo, bar: baz} = {foo: 0, bar: 1} gets you foo: 0 and baz: 1

```
let {foo, bar: baz} = {foo: 0, bar: 1}
console.log(foo)  // -> 0
console.log(baz)  // -> 1
```

> You can go deeper. var {foo: {bar}} = { foo: { bar: 'baz' } } gets you bar: 'baz'

```js
let {foo: {bar}} = { foo: { bar: 'baz' } }
console.log(bar)  // -> 'baz'
```

> You can alias that too. var {foo: {bar: deep}} = { foo: { bar: 'baz' } } gets you deep: 'baz'

```js
let {foo: {bar: deep}} = { foo: { bar: 'baz' } }
console.log(deep)  // ->
```

> Properties that aren’t found yield undefined as usual, e.g: var {foo} = {}

```js
let {foo} = {}
console.log(foo)  // -> undefined
```

> Deeply nested properties that aren’t found yield an error, e.g: var {foo: {bar}} = {}

```js
let {foo: {bar}} = {}
console.log(bar)  // -> Uncaught TypeError
```

> It also works for arrays, [a, b] = [0, 1] yields a: 0 and b: 1

```js
let [a, b, c] = [1, 2, 3]
console.log(a, b, c)  // -> 1 2 3
```

> You can skip items in an array, [a, , b] = [0, 1, 2], getting a: 0 and b: 2

```js
let [a, b, c] = [1,, 3]
console.log(a, b, c)  // -> 1 undefined 3
```

> You can swap without an “aux” variable, [a, b] = [b, a]

```js
let [a, b] = [1, 2]
console.log(a, b)  // -> 1 2
[a, b] = [b, a]  // -> Uncaught TypeError
```

この結果は記事の内容と異なる。


> Assign default values like function foo (bar=2) {}

```js
(function foo(bar=2){
  console.log(bar)
})(4) // -> 4

(function foo(bar=2){
  console.log(bar)
})() // -> 2

```

> Those defaults can be objects, too function foo (bar={ a: 1, b: 2 }) {}

```js
(function foo(bar={a: 1, b: 2}){
  console.log(bar.a, bar.b)
})({a: 3, b: 4}) // -> 3 4

(function foo(bar={a: 1, b: 2}){
  console.log(bar.a, bar.b)
})() // -> 1 2
```

> Destructure bar completely, like function foo ({ a=1, b=2 }) {}

```js
(function foo({a=1, b=2}){
  console.log(a, b)
})({a: 3, b: 4}) // -> 3 4

// オブジェクトで引数を定義している場合は、オブジェクトを渡す必要がある。
(function foo({a=1, b=2}){
  console.log(a, b)
})() // -> Uncaught TypeError

(function foo({a=1, b=2}){
  console.log(a, b)
})({}) // -> 1 2

```

> Default to an empty object if nothing is provided, like function foo ({ a=1, b=2 } = {}) {}

```js
// 次のようにしてオブジェクトを引数を指定した場合に、なにも引数を渡さないようにできる。
(function foo({a=1, b=2} = {}){
  console.log(a, b)
})() // -> 1 2
```

## object literals

ref: https://ponyfoo.com/articles/es6#spread-operator-and-rest-parameters

> Computed property names, { [prefix + 'Foo']: 'bar' }, where prefix: 'moz', yields { mozFoo: 'bar' }

```js
let prefix = 'foo'
let o = {[prefix + 'baz']: 'bar'}
console.log(o)  // -> Object {foobaz: "bar"}
```

> You can’t combine computed property names and property value shorthands, { [foo] } is invalid

```js
let prefix = 'foo'
let o = {prefix}
console.log(o)  // Object {prefix: "foo"}
```

```js
let prefix = 'foo'
let o = {[prefix]}
console.log(o)  // Uncaught SyntaxError
```

## classes

ref: https://ponyfoo.com/articles/es6#classes

```
typeof class Foo {}  // -> 'function'
```

> Syntax similar to declaring objects, class Foo {}
> Instance methods – new Foo().bar – are declared using the short object literal syntax, class Foo { bar () {} }
>　Constructor method class Foo { constructor () { /* initialize instance */ } }

```
let bar = new (class Foo {

  constructor(a) {
    this.a = a
  }

  getA() {
    console.log(this.a)
  }
})('bar')
bar.getA()  // -> 'bar'
```

> Static methods – Foo.isPonyFoo() – need a static keyword prefix, class Foo { static isPonyFoo () {} }

`static` はどのような場合に使用するのか。

> Prototypal inheritance with a simple syntax class PonyFoo extends Foo {}

```js
class Foo {

  constructor(a) {
    this.a = a
  }

  getA() {
    console.log(this.a)
  }
}

class ponyFoo extends Foo {
  getB(){
    console.log(this.a)
  }
}

let baz = new ponyFoo('baz')
baz.getA() // -> 'baz'
baz.getB() // -> 'baz'
```

## symbol

ref: https://ponyfoo.com/articles/es6#symbols

> You can create your own symbols using var symbol = Symbol()

> Symbols are of type symbol, thus: typeof Symbol() === 'symbol'

```
let s = Symbol()
typeof s  // -> 'Symbol'
```

> You can add a description for debugging purposes, like Symbol('ponyfoo')

```
let s1 = Symbol()
console.log(s1)  // -> Symbol()

let s2 = Symbol('foo')
console.log(s2)  // -> Symbol(foo)
```

> Symbols are immutable and unique. Symbol(), Symbol(), Symbol('foo') and Symbol('foo') are all different

```
let s1 = Symbol('foo')
let s2 = Symbol('foo')
console.log(s1 === s2)  // -> false
```

どのような場面で使用するのか。

→メソッドに定義などに使用する。そうすることによって、ネームスペースの強豪が避けられる。

> A Use case for Symbol() is to patch objects or namespaces from third parties with your own logic, but be confident that you won't collide with updates to that library. For example, if you wanted to add a method refreshComponent to the React.Component class, and be certain that you didn't trample a method they add in a later update

ref: https://github.com/DrkSephy/es6-cheatsheet#symbols


> You can also create global symbols with Symbol.for(key)
>> If a symbol with the provided key already existed, you get that one back
>> Otherwise, a new symbol is created, using key as its description as well


```js
let a = Symbol.for('foo')
let b = Symbol.for('foo')
a === b // true
```

>> Symbol.keyFor(symbol) is the inverse function, taking a symbol and returning its key

>> Global symbols are as global as it gets, or cross-realm. Single registry used to look up these symbols across the runtime

>>> window context
>>> eval context
>>> <iframe> context, Symbol.for('foo') === iframe.contentWindow.Symbol.for('foo')

```js
let a = Symbol.for('foo')
Symbol.keyFor(a)  // 'foo'
window.Symbol.keyFor(a)  // 'foo'
```

> There’s also “well-known” symbols

>> Not on the global registry, accessible through Symbol[name], e.g: Symbol.iterator
>> Cross-realm, meaning Symbol.iterator === iframe.contentWindow.Symbol.iterator
>> Used by specification to define protocols, such as the iterable protocol over Symbol.iterator
>> They’re not actually well-known – in colloquial terms


* イテレータとはなにか。


ref: http://qiita.com/kura07/items/cf168a7ea20e8c2554c6


> イテラブル (Iterable) なオブジェクト  
> イテレータを持つオブジェクト  
> [Symbol.iterator]()  

> イテレータ (Iterator)  
> 順番にイテレータリザルトを取り出すことのできるオブジェクト  
> .next()  

> イテレータリザルト (Iterator Result)
> 取り出した値や、取り出し終えたかどうかの真偽値を持つオブジェクト
> .value, .done
