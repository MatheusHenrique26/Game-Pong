//  bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
const raio = diametro / 2

// Velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Criando Raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

//Criando Raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYRaquete;

//pontos
let meusPontos = 0;
let pontosOponente = 0;

//sons
let trilha;
let ponto;
let raquetada;

function preload(){
  trilha = loadSound('trilha.mp3')
  ponto = loadSound('ponto.mp3')
  raquetada = loadSound('raquetada.mp3')
}

function setup() {
  createCanvas(600, 400);

}

function draw() {
  background(0);
  mostraBolinha();
  velocidadeBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  verificarColisaoRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaRaqueteOponente();
  verificarColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  mostrarPontos();
  marcarPlacar();
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro)
}

function velocidadeBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
    if(xBolinha + raio> width || xBolinha - raio < 0 ){
    velocidadeXBolinha *= -1;
  }
  
  if(yBolinha + raio> height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}
function mostraRaquete(x,y){
  rect(x,y,larguraRaquete,alturaRaquete)
}
function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 5
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 5
  }
}
function verificarColisaoRaquete(x,y){
  if(xBolinha - raio < x + larguraRaquete && yBolinha - raio < y + alturaRaquete && yBolinha + raio > y && xBolinha + raio > x){
    velocidadeXBolinha *= -1
    
  }
}
function movimentaRaqueteOponente(){
  velocidadeYRaquete = yBolinha -  yRaqueteOponente  - larguraRaquete /2 - 30
  yRaqueteOponente +=  velocidadeYRaquete
  
}
function mostrarPontos(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150,10,40,20)
  fill(255);
  text(meusPontos,170,26);
  fill(color(255,140,0));
  rect(450,10,40,20)
  fill(255);
  text(pontosOponente,470,26);
}
function marcarPlacar(){
  if(xBolinha > 590){
    meusPontos += 1;
   
  }
  if(xBolinha < 10){
    pontosOponente += 1;
  
  }
}