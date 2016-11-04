var gameTitle = function(game){}
 
gameTitle.prototype = {
	preload: function(){
		enterKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		
	},
  	create: function(){
		this.game.audio = {};
		this.game.audio.titleMusic = this.game.add.audio("titleMusic");

		back = game.add.image(0, 0, 'gametitle');
		//back.scale.set(2);
		back.smoothed = false;

		this.text = this.game.add.text(
			this.game.world.centerX, 500, 
			"  (z+x) \nTO BEGIN!", 
			{ font: "20px monospace", fill: "#eeeeee"});
			this.text.anchor.set(0.5);
			this.text.setShadow(1, 1, 'rgba(0,0,0,0.2)', 1);
		
		//this.game.audio.titleMusic.play();
	},
	update: function(){
		
		if(enterKey.isDown){
			//this.game.audio.titleMusic.stop();
			this.game.state.start("CharSelect");
		}
	}
}