var charSelect = function(game){
    var charSelection;
    var currentChar;
    var charList;
    var updateCharacter;
    var playerInfo;
    var statsBox;
    var statSprites;
}
 
charSelect.prototype = {
	preload: function(){
        this.game.state.start("DiveKick");
    },
  	create: function(){
        
	},
    updateChar: function(key){ 
        
    },
	update: function(){
        
	},
    displayCharacterStats: function(){
        
    },
	playTheGame: function(){
        //this.game.audio.charSelectMusic.stop();
		this.game.state.start("DiveKick");
	}
}