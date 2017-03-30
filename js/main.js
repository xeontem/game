let game = new Phaser.Game(1024, 512, Phaser.CANVAS);

let GameState = {
	preload: function(){
		this.load.image('background', 'assets/img/back.jpeg');
		this.load.image('mainPlayer', 'assets/img/main.png');
	},
	create: function(){
		this.background = this.game.add.tileSprite(0, 0, 1024, 768, 'background');
		//this.background2 = this.game.add.sprite(this.background.width, 0, 'background');
		this.mainPlayer = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'mainPlayer');
		this.mainPlayer.anchor.setTo(0.5, 0.5);
		//this.mainPlayer.scale.setTo(-1, -1);
		this.mainPlayer.scale.setTo(0.8);// scale
		this.mainPlayer.angle = 90;
	},
	update: function(){
		// this.mainPlayer.angle += 1;
		this.mainPlayer.scale.setTo(1);
		this.mainPlayer.scale.setTo(10);
		this.mainPlayer.scale.setTo(1);

		this.background.tilePosition.x -= 2;
	}
};
game.state.add('GameState', GameState);
game.state.start('GameState');