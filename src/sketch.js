export default (sketch) => {
  let y = 100;

  // The statements in the setup() function
  // execute once when the program begins
  sketch.setup = () => {
    // createCanvas must be the first statement
    sketch.createCanvas(720, 400);
    sketch.stroke(255); // Set line drawing color to white
    sketch.frameRate(30);
  }
  // The statements in draw() are executed until the
  // program is stopped. Each statement is executed in
  // sequence and after the last line is read, the first
  // line is executed again.
  sketch.draw = () => {
    sketch.background(0); // Set the background to black
    y = y - 1;
    if (y < 0) {
      y = sketch.height;
    }
    sketch.line(0, y, sketch.width, y);
  }
};
