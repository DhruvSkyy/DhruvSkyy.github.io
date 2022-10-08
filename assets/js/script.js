if (window.matchMedia('(max-width: 600px)').matches) {

  function nameFunction() {
    return false;
  }
} else {

  var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d');

  function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }

  canvas.width = Math.max(convertRemToPixels(18), (window.innerWidth * 0.15));
  canvas.height = window.innerHeight;

  width = Math.max(convertRemToPixels(18), (window.innerWidth * 0.15));
  height = window.innerHeight;

  area = width * height;

  var stars = [], // Array that contains the stars
    FPS = 60, // Frames per second
    x = area / 5000, // Number of stars
    mouse = {
      x: 0,
      y: 0
    };  // mouse location

  // Push stars to array

  for (var i = 0; i < x; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1 + 1,
      vx: Math.floor(Math.random() * 50) - 25,
      vy: Math.floor(Math.random() * 50) - 25
    });
  }

  // Draw the scene

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.globalCompositeOperation = "lighter";

    for (var i = 0, x = stars.length; i < x; i++) {
      var s = stars[i];

      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.fillStyle = 'black';
      ctx.stroke();
    }

    ctx.beginPath();
    for (var i = 0, x = stars.length; i < x; i++) {
      var starI = stars[i];
      ctx.moveTo(starI.x, starI.y);
      if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
      for (var j = 0, x = stars.length; j < x; j++) {
        var starII = stars[j];
        if (distance(starI, starII) < 150) {
          //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
          ctx.lineTo(starII.x, starII.y);
        }
      }
    }
    ctx.lineWidth = 0.05;
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }

  function distance(point1, point2) {
    var xs = 0;
    var ys = 0;

    xs = point2.x - point1.x;
    xs = xs * xs;

    ys = point2.y - point1.y;
    ys = ys * ys;

    return Math.sqrt(xs + ys);
  }

  // Update star locations

  function update() {
    for (var i = 0, x = stars.length; i < x; i++) {
      var s = stars[i];

      s.x += s.vx / FPS;
      s.y += s.vy / FPS;

      if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
      if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
    }
  }

  canvas.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // Update and draw

  function tick() {
    draw();
    update();
    requestAnimationFrame(tick);
  }

  tick();
}