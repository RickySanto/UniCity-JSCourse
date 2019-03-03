var assert = require('assert');
var BMI = require('../Exercise.js');

describe('BMI tests', function(){
    it('should return 24.9 if height is 1.90 and weight is 90', function(){
        assert.equal(BMI(1.90,90), 24.9);
    });
});