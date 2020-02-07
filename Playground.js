// const Character = require('./Character');
const { JSDOM } = require('jsdom');
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;
global.$ = require('jquery')(window);
import Character from './Character';


export default class Playground 
{	
	constructor(selector_ch1) 
	{
		//create the first character
		var chr1 = new Character(selector_ch1);
		
		$('body').keydown(function(e) {

			//if the user pressed 'D'
			if(e.keyCode == 39) {
				chr1.updateAction("WALK_RIGHT");
			}
			else if(e.keyCode == 37) {
				chr1.updateAction("WALK_LEFT");
			}
			else if(e.keyCode == 40) {
				chr1.updateAction("KNEEL");
			}
			else if(e.keyCode == 65) {
				chr1.updateAction("PUNCH");
			}
			else if(e.keyCode == 83) {
				chr1.updateAction("KICK");
			}
			else if(e.keyCode == 68) {
				chr1.updateAction("BEAM");
			}
			else if(e.keyCode == 70) {
				chr1.updateAction("ROUND_HOUSE");
			}
		});

		this.chr1 = chr1;
	}

	mainLoop()
	{
		this.chr1.drawCharacter();
	}
	
}	//end of PlayGround class