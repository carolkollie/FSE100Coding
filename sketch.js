let bgImage;
let currentPage = 'home'; 
let button1, button2, button3, backButton;

function preload() {
  bgImage = loadImage('IMG_2204 2.jpg');
}

function setup() {
  createCanvas(1000, 600);

  //button to Game 1
  button1 = createButton('Page 1');
  button1.position(195, 350);
  button1.style('width', '210px');
  button1.style('height', '230px');
  button1.mousePressed(() => currentPage = 'page1');
  makeButtonInvisible(button1); 

  //button to Game 2
  button2 = createButton('Page 2');
  button2.position(425, 350);
  button2.style('width', '150px');
  button2.style('height', '230px');
  button2.mousePressed(() => currentPage = 'page2');
  makeButtonInvisible(button2); 

  //button to Game 3
  button3 = createButton('Page 3');
  button3.position(590, 350);
  button3.style('width', '210px');
  button3.style('height', '230px');
  button3.mousePressed(() => currentPage = 'page3');
  makeButtonInvisible(button3); 

  //Back button for games
  backButton = createButton('Back');
  backButton.position(900, 550);
  backButton.mousePressed(() => currentPage = 'home');
  backButton.hide();
}

function draw() {
  background(255);

  if (currentPage === 'home') {
    image(bgImage, 100, 10, 800, 600);
    button1.show();
    button2.show();
    button3.show();
    backButton.hide(); 
    
    textSize(32);           
    fill(0);                
    text('Welcome to your', 10, 90);
    text('home!', 10, 130);
    text('Choose a', 430, 160); 
    textSize(30); 
    text('room/activity to begin', 365, 200);
    text('with!', 455, 240);
    text('Game 1', 250, 300);
    text('Game 2', 440, 300);
    text('Game 3', 630, 300);

  } else if (currentPage === 'page1') {
    // Game 1
    background(100, 150, 200);
    textSize(32);
    fill(255);
    text('FACE MATCHING GAME', 500, 100);

    showBackButton();

  } else if (currentPage === 'page2') {
    // Game 2
    background(150, 200, 100);
    textSize(32);
    fill(255);
    text('This is Page 2', 400, 300);

    showBackButton();

  } else if (currentPage === 'page3') {
    // Game 3
    background(200, 100, 150);
    textSize(32);
    fill(255);
    text('This is Page 3', 400, 300);

    showBackButton();
  }
}

function showBackButton() {
  button1.hide();
  button2.hide();
  button3.hide();
  backButton.show();
}

function makeButtonInvisible(button) {
  button.style('background-color', 'transparent');
  button.style('border', 'none');  
  button.style('color', 'transparent');
}