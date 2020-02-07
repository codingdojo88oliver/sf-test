import { expect } from 'chai';
const { JSDOM } = require('jsdom');
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;
global.$ = require('jquery')(window);


import Playground from '../Playground';

describe('Playground', () => {
	it('Character should move to the left!', () => {
		// expect(Playground.ALIVE).to.equal(1);
		let b = new Playground('ch2');	//create a new playGround and pass the id where the first character will be displayed
		setInterval(function(){ b.mainLoop(); }, 200);


		//store where the character is now
		let orig_coordinate = { x: b.chr1.ch_x, y: b.chr1.ch_y };
		var e = $.Event( "keydown", { keyCode: 37 } );
		$( "body" ).trigger( e );

		setTimeout(function(){
			//store where the character is now
			let new_coordinate = { x: b.chr1.ch_x, y: b.chr1.ch_y };
			// console.log(orig_coordinate, new_coordinate);

			//did the character move to the left?
			expect(orig_coordinate.x).to.be.greaterThan(new_coordinate.x);
			expect(orig_coordinate.y).to.be.equal(new_coordinate.y);
		}, 1000);
	});
});