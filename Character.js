export default class Character {

	constructor(selector) 
	{

		this.constants = {
			'STANDING': 	{ 'y': 1, 'x': [0, 1, 2, 3] },
			'PUNCH':  		{ 'y': 2, 'x': [0, 1, 2, 3] },
			'WALK_RIGHT': 	{ 'y': 3, 'x': [0, 1, 2] },
			'WALK_LEFT': 	{ 'y': 3, 'x': [2, 3, 4] },
			'KNEEL': 		{ 'y': 9, 'x': [0] },
			'KICK': 		{ 'y': 6, 'x': [0, 1, 2, 3, 4] },
			'PUNCH': 		{ 'y': 2, 'x': [0, 1, 2] },
			'BEAM': 		{ 'y': 0, 'x': [0, 1, 2, 3] },
			'ROUND_HOUSE': 	{ 'y': 7, 'x': [0, 1, 2, 3, 4]}
		};

		this.selector = selector; //store the html id of the character

		this.counter = 0;			//stores which sprite (in the x-direction) it should display 
		this.action = "STANDING";	//default action is for the character to stand
		this.ch_x=0;					//x_coordinate of the character
		this.ch_y=0;					//y_coordinate of the character
		//ch_x, ch_y and action could really all be private variables and I could have just done var instead of this. but to make debuggin easier, I am making them an instance variable so that it would display when you log the chracter object
	}

	drawSprite(y, x) 
	{
		$('#'+this.selector).css('background', "url('https://github.com/choi5983/street_fighter/blob/master/images/ken.png?raw=true') "+x*(-70)+"px "+(-80*y)+"px").css('left', this.ch_x+"px");
	}

	//updates the action
	updateAction(action) 
	{
		this.counter=0;
		this.action = action;
	}
	//updates the character's coordinates and changes the sprite's counter to simulate the character moving
	updateCoordinate() 
	{
		if(this.counter>=this.constants[this.action].x.length)
		{
			this.counter=0;
			//if action is anything other than 'STANDING' change the action back to 'STANDING'
			this.action = 'STANDING';
		}

		if(this.action == 'WALK_LEFT')
			this.ch_x = this.ch_x-10;
		else if(this.action == 'WALK_RIGHT')
			this.ch_x = this.ch_x+10;
	}

	//draws the character on the screen
	drawCharacter()
	{
		// console.log("drawing character");
		this.updateCoordinate();
		this.drawSprite(this.constants[this.action].y, this.constants[this.action].x[this.counter++]);
	}
}