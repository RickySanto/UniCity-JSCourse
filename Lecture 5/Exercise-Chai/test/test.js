var chai = require('chai');
var should = require('chai').should();
var expect = chai.expect;
var BMI = require('../exercise.js');

describe('BMI Tests', function(){
	 it('should return 24.9 if height is 1.90 and weight is 90', function(){
        var height = 1.90;
		var weight = 90;
		
		var expected = 24.9;
		var actual = BMI(height, weight);
		
		expect(actual).to.equal(expected);
    });
});