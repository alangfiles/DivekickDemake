var diveKick = function(game){
	var diveKey;
	var kickKey;
	var diveTimer = 0;
	var kickTimer = 0;	
	var playerone;
}
diveKick.prototype = {
	preload: function(){

		game.physics.startSystem(Phaser.Physics.ARCADE);
		//game.physics.arcade.gravity.y = 200;

		diveKey = this.game.input.keyboard.addKey(Phaser.Keyboard.Z);
		kickKey = this.game.input.keyboard.addKey(Phaser.Keyboard.X);
		this.bg = this.game.add.tileSprite(0, 0, 600, 240, 'background');
		this.game.world.setBounds(0, 0, 600, 240);
		this.game.scale.setGameSize(256,240);

		// background
		playerone = this.game.add.sprite(this.game.world.centerX-60, this.bg.bottom, 'dive', 'stand/1.png');
		playerone.smoothed = false;
		playerone.scale.setTo(2,2);

		playertwo = this.game.add.sprite(this.game.world.centerX, this.bg.bottom, 'kickStand');
		playertwo.smoothed = false;
		playertwo.scale.setTo(2,2);



		// animations
		playerone.animations.add('stand',Phaser.Animation.generateFrameNames('stand/', 1, 2, '.png'), 2, true, false);
		playerone.animations.add('jump', Phaser.Animation.generateFrameNames('jump/', 1, 1, '.png'), 1, true, false);
		playerone.animations.add('kick', Phaser.Animation.generateFrameNames('kick/', 1, 1, '.png'), 1, true, false);



		playerone.animations.play('stand');

		this.game.physics.enable(playerone, Phaser.Physics.ARCADE);
		playerone.body.collideWorldBounds = true;
		playerone.body.bounce.y = 0.2;
		playerone.body.gravity.y = 400;

		this.game.physics.enable(playertwo, Phaser.Physics.ARCADE);
		playertwo.body.collideWorldBounds = true;
		playertwo.body.bounce.y = 0.2;
		playertwo.body.gravity.y = 400;




		this.game.camera.x = playerone.body.x;
		this.game.camera.follow(playerone);
		//this.game.camera.focusOnXY((playerone.body.x + playertwo.body.x)/2);
	},
	create: function(){
		diveKey.onDown.add(this.dive, this);
		kickKey.onDown.add(this.kick, this);
	},
	update: function(){
		if(playerone.body.bottom == this.bg.bottom){
			//player is on the ground, stop them.
			
			playerone.animations.play("stand");
			playerone.body.velocity.y = 0;
			playerone.body.velocity.x = 0;
		}
		

	},
	dive: function(){
		//jump in the air
		if(playerone.body.velocity.x >= 0){
			playerone.animations.play("jump");
			playerone.body.velocity.y += -300;
		}
	},
	kick: function(){
		playerone.animations.play("kick");
		if(playerone.body.bottom == this.bg.bottom){ //if on the ground, kickback
			playerone.body.velocity.y += -230;
			playerone.body.velocity.x += -120;
		}
		else {
			if(playerone.body.bottom < this.bg.bottom && playerone.body.velocity.x >= 0){
				playerone.body.velocity.y = 0;
				playerone.body.velocity.x += 100;
			}		
		}
	}
}