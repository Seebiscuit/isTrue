# isTrue.js
A useful function to check if a javascript object evaluates to `true`

## Getting started
Bower:

`bower install isTrue`

npm: 

`npm install istrue --save`

Or clone from github:

`git clone https://github.com/codeocelot/istrue.git`

### node:
`require("istrue");`

### html embedded js:
`<script src="./path/to/main.js" type="text/javascript">`

## How to use
`"does this eval to true".isTrue() === true `

`"".isTrue() === false` 

Numbers, Arrays & Objects too! (don't forget the paratheses, otherwise js thinks it's a decimal!)

`(0).isTrue() === false`

`(1).isTrue() === true`

`({}).isTrue() === true // js likes parans around obj/array declarations`

`([]).isTrue() === true `

## run tests (mocha,assert):
`mocha test.js`

## Future
I can't think of a future for extentending this simple function.  Share your thoughts if you have ideas!


