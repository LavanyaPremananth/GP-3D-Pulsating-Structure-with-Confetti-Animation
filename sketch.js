//ideas fo for further development
//customise the sketch by adding different materials that are affected by the lights and add lights. Look at the p5.js documentation on lights and materials if needed. Can you add a different material only to the cubes and not the confetti. HINT think bav=ck to push() and Pop().

//Create some p5.js sliders to make some of your variables for the cube grid dynamic. For example the height of the cubes or the speed of the sine wave or potentially resolution of the 2d noise. 

var confLocs;
var confTheta;
var slider;

function setup() {
    createCanvas(900, 800, WEBGL);
   //camera location
    camera(800,-600,800,0,0,0,0,1,0);
    angleMode(DEGREES);
    
    confLocs = []; //to store the location of each confetti
    confTheta = []; //to store initial angle of each confetti.
    
    //slider to adjust the height of the cubes
    slider = createSlider(100, 300,200);
    slider.position(10, 10);
    
    for(var i=0; i<200; i++){
        random(-500,500);
        var a = random(-500,500);
        var b = random(-800,0);
        var c = random(-500,500);
        confLocs.push(createVector(a,b,c));
        confTheta.push(random(0,360));
    }
}

function draw() {
    background(0);

    normalMaterial();
    noStroke(0);
    strokeWeight(2);
    
    //camera to fly in circle around the structure
    var xLoc = cos(frameCount)*height;
    var zLoc = sin(frameCount)*height;
    camera(xLoc,-600,zLoc, 0,0,0,0,1,0);
    
    //creating a grid of boxes.
    for(var x= -400; x<400; x+=50){
        // print("x:"+x);
        for(var z = -400;z<400;z+=50){
            push();
            ambientLight(60);
            // add point light to showcase specular material
            
            let locX = mouseX - width / 2;
            let locY = mouseY - height / 2;
            pointLight(255, 255, 255, locX, locY, 50);
            //Material,stroke and stokeWeight
            specularMaterial(72,  61, 139);
            stroke(0);
            strokeWeight(2);
                        
            translate(x,0,z);
            //addition of frameCount to animate the wave.
            var distance = dist(0,0,x,z)+frameCount;
            var length = map(sin(distance),-1,1,100,slider.value());
            box(50,length,50);
            pop();
        }
    }
    confetti();
}

function confetti(){
    for(var i =0; i<confLocs.length;i++){
        push();
        translate(confLocs[i].x, confLocs[i].y, confLocs[i].z);
        rotateX(confTheta[i]);
        plane(15,15);
        
        //for confetti to keeps travelling downwards.
        confLocs[i].y += 1;
        //for confetti to keep spinning. 
        confTheta[i] += 10;
        
        if(confLocs[i].y > 0){
           confLocs[i].y = -800;
        }
        pop();
    }
}
