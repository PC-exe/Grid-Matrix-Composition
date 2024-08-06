function setup() {
  createCanvas(400, 400);
  let cols = 9;
  let rows = 5;
  let size = 40;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (i === 4 && j === 1) {
        rect(i * size + 20, j * size + 20, size, size); // Different shape (rectangle)
      } else {
        ellipse(i * size + 20, j * size + 20, size, size);
      }
    }
  }
}
