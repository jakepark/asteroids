# Asteroids!

Use the arrow keys to control the ship.
UP to increase thrust,
DOWN to decrease thrust,
LEFT to turn the ship's heading left,
RIGHT to turn the ship's heading right.
SPACEBAR to fire main canon!!

You'll have to increase thrust when the ship's heading is turned in order for
your craft to move in the direction it's pointing.

Remember: in space, an object in motion stays in motion, until acted upon
by an external force!

The asteroids bump into each other. Blow them up outta your way!
Your bullets are incendiary. They will make any object in its path explode. (eventually)
You're going to need to double tap on some of the bigger asteroids..

Also, this quadrant of space-time has the topology of a toroidal surface,
so all the objects in view will appear to wrap from one viewing boundary to
another. Fear not, this is a feature of the two dimensional projection of
this plane of existence.


TECHNICAL FEATURES:

- [x] The enemy (red) ship AI targets and rotates towards the player's location. And then fires lots of bullets.
- [x] The players spawn with a 5 second grace period.
- [x] The players starts with shields at full capacity.
- [x] When shields are up, ships are impervious to collisions with asteroids or craft.
- [x] When shields are down, ships will blow up upon any collision.
- [x] The asteroids are spawned and generated to ensure no start position
have overlapping asteroids.
- [x] The asteroids have mass, proportional to its randomly generated radius.
- [x] The asteroids collide off each other in assuming a perfectly elastic collision, conservating momentum.
- [x] The asteroids waves respawn  5 seconds after the destruction of all enemies.
- [x] Bullets can be destroyed by other bullets.
- [x] Explosion sprites retain the same trajectory as the object prior to destruction.
