var preload = function(game){}

preload.prototype = {
	preload: function(){ 
        var loadingBar = this.add.sprite(160,240,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
		

		this.game.load.image("gametitle","assets/logo.png");
		this.game.load.image("background", "assets/background.png");

		// //charselect Stuff
		this.game.load.image("diveStand", "assets/dive_stand.png");
		this.game.load.image("diveJump", "assets/dive_jump.png");
		this.game.load.image("diveKick", "assets/dive_kick.png");

		this.game.load.image("kickStand", "assets/kick_stand.png");
		this.game.load.image("kickJump", "assets/kick_jump.png");
		this.game.load.image("kickKick", "assets/kick_kick.png");

		// //character images
		// this.game.load.image("alan","assets/alan.png");
        // this.game.load.image("carl","assets/carl.png");
        // this.game.load.image("brian","assets/brian.png");
        // this.game.load.image("gordon","assets/gordon.png");

		// //golf game 
		// this.game.load.image("player","assets/playerpic.png");
		// this.game.load.image("course","assets/course.png");
		// this.game.load.image("ball","assets/ball.png");
		// this.game.load.image("ballShadow","assets/ball-shadow.png");
		// this.game.load.image("strokeBox","assets/strokebox.png");
		// this.game.load.image("arrow","assets/arrow.png");
		// this.game.load.image("swingbarNormal","assets/swingbarNormal.png");
		// this.game.load.image("swingbarBad","assets/swingbarBad.png");
		// this.game.load.image("swingbarGood","assets/swingbarGood.png");
		// this.game.load.image("swingbarSelector","assets/swingbarselector.png");		

	},
  	create: function(){
		this.game.state.start("GameTitle");
	}
}