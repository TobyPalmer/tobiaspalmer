'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var should = chai.should;

describe('basictest', function(){

	before(function(){
		browser.get(browser.baseUrl + '/#/courses');
	});

	it('Sould be on courses', function(){
		expect(browser.getCurrentUrl()).to.eventually.equal(browser.baseUrl + '/#/courses');
	});

	it('should do nothing', function(){

	});

});