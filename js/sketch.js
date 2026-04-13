let centralModel;
let textures = [];
let orbitingObjects = [];
let myFont;

function preload() {
    centralModel = loadModel('assets/central.obj', true);
    myFont = loadFont('https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceSansPro-Bold.otf');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    noStroke();
    createTextures();
    setupLights();
    initOrbitingObjects();

    if (myFont) {
        textFont(myFont);
    }

    describe('Homework 13 interactive 3D artwork with an imported model, textured orbiting objects, and mouse-driven motion.');
}

function createTextures() {
    textures[0] = createGraphics(512, 512);
    textures[0].background(20, 30, 60);
    textures[0].noStroke();
    for (let i = 0; i < 200; i++) {
        textures[0].fill(120, 200, 255, random(120, 255));
        textures[0].circle(random(512), random(512), random(8, 25));
    }

    textures[1] = createGraphics(512, 512);
    textures[1].background(220, 100, 60);
    textures[1].stroke(255, 240, 180);
    textures[1].strokeWeight(5);
    for (let y = 20; y < 512; y += 40) {
        textures[1].line(0, y, 512, y);
    }

    textures[2] = createGraphics(512, 512);
    textures[2].background(30, 80, 30);
    textures[2].fill(255, 255, 100);
    textures[2].noStroke();
    for (let i = 0; i < 50; i++) {
        textures[2].ellipse(random(100, 420), random(100, 420), random(30, 120), random(20, 90));
    }

    textures[3] = createGraphics(512, 512);
    textures[3].background(10, 10, 40);
    textures[3].stroke(170, 100, 230);
    textures[3].strokeWeight(8);
    textures[3].noFill();
    for (let i = 0; i < 8; i++) {
        textures[3].ellipse(256, 256, 80 + i * 40, 80 + i * 40);
    }

    textures[4] = createGraphics(512, 512);
    textures[4].background(180, 40, 120);
    textures[4].noStroke();
    for (let i = 0; i < 100; i++) {
        textures[4].fill(255, random(130, 220), random(130, 220), 200);
        textures[4].rect(random(0, 512), random(0, 512), random(20, 80), random(10, 40));
    }
}

function setupLights() {
    ambientLight(80, 80, 90);
    pointLight(255, 240, 220, 300, -200, 150);
    pointLight(100, 180, 255, -300, 100, 250);
    directionalLight(200, 200, 255, -0.5, -1, -0.2);
}

function initOrbitingObjects() {
    const shapeTypes = ['box', 'sphere', 'cylinder', 'cone', 'torus'];

    for (let i = 0; i < shapeTypes.length; i++) {
        orbitingObjects.push({
            type: shapeTypes[i],
            textureIndex: i,
            x: random(-240, 240),
            y: random(-180, 180),
            z: random(-220, 220),
            speedX: random(0.008, 0.022),
            speedY: random(0.01, 0.03),
            speedZ: random(0.006, 0.018),
            offset: random(TWO_PI)
        });
    }
}

function draw() {
    background(18, 28, 48);
    orbitingObjects.forEach(obj => {
        obj.offset += 0.001;
    });

    setupCamera();
    drawBackgroundStars();
    drawCentralModel();
    drawOrbitingObjects();
    drawLabels();
}

function setupCamera() {
    const orbit = frameCount * 0.004;
    camera(
        sin(orbit) * 720,
        sin(frameCount * 0.0015) * 140 + 120,
        cos(orbit) * 720,
        0, 0, 0,
        0, 1, 0
    );
}

function drawBackgroundStars() {
    push();
    rotateY(frameCount * 0.0006);
    texture(textures[0]);
    plane(1600, 1200);
    pop();
}

function drawCentralModel() {
    push();
    rotateX(frameCount * 0.0025);
    rotateY(frameCount * 0.0035);
    scale(2.2);
    normalMaterial();
    model(centralModel);
    pop();
}

function drawOrbitingObjects() {
    for (let i = 0; i < orbitingObjects.length; i++) {
        const obj = orbitingObjects[i];

        push();
        translate(obj.x, obj.y, obj.z);
        rotateX(frameCount * obj.speedX + obj.offset);
        rotateY(frameCount * obj.speedY + obj.offset * 1.3);
        rotateZ(frameCount * obj.speedZ);
        texture(textures[obj.textureIndex]);
        ambientMaterial(255);

        switch (obj.type) {
            case 'box':
                box(90, 90, 90);
                break;
            case 'sphere':
                sphere(65, 48, 48);
                break;
            case 'cylinder':
                cylinder(50, 100, 32, 24);
                break;
            case 'cone':
                cone(55, 120, 32, 24);
                break;
            case 'torus':
                torus(75, 18, 64, 48);
                break;
        }
        pop();
    }
}

function drawLabels() {
    push();
    resetMatrix();
    fill(255, 220, 120);
    textAlign(CENTER, CENTER);
    textSize(32);
    text('INTERSTELLAR CRYSTAL', width / 2, 45);
    textSize(18);
    fill(200, 220, 255);
    text('by Grant Grady', width / 2, 80);
    pop();
}

function mouseClicked() {
    const moved = new Set();
    while (moved.size < 2) {
        moved.add(floor(random(orbitingObjects.length)));
    }

    moved.forEach(index => {
        orbitingObjects[index].x = random(-320, 320);
        orbitingObjects[index].y = random(-220, 220);
        orbitingObjects[index].z = random(-260, 260);
    });
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
