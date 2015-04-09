'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var should = chai.should;

var aweb = element.all(by.repeater('course in courses')).get(30).element(by.css('a'));

describe('basictest', function(){

	before(function(){
		browser.get(browser.baseUrl + '/#/courses');
	});

	it('Sould be on courses', function(){
		expect(browser.getCurrentUrl()).to.eventually.equal(browser.baseUrl + '/#/courses');
	});

	it('Should be a awebb link', function(){
		expect(aweb.isPresent()).to.eventually.equal(true);
	});

	it('Should click the awebb link', function(){
		aweb.click();
	});

	it('Should be on aweb page', function(){
		expect(browser.getCurrentUrl()).to.eventually.equal(browser.baseUrl + '/#/courses/TNM034');
	});

});