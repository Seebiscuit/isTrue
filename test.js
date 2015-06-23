require('./main.js')
var assert = require('assert');

describe('isTrue',function(){
	describe('booleans',function(){
		describe('true',function(){
			it('should return true;',function(){
				var t = true;
				assert.equal(t.isTrue(),true);
			})
		})
		describe('false',function(){
			it('should return false;',function(){
				assert.equal(false.isTrue(),false);
			})
		})
	});
	describe('strings',function(){
		describe('empty string',function(){
			it('should return false',function(){
				assert.equal(''.isTrue(),false);
			})
		});
		describe('non-empty string',function(){
			it('should return true',function(){
				assert.equal('asdf'.isTrue(),true);
			})
		})
	});
	describe('numbers',function(){
		describe('0',function(){
			it('should return false',function(){
				assert.equal((0).isTrue(),false);
			})
		});
		describe('1',function(){
			it('should return true',function(){
				assert.equal((1).isTrue(),true);
			})
		});
		describe('-1',function(){
			it('should return true',function(){
				assert.equal((-1).isTrue(),true);
			})
		});
	});
	describe('objects',function(){
		describe('empty obj',function(){
			it('should be true',function(){
				assert.equal(({}).isTrue(),true);
			})
		})
		describe('non empty obj',function(){
			it('should be true',function(){
				assert.equal(({'p':'asdf','q':'qwer'}).isTrue(),true);
			})
		})
	})
	describe('arrays',function(){
		describe('empty array',function(){
			it('should be true',function(){
				assert.equal(([]).isTrue(),true);
			})
		})
		describe('non empty obj',function(){
			it('should be true',function(){
				assert.equal(([1,2,3]).isTrue(),true);
			})
		})
	})
})
