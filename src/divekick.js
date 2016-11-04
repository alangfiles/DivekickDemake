var diveKick = function(game){
	var diveKey;
	var kickKey;
	var back;
	var diveTimer = 0;
	var kickTimer = 0;	
	var character;
}
diveKick.prototype = {
	preload: function(){

		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.physics.arcade.gravity.y = 200;

		diveKey = this.game.input.keyboard.addKey(Phaser.Keyboard.Z);
		kickKey = this.game.input.keyboard.addKey(Phaser.Keyboard.X);
		back = game.add.image(0, 20, 'background');
		back.scale.set(2.5);
		back.smoothed = false;
		

		character = game.add.sprite(200, 360, 'diveStand');
		character.scale.set(4);
		character.anchor.setTo(0.5, 0.5);
		character.smoothed = false;
		character.animations.add('jump', [0, 1, 2, 3], 10, true);
		character.animations.add('kick', [0, 1, 2, 3], 10, true);


		game.physics.enable(character, Phaser.Physics.ARCADE);
		character.body.collideWorldBounds = true;
		character.body.bounce.y = 0.1;
		character.body.gravity.y = 100;

	},
	create: function(){
		diveKey.onDown.add(this.dive, this);
		kickKey.onDown.add(this.kick, this);
	},
	update: function(){
		if(character.body.velocity.x > 0)
		{
			character.body.velocity.x -=1;
		}
	},
	dive: function(){
		//jump in the air
		console.log('fn:dive');
		//character.animations.play("jump");
		character.body.velocity.y = -300;
	},
	kick: function(){
		console.log('fn:kick');
		//character.animations.play("kick");
		console.log(character.body.y);
		if(character.body.y == 0){ //if on the ground, kickback
			character.body.velocity.y = -200;
			character.body.velocity.x = -100;
		}
		else {
			if(character.body.y > 0){
				character.body.velocity.x = 100;
				//kickVelocity
			}
			
		}
		
	}
}