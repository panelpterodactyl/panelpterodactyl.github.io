if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
} else {
  body.classList.add("light");
}

// Efek salju
const canvas = document.getElementById("snow-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 4 + 1,
    d: Math.random() * 100
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  for (let i = 0; i < 100; i++) {
    const p = particles[i];
    ctx.moveTo(p.x, p.y);
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  move();
}

let angle = 0;

function move() {
  angle += 0.01;
  for (let i = 0; i < 100; i++) {
    const p = particles[i];
    p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
    p.x += Math.sin(angle) * 2;

    if (p.x > canvas.width + 5 || p.x < -5 || p.y > canvas.height) {
      if (i % 3 > 0) {
        particles[i] = {
          x: Math.random() * canvas.width,
          y: -10,
          r: p.r,
          d: p.d
        };
      } else {
        if (Math.sin(angle) > 0) {
          particles[i] = {
            x: -5,
            y: Math.random() * canvas.height,
            r: p.r,
            d: p.d
          };
        } else {
          particles[i] = {
            x: canvas.width + 5,
            y: Math.random() * canvas.height,
            r: p.r,
            d: p.d
          };
        }
      }
    }
  }
}

setInterval(draw, 33);

