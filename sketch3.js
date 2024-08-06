function setup() {
  createCanvas(400, 400);
  let cols = 9;
  let rows = 5;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let size = random(30, 50); // Random size
      ellipse(i * 45 + 20, j * 45 + 20, size, size);
    }
  }
}
