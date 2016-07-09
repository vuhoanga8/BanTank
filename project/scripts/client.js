class Client{
  constructor(){
    this.socket = io();
    this.id = this.socket.id;
    this.socket.on('connected', function(msg){
      TankOnline.onConnected(msg);
    });
    this.socket.on('other_players', function(msg){
      TankOnline.onReceivedOtherPlayersData(msg);
    });
    this.socket.on('new_player_connected', function(msg){
      TankOnline.onReceivedNewPlayerData(msg);
    });
    this.socket.on('player_moved', function(msg){
      TankOnline.onPlayerMoved(msg);
    });
    this.socket.on('player_fired', function(msg){
      TankOnline.onPlayerFired(msg);
    });
    this.socket.on('player_died', function(msg){
      TankOnline.onPlayerDied(msg);
    });
    this.socket.on('player_explore', function(msg){
      TankOnline.onPlayerExplore(msg);
    });
  }

  reportMove(id, direction, position){
    this.socket.emit('tank_moved', {
      id        : id,
      direction : direction,
      position  : position
    });
  }
  reportFire(id, direction, position){
    this.socket.emit('tank_fired', {
      id        : id,
      direction : direction,
      position  : position
    });
  }
  reportDie(id, killer)
  {
    this.socket.emit('tank_died', {
      id: id,
      killerId: killer
    });
  }
}
