class Bullet{

  constructor(x,y){
    this.sprite = TankOnline.game.add.sprite(x,y, 'bulletRight');
    TankOnline.game.physics.arcade.enable(this.sprite);
  }
  update(direction){
    if(direction > 0){
      this.sprite.body.velocity.x = 300;
    }
  }
}
