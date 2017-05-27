let game = new Phaser.Game(1024, 512, Phaser.CANVAS);

let GameState = {
	preload: function(){
		this.load.image('background', 'assets/img/back.jpeg');
		this.load.image('mainPlayer', 'assets/img/main.png');
		this.load.image('bullet', 'assets/img/shot.png');
	},
	create: function(){
		this.background = this.game.add.tileSprite(0, 0, 1024, 768, 'background');
		//this.background2 = this.game.add.sprite(this.background.width, 0, 'background');
		this.mainPlayer = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'mainPlayer');
		this.mainPlayer.anchor.setTo(0.5, 0.5);
		//this.mainPlayer.scale.setTo(-1, -1);
		this.mainPlayer.scale.setTo(0.8);// scale
		this.mainPlayer.angle = 90;
		this.physics.enable(this.mainPlayer, Phaser.Physics.ARCADE);
		this.cursors = this.input.keyboard.createCursorKeys();
		this.fireButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		this.bullets = this.game.add.group();
		this.bullets.enableBody = true;
		this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
		this.bullets.createMultiple(30, 'bullet');
		this.bullets.setAll('anchor.x', 0.5);
		this.bullets.setAll('anchor.y', 1);
		this.bullets.setAll('outOfBoundsKill', true);
		this.bullets.setAll('checkWorldBounds', true);

		
		this.bulletTime = 0;
	},
	update: function(){
		// this.mainPlayer.angle += 1;
		this.mainPlayer.scale.setTo(1);
		this.mainPlayer.scale.setTo(10);
		this.mainPlayer.scale.setTo(1);

		this.background.tilePosition.x -= 2;

		this.mainPlayer.body.velocity.x = 0;
		this.mainPlayer.body.velocity.y = 0;

		if(this.cursors.left.isDown){
			this.mainPlayer.body.velocity.x = -350;
		}
		if(this.cursors.right.isDown){
			this.mainPlayer.body.velocity.x = 350;
		}
		if(this.cursors.up.isDown){
			this.mainPlayer.body.velocity.y = -350;
		}
		if(this.cursors.down.isDown){
			this.mainPlayer.body.velocity.y = 350;
		}
		if(this.fireButton.isDown){
			fireBullet.call(this);
		}
	}
};

function fireBullet(){
	if(this.game.time.now > this.bulletTime){
		this.bullet = this.bullets.getFirstExists(false);

		if(this.bullet){
			this.bullet.reset(this.mainPlayer.x+60, this.mainPlayer.y+2);
			this.bullet.body.velocity.x = 800;
			this.bulletTime = this.game.time.now + 200; 
		}
	}
}

game.state.add('GameState', GameState);
game.state.start('GameState');