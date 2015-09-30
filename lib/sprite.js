(function() {
  window.Asteroids = window.Asteroids || {};

  // only required:  url, pos, size

  // var Sprite = Asteroids.Sprite = function (url, pos, size, speed, frames, dir, once) {
  var Sprite = Asteroids.Sprite = function (options) {
      this.url = options.url;
      this.pos = options.pos;
      this.size = options.size;
      this.speed = typeof speed === 'number' ? speed : 0;
      this.frames = options.frames;
      this.dir = options.dir || 'horizontal';
      this.once = options.once;
      this._index = 0;
  };

  Sprite.prototype = {
      update: function(dt) {
          this._index += this.speed*dt;
      },

      render: function(ctx) {
          var frame;

          if(this.speed > 0) {
              var max = this.frames.length;
              var idx = Math.floor(this._index);
              frame = this.frames[idx % max];

              if(this.once && idx >= max) {
                  this.done = true;
                  return;
              }
          }
          else {
              frame = 0;
          }


          var x = this.pos[0];
          var y = this.pos[1];

          if(this.dir == 'vertical') {
              y += frame * this.size[1];
          }
          else {
              x += frame * this.size[0];
          }

          ctx.drawImage(resources.get(this.url),
                        x, y,
                        this.size[0], this.size[1],
                        0, 0,
                        this.size[0], this.size[1]);
      }
  };

})();
