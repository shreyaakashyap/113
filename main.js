function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    
}

function draw() {
    image(video, 0, 0, 640, 480);
    let c = color('orange');
    fill(c);
    noStroke();
    circle(20, 20, 40);
    rect(20,20,20,20);

    let d = color('orange');
    fill(d);
    noStroke();
    circle(20, 240, 40);

    let e = color('orange');
    fill(e);
    noStroke();
    circle(20, 450, 40);

    

    
    
    
}

function take_snapshot() {
    save("image.png");
}



