var preload = function(game){}

preload.prototype = {
	preload: function(){

		//nes is 256x240 
        var loadingBar = this.add.sprite(160,240,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
		game.scale.maxWidth = 800;
		game.scale.maxHeight = 600;

		//  Then we tell Phaser that we want it to scale up to whatever the browser can handle, but to do it proportionally
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		


		this.game.load.image("gametitle","assets/logo.png");
		this.game.load.image("background", "assets/background.png");

		// //charselect Stuff

		this.game.load.atlasJSONHash('dive', 'assets/dive.png', 'assets/dive.json');
		this.game.load.image("diveStand", "assets/dive_stand.png");
		this.game.load.image("diveStand2", "assets/dive_stand2.png");
		this.game.load.image("diveJump", "assets/dive_jump.png");
		this.game.load.image("diveKick", "assets/dive_kick.png");

		this.game.load.image("kickStand", "assets/kick_stand.png");
		this.game.load.image("kickJump", "assets/kick_jump.png");
		this.game.load.image("kickKick", "assets/kick_kick.png");

	},
  	create: function(){
		this.game.state.start("GameTitle");
	}
}