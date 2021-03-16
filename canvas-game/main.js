const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

const scoreEl = document.querySelector('#scoreEl');
const modalEl = document.querySelector('#modalEl');
const bigScoreEl = document.querySelector('#bigScoreEl');
const startNewGameBtn = document.querySelector('#startNewGameBtn');
let score = 0;

let player = new Player(centerX, centerY, 10, 'white');
let projectiles = [];
let enemies = [];
let particles = [];

function init() {
  player = new Player(centerX, centerY, 10, 'white');
  projectiles = [];
  enemies = [];
  particles = [];
  score = 0;
  scoreEl.innerHTML = 0;
  bigScoreEl.innerHTML = 0;
}

function spawnEnemies() {
  setInterval(() => {
    const radius = Math.random() *
      (Enemy.size.max - Enemy.size.min) + Enemy.size.min;
    let x, y;
    if (Math.random() < 0.5) {
      x = Math.random() < 0.5 ?
      /* 屏幕左侧 */ 0 - radius :
      /* 屏幕右侧 */ canvas.width + radius;
      y = Math.random() * canvas.height;

    } else {
      x = Math.random() * canvas.width;
      y = Math.random() < 0.5 ?
      /* 屏幕上方 */ 0 - radius :
      /* 屏幕下方 */ canvas.height + radius;
    }

    const color = `hsl(${Math.random() * 360}, 50%, 50%)`;

    const angle = Math.atan2(
      centerY - y,
      centerX - x,
    )
    const velocity = {
      x: Math.cos(angle),
      y: Math.sin(angle),
    }

    enemies.push(new Enemy(x, y, radius, color, velocity))
  }, 1000)
}

addEventListener('click', (event) => {
  const angle = Math.atan2(
    event.clientY - centerY,
    event.clientX - centerX,
  )

  let vFactor = 5;
  const velocity = {
    x: Math.cos(angle) * vFactor,
    y: Math.sin(angle) * vFactor,
  }
  projectiles.push(
    new Projectile(
      centerX, centerY, 5, 'white', velocity
    )
  )
  console.log(projectiles);
  console.log(enemies);
})

startNewGameBtn.addEventListener('click', () => {
  /* 初始化 */ init();
  animate();
  spawnEnemies();
  modalEl.style.display = "none";
})