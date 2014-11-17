// TODO
game.PlayerEntity = me.Entity,extend({
   init: function(x, y, settings){
      this._super(me.Entity, 'init', [x, y, {
              image: "mario",
              spritewidth: "128",
              spriteheight: "128",
              width: "128",
              height: "128",
              getShape: function(){
                  return (new me.Rect(0, 0, 128, 128)).toPolygon();
              }
      }]);
  
      this.renderable.addAnimate("idle", [4]);
      this  .renderable.addAnimate("smallWalk", [8, 9, 10, 11, 12, 13], 80);
      
      this.renderable.setCurrentAnimation("idle"); 
    
       this.body.setVelocity(5, 20);
   },
    
    update: function(dt){
        if(me.input.isKeyPressed("right")){
        this.body.vel.x += this.body.accel.x * me.timer.tick;
        
    }else{
        this.body.vel.x = 0;
    }
    
    if(this.body.vel.x !== 0){
        if(!this.renderable.isCurrentAnimation("smallWalk")) {
        this.renderable.setCurrneetAnimation("smallWalk");
        this.renderable.setAnimattionFrame();
    }
    }else{
        this.renderable.setCurrentAnimation("idle"); 
    }
    
    this.body.update(delta);
    this._super(me.Entity, "update", [delta]);
    return true;
    }    
    
});