# isTrue
A useful function to check if a javascript object evaluates to `true`

## Getting started
I haven't hosted this on npm/bower/require/whatever yet. For now, 

`git clone https://github.com/codeocelot/istrue.git`.  

### node:
`require("./path/to/repo/main.js");`

### html embedded js:
`<script src="./path/to/main.js' type="text/javascript">`

### run tests (mocha,assert):
`mocha test.js`

## How to use
`"is does this eval to true".isTrue() === true `

`"".isTrue() === false` 

Numbers, Arrays & Objects too! (don't forget the paratheses, otherwise js thinks it's a decimal!)

`(0).isTrue() === false`

`(1).isTrue() === true`

`({}).isTrue() === true // js likes parans around obj/array declarations`

`([]).isTrue() === true `

## Future
I can't think of a future for extentending this simple function.  Share your thoughts if you have ideas!


