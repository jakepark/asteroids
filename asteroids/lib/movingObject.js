(function () {
  window.Asteroids = window.Asteroids || {};

  var MovingObject = Asteroids.MovingObject = function (attrs){
    this.pos = attrs.pos;
    this.vel = attrs.vel;
    this.radius = attrs.radius;
    this.color = attrs.color;
  };

  MovingObject.prototype.draw = function (ctx) {
    var ctx = ctx;
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function (){
    
  }
  // a = new MovingObject( {pos: [100, 100], vel: [5,5], radius: 50, color: "#000000"})

  MovingObject.prototype.start = function (canvasEl) {
      // get a 2d canvas drawing context. The canvas API lets us call
      // a `getContext` method on a canvas DOM element.
      var ctx = canvasEl.getContext("2d");

      // render at 60 FPS
      a.draw(ctx);
    //   window.setInterval((function () {
    //     a.draw(ctx);
    //   }).bind(this), 1000 / 60);
   };


})();
