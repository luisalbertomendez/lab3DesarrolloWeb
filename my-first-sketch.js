// Setup code
function setup () {
    // Create a canvas 200px wide and 200px tall
    createCanvas(200, 200);
    background('red');
}
 
// Drawing code
function draw () {
    console.log('Hi from draw!');
    rect(0, 0, 50, 50);
    fill('#CC00FF');
    rect(0, 0, 50, 50);
    fill('#66CC66');
    ellipse(25, 25, 25, 25);
}
