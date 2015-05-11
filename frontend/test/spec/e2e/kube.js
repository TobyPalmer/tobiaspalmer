'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var should = chai.should;

browser.ignoreSynchronization = true;

describe('basictest', function(){

	it('Sould be on kkube', function(){
		browser.driver.get('http://106.186.25.143/kuku-kube/en-3/');
		expect(browser.getCurrentUrl()).to.eventually.equal('http://106.186.25.143/kuku-kube/en-3/');
	});

	it('Should press the play button', function(){
		var playbutton = element(by.css('.play-btn'));
		// playbutton.click();
		// $('.play-btn').on("tap", function(e){});
		browser.executeScript('$(".play-btn").on("tap", function(e){});');
		var pausebutton = element(by.css('.btn-pause'));
		expect(pausebutton.isPresent()).to.eventually.equal(true);
		// browser.pause();
	});

	
});