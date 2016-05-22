'use strict'

// use var at blocked scope

console.log('------------------------------------------------')
console.log(' --- case 1   ${name} works at HacherYou as an ${job}');

let name = 'foo'
let job = 'bar'
let sentence = `${name} works at HacherYou as an ${job}`
console.log(sentence)


console.log('\n --- case 2   multiline');

const markup = `
<div>
<h2>${name}</h2>
</div>
`

console.log(markup)
