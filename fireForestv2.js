class Arbol{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
}

class Fuego{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
}

// Cambiar randomXY y minimoXY para elegir 
let fuegos=[];
let nuevosFuegos=[];
let arboles=[];
let arbolesaborrar=[];
let arr=[];
let parar=false;
let arbolesSinQuemar=null;
let minimoXY=3;
let randomXY=10;
let cont=0;

// Se genera dos coordenadas entre 0 y 10 para definir la matriz
let x=Math.floor((Math.random()*randomXY)+minimoXY);
let y=Math.floor((Math.random()*randomXY)+minimoXY);

console.log("🔥=2, 🌲=1  vacio=0 \n");

// EJECUCION PRINCIPAL Se ejecutan las funciones con un while mientras queden arboles


crearElTablero();

do{
quemar();
quitarDuplicados();
actualizarTablero();
mostrar();
}
while((arboles.length!=0))
    if(arboles.length==0 && parar==false){
        (cont==1) ? console.log(`Se tardaró ${cont} turno en quemar todos los árboles`) 
                  : console.log(`Se tardaron ${cont} turnos en quemar todos los árboles`);
        return cont;
}

if(arbolesSinQuemar!=null){
    return -1
}


// FUNCIONES
// se rellena la matriz con numeros al azar entre 0 y 2 (2 fuego, 1 árbol y 0 nada)
// se repite la funcion sino hay ningun arbol o fuego en el tablero
async function crearElTablero(){
do{        
for (let i=0;i<x;i++){
    arr[i]=[];
    for (let j=0;j<y;j++){
        arr[i][j]=Math.floor(Math.random()*3);
        if(arr[i][j]==2) {fuegos.push(new Fuego(i,j)) }
        if(arr[i][j]==1) {arboles.push(new Arbol(i,j)) }
    }
}
}
while(arboles==[] || fuegos==[])
console.log("INICIO");
console.log("-------");
console.log(arr);


}



//Verifica si al lado de los fuegos hay árboles, si los hay en el próximo turno los fuegos solo serán los arboles que acaban de quemarse,
// sino se quema nada y quedan arboles por quemarse retorna -1
async function quemar(){
    if(cont>0){
        fuegos=nuevosFuegos;
    }
    nuevosFuegos=[];
    for (let fuego of fuegos){
        for (let arbol of arboles){
            
            if (fuego.x == arbol.x && fuego.y == arbol.y+1){
                nuevosFuegos.push(new Fuego(arbol.x,arbol.y));
                arbolesaborrar.push(new Arbol(arbol.x,arbol.y));
                               
            }
                
            if (fuego.x == arbol.x && fuego.y == arbol.y-1){
                nuevosFuegos.push(new Fuego(arbol.x,arbol.y));   
                arbolesaborrar.push(new Arbol(arbol.x,arbol.y));


            }
            if (fuego.y == arbol.y && fuego.x == arbol.x-1){
                nuevosFuegos.push(new Fuego(arbol.x,arbol.y));   
                arbolesaborrar.push(new Arbol(arbol.x,arbol.y));


            }
            if (fuego.y == arbol.y && fuego.x == arbol.x+1){
                nuevosFuegos.push(new Fuego(arbol.x,arbol.y));   
                arbolesaborrar.push(new Arbol(arbol.x,arbol.y));


            }
        }
    
    }
    return nuevosFuegos;
}

// Elimina los duplicados de los arrays de árboles y fuegos
  function quitarDuplicados(){
    cont++;
    nuevosFuegos=  nuevosFuegos.filter((elem, index)=>
    nuevosFuegos.findIndex(obj=> (obj.x == elem.x) && (obj.y == elem.y))=== index);
   
    arbolesaborrar =  arbolesaborrar.filter((elem,index)=>
    arbolesaborrar.findIndex(obj=> (obj.x == elem.x) && (obj.y == elem.y))=== index);
    
console.log(nuevosFuegos);
    
}

// actualiza el tablero y elimina los arboles que se han quemado de su array
function actualizarTablero(){

     nuevosFuegos.forEach(coord=>{
        arr[coord.x][coord.y]=2;
    })
    
    arbolesaborrar.forEach((borrar)=>{
        arboles.forEach((arbol,indice,arrj)=>{
            if (arbol.x==borrar.x && arbol.y==borrar.y){
                    arrj.splice(indice,1);
            }
        })
    });
}


function mostrar(){
    console.log(`Minuto ${cont}`);
    console.log("---------");
    console.log(arr);   
    
    console.log("---ARBOLES QUEDAN EN ARRAY ACTUALIZADO------");
    console.log(arboles);
    
    if(nuevosFuegos.length==0){
        console.log("No se pueden quemar todos los árboles")
        arbolesSinQuemar=arboles.length;
        (arbolesSinQuemar==1) ? console.log(`Quedo 1 árbol sin quemar`) 
                              : console.log(`Quedaron ${arbolesSinQuemar} árboles sin quemar`);
        arbolesSinQuemar=arboles.length;
        arboles.length=0;
        parar=true;
        return -1
    }
}





