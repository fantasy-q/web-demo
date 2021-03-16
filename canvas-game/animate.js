let animationId;

function animate() {
  /* ? */ animationId = requestAnimationFrame(animate);
  ctx.fillStyle = 'rgba(0,0,0,.1)'
  /* 清屏重绘 */ ctx.fillRect(0, 0, canvas.width, canvas.height);
  /* 绘制玩家 */ player.draw();

  /* particles */
  particles.forEach((particle, index) => {
    if (particle.alpha <= 0) {
      particles.splice(index, 1)
    } else {
      particle.update();
    }
  })

  /* projectiles */
  projectiles.forEach((projectile, index) => {
    projectile.update();

    /* remove edge of screen */
    if (
        /* L */ projectile.x + projectile.radius < 0 ||
        /* R */ projectile.x - projectile.radius > canvas.width ||
        /* U */ projectile.y + projectile.radius < 0 ||
        /* D */ projectile.y - projectile.radius > canvas.height
    ) {
      setTimeout(() => {
        projectiles.splice(index, 1);
      }, 0);
    }
  });

  enemies.forEach((enemy, enemyIndex) => {
    enemy.update();

    const distance = Math.hypot(
      player.x - enemy.x,
      player.y - enemy.y
    )
    /* end game */
    if (distance - enemy.radius - player.radius < 1) {
      // cancelAnimationFrame(animationId)
      enemies.splice(enemyIndex, 1);
      modalEl.style.display = 'flex';
      bigScoreEl.innerHTML = score;
    }

    projectiles.forEach((projectile, projectileIndex) => {
      // ?
      const distance = Math.hypot(
        projectile.x - enemy.x,
        projectile.y - enemy.y
      )

      /* when projectile touch enemy */
      if (distance - enemy.radius - projectile.radius < 1) {

        /* create explosions */
        for (let i = 0; i < enemy.radius * 2; i++) {
          let vFactor = 8;
          particles.push(
            new Particle(
              projectile.x,
              projectile.y,
              Math.random() * 2,
              enemy.color, {
              x: (Math.random() - 0.5) * (Math.random() * vFactor),
              y: (Math.random() - 0.5) * (Math.random() * vFactor),
            })
          )
        }

        if (enemy.radius - 10 > Enemy.size.min) {
          /* increase our score */
          score += 100;
          scoreEl.innerHTML = score;

          gsap.to(enemy, {
            radius: enemy.radius - 10
          })
          setTimeout(() => {
            projectiles.splice(projectileIndex, 1)
          }, 0);
        } else {
          /* remove from scene altogether */
          score += 250;
          scoreEl.innerHTML = score;

          enemies.splice(enemyIndex, 1);
          projectiles.splice(projectileIndex, 1)
        }

      }
    })
  });
}
