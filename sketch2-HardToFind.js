function setup() {
  createCanvas(400, 400);
  let cols = 9;
  let rows = 5;
  let size = 40;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (i === 3 && j === 3) {
        fill(200); // Slightly different color
      } else {
        fill(255);
      }
      ellipse(i * size + 20, j * size + 20, size, size);
    }
  }
}
