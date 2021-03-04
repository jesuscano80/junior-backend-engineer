class Arbol{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
}
// cambiar randomXY para establecer maximo del número random de filas y columnas de la matriz
let arboles=[];
let arr=[];
let minimoXY=3;
let randomXY=50;

// Se genera dos coordenadas entre 0 y 10 para definir la matriz
let x=Math.floor((Math.random()*randomXY)+minimoXY);
let y=Math.floor((Math.random()*randomXY)+minimoXY);

console.log("🔥=2, 🌲=1  vacio=0 \n");


// se rellena la matriz con numeros al azar entre 0 y 2 (2 fuego, 1 árbol y 0 nada)
for (let i=0;i<x;i++){
    arr[i]=[];
    for (let j=0;j<y;j++){
        arr[i][j]=Math.floor(Math.random()*3);
    }
}



console.log("INICIO");
console.log("-------\n");
console.log(arr);

//Verificando si hay árboles al inicio
let hayArbolesInicio=(arr.flat().map((elem)=>elem==1));
const verdadero= (element) => element  == true;   

if(hayArbolesInicio.some(verdadero)==false){
    console.log("no hay arboles");
    return 0;

}



let cont=0;
let seguimosQuemando=true;
let seQuemoAlgo;

while(seguimosQuemando){
    check();
async function check(){
    try{
    arboles=[];
    seQuemoAlgo=false;

    for (let i=0;i<x;i++){
        for (let j=0;j<y;j++){
            if(arr[i][j]==2){
                if(j!==0){
                    if ((arr[i][j-1])==1){
                        seQuemoAlgo=true;
                        console.log(`Fuego activo en ${i}, ${j} está quemando el árbol que tiene a la izquierda`);
                        arboles.push(new Arbol (i,j-1));               
                    }
                }
                if(j!==y-1){
                    if((arr[i][j+1])==1){
                        seQuemoAlgo=true;
                        console.log(`Fuego activo en ${i}, ${j} está quemando el árbol que tiene a la derecha`);
                        arboles.push(new Arbol (i,j+1));
                    }
                }
                if(i!==0){
                    if((arr[i-1][j])==1){
                        seQuemoAlgo=true;
                        console.log(`Fuego activo en ${i}, ${j} está quemando el árbol que tiene arriba`);
                        arboles.push(new Arbol (i-1,j));
                    }
                }
                if(i!==x-1){
                    if((arr[i+1][j])==1){
                        seQuemoAlgo=true;
                        console.log(`Fuego activo en ${i}, ${j} está quemando el árbol que tiene debajo`);
                        arboles.push(new Arbol (i+1,j));
                    }
                }
            }
        }
}


}    
    catch(err){
        console.log(err);
    }
}
//al finalizar el minuto(la comprobación), cambiamos los arboles que se queman a fuego
for (let arbol of arboles){
    arr[arbol.x][arbol.y]=2;
}

cont++;
console.log(`Minuto ${cont}`);
console.log("-------");
console.log(arr);

//Verificando si quedan arboles por quemar
let resultadosArboles=(arr.flat().map((elem)=>elem==1));
const verdadero= (element) => element  == true;   

//Si queda alguno por quemar, pero en esta ronda no se quemó nada, es que no se podrán quemar 
if (resultadosArboles.some(verdadero) && seQuemoAlgo==false){
    (cont==1) ? console.log(`Tras ${cont} minuto no se pudo quemar todo`)
              : console.log(`Tras ${cont} minutos no se pudo quemar todo`);

        return -1;        
    }
    //si quedan arboles por quemar y se quemaron todavía en la última ronda
    else if(resultadosArboles.some(verdadero)){
        seguimosQuemando=true;
        console.log("quedan arboles por quemar seguimos!")        
    }
    else{
        (cont==1) ? console.log(`En ${cont} minuto se quemó todo`)
                  : console.log(`Tras ${cont} minutos se quemó todo`);
        return cont;
        
    }
}




