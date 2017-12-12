var x = 150; //used to place the circle's center x cordinate
var y = 150; //used to place the circle's center y cordinate
var dirX = 1; //used to change the circle's horizontal direction 
var dirY = 1; //used to change the circle's Vertical direction 
var speed = 3; //used to change the circle's speed  

function setup(){
    createCanvas(1200, 630);
    
}

function draw() {
    background(0);
    
    fill(255); //makes the Ellipse white
    ellipse(x, y, 50, 50); // elipse (50x50)

    x += dirX * speed; //changes the direction of the X cordinate with the determined speed 
    y += dirY * speed; //changes the direction of the Y cordinate with the determined speed
    if (y > height - 25 || y < 25) {
        //keeps the elipse inside of the canvas on 
        //the top and bottom edges of the canvas 
        dirY = -dirY;
            //reverses direction 
    }

    if (x > width - 25) {
        //keeps the ellipse inside of the right edge, 
        //there is no limit for the left edge because that
        //is where the ball is supposed to go out of the canvas.
        dirX = -dirX;
            //reverses direction 
    }
}

function mousePressed() {
    //When the mouse is pressed inside the ellipse the ellipse changes direction  

        if (x - 25 < mouseX && x + 25 > mouseX && y - 25 < mouseY && y + 25 > mouseY) {
            //sets the parameters of where the mouse is pressed in relation to the circle
            dirX = -dirX;
            speed = random(2, 5);
            //changes the speed of the ellipse as it is pressed

    }


    } 