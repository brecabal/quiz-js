var arreglo = iniArreglo(10,10); 
//creo el robot con un constructor
function Robot( position_x , position_y){
  this.position_x = position_x;
  this.position_y = position_y;
  
  this.avanzar = function(){
    this.position_y += 1;
   
  }
  this.retroceder = function(){
    this.position_y -= 1;
  
  }
  this.derecha = function(){
    this.position_x += 1;
    
  }
  this.izquierda = function(){
    this.position_x -= 1;
  }
};
//recorro mi arreglo (10x10)
function iniArreglo(x ,y){
  var arreglo = []
  for (var i=0; i< x; i++){
    arreglo[i]= [];
    for(var j= 0; j< y; j++){
      arreglo[i].push(" ");
    }
  }
  return arreglo;
};
//posiciono el robot y le marco con una "R" para saber donde está
function posRobot(robot){
  
  arreglo[robot.position_x][robot.position_y] = "R";
};
// dibujo el tablero para visualizar las posiciones en mi matriz
function dibujarTablero(tablero){
   
 for (var i=0; i< tablero.length;i++){
    for( var j=0; j<tablero[i].length; j++){
      document.write("|" + tablero[i][j] + "|");
    }
   document.write("<br>")
  }
   
 };
//muevo mi robot con el arreglo segun las posiciones iniciales y las del robot
//esto claramente se puede hacer mejor, un codigo mas DRY 
 function mover(robot , x ,y , arreglo){
  var xInicial= robot.position_x;
  var yInicial = robot.position_y;
  if(x > xInicial){
    for(var i = xInicial; i<x; i++){
      
      arreglo[robot.position_x][robot.position_y] = "X";
      robot.derecha();
    }
  }else if(x < xInicial){
    for(var i = xInicial; i>=x; i--){
      arreglo[robot.position_x][robot.position_y] = "X";
      robot.izquierda();
    }
  }
  if(y > yInicial){
    for(var i = yInicial; i<y; i++){
      arreglo[robot.position_x][robot.position_y]= "X";
      robot.avanzar();
    }
  }else if(y < yInicial){
    for(var i = yInicial; i>=y; i--){
      arreglo[robot.position_x][robot.position_y]= "X";
      robot.retroceder();
    }
  }
 };
// deje mi creador de robot
var miRobot= new Robot(0,0);
//llamo funciones
posRobot(miRobot);
mover(miRobot, 3,2 ,arreglo);
posRobot(miRobot);
dibujarTablero(arreglo);



