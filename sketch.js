let palavra;

function setup() {
  createCanvas(400, 400);

  palavra = palavraAleatoria();
  
}

function palavraAleatoria() {
  
  let palavras = ["Mat!", "Matemá!", "Matemática"];
  
  return random(palavras);
}

function inicializaCores() {
  
  background("black");
  //fill("red");
  fill(random(0, 255), random(0, 255), random(0, 255)); // opção para trocar cor
  textSize(75);
  textAlign(CENTER, CENTER);
}

function draw() {
  
  inicializaCores();

  let maximo = width;
  let minimo = 0;
  // mouseX, 0, width ==> 0, palavra.length
  
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  //console.log(quantidade);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 200, 200);
  
}
