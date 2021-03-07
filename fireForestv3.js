class Arbol{
    constructor(x,y,id){
        this.x=x;
        this.y=y;
        this.id=id;
    }
}

class Fuego{
    constructor(x,y,id){
        this.x=x;
        this.y=y;
        this.id=id;
    }
}
// cambiar randomXY para elegir numero rango random para filas y columnas de la matriz
let arr=[];
let arboles=[];
let fuegos=[];
let minimoXY=3;
let randomXY=10;
let cont=0;
let nuevosFuegos=[];
let parar=false;
let aislado=false;

// Se genera dos coordenadas entre 0 y 10 para definir la matriz
let x=Math.floor((Math.random()*randomXY)+minimoXY);
let y=Math.floor((Math.random()*randomXY)+minimoXY);

console.log("🔥=2, 🌲=1  vacio=0 \n");

    crearElTablero();
    arbolesAislados();
    if(aislado==false){
        do{ 
            quemar();
            actualizarTablero();
            mostrar();
            verificar();
            
            }
        while(arboles.length!=0)
        


        if(arboles.length==0 && parar==false){
            (cont==1) ? console.log(`Se tardarón ${cont} turno en quemar todos los árboles`) 
                      : console.log(`Se tardaron ${cont} turnos en quemar todos los árboles`);
                return cont;
            }

        if(parar==true){
                
            return -1
        }

    }
    else{
        console.log("al menos hay un árbol aislado no se podrán quemar todos");
        return -1
    }

// se rellena la matriz con numeros al azar entre 0 y 2 (2 fuego, 1 árbol y 0 nada)
// se repite la funcion sino hay ningun arbol o fuego en el tablero
async function crearElTablero(){
    let idArboles=0;
    let idFuegos=0;
    do{        
    for (let i=0;i<x;i++){
        arr[i]=[];
        for (let j=0;j<y;j++){
            arr[i][j]=Math.floor(Math.random()*3);
            if(arr[i][j]==2) {idFuegos++;
                              fuegos.push(new Fuego(i,j,idFuegos)) 
                            }

            if(arr[i][j]==1) {idArboles++;
                              arboles.push(new Arbol(i,j,idArboles)) 
                            
                             }
        }
    }
    }
    while(arboles==[] || fuegos==[])
    console.log("INICIO");
    console.log("-------");
    console.log(arr);
    console.log(arboles);
    console.log(fuegos);
    
    }
    // revisa si hay arboles que no tengan fuego ni otros arboles en norte, sur, este y oeste.
    // con que haya un solo arbol así se cierra y devuelve -1
    function arbolesAislados(){
        for (let i=0;i<x;i++){
            for (let j=0;j<y;j++){
     
                //esquina arriba izq
               if(i==0 && j==0){
                   
                    if ( arr[i][j]==1 && arr[i][j+1]==0 && arr[i+1][j]==0){
                        
                        aislado=true;
                        
                        return -1;
                    }
                }    
                    //esq arriba derecha
                else if (i==0 && j==y-1){
                   

                    if( arr[i][j]==1 && arr[i][j-1]==0 && arr[i+1][j]==0){
                      
                        aislado=true;
                        return -1;
                    }

                }
                // esquina abajo derecha
                else if(j==y-1 && i==x-1){
                   
                    if (arr[i][j]==1 && arr[i-1][j]==0 && arr[i][j-1]==0){
                       
                        aislado=true;
                        return -1;

                    }
                }
                // esquina abajo izq
                else if(i==x-1 && j==0){
                   
                    if (arr[i][j]==1  && arr[i][j+1]==0  && arr[i-1][j]==0){
                     
                        aislado=true;
                        return -1;
                    }
                }
                //izquierda
                else if(j==0){
                   
                    if(arr[i][j]==1 && arr[i-1][j]==0 && arr[i+1][j]==0 && arr[i][j+1]){
                    
                        aislado=true;
                        return -1;
                    }
                }
                
                // abajo
                else if(i==x-1){
                   

                    if (arr[i][j]==1 && arr[i][j-1]==0 && arr[i][j+1]==0){
                   
                        aislado=true;
                        return -1;
                    }
                }   
                 // arriba
                 else if (i==0){
                   

                    if  ( arr[i][j]==1 && arr[i][j-1]==0 && arr[i][j+1]==0 && arr[i+1][j]==0){
                        aislado=true;
                        return -1;
                    }
                }        
                // derecha
                else if (j==y-1){
                   

                    if (arr[i][j]==1 && arr[i-1][j]==0 && arr[i+1][j]==0 && arr[i][j-1]==0){
                      
                        aislado=true;
                        return -1;
                    }
                }
                //el resto de posiciones(posiciones interiores matriz)
                else{ 
                        if (arr[i][j]==1 && arr[i-1][j]==0 && arr[i+1][j]==0 && arr[i][j+1]==0 && arr[i][j-1]==0){
                         
                            aislado=true;
                            return -1;
                        }
                    }
                
               
            }
        }
    }


    async function quemar(){
     
        if(cont>0){
             fuegos=nuevosFuegos;
         }
         nuevosFuegos=[];
         

         for (let fuego of fuegos){
             for (let arbol of arboles){
                 
                 if ((fuego.x == arbol.x && fuego.y == arbol.y+1) || 
                 (fuego.x == arbol.x && fuego.y == arbol.y-1) || 
                 (fuego.y == arbol.y && fuego.x == arbol.x-1) || 
                 (fuego.y == arbol.y && fuego.x == arbol.x+1)){
                    
                    
                    nuevosFuegos.push(new Fuego(arbol.x,arbol.y,arbol.id));
                    var x = arboles.indexOf(arbol);
                    if(x!=-1){
                        arboles.splice(x,1);
                    }
                                       
                 }
                     
                 
             }
         
         }
         cont++;
         return nuevosFuegos;
        
     }
    
    


     function actualizarTablero(){

        nuevosFuegos.forEach(coord=>{
           arr[coord.x][coord.y]=2;
       })

    }
    function verificar(){
        if(nuevosFuegos.length==0 && arboles.length>0){
            console.log("No se pueden quemar todos los árboles");
            (arboles.length==1) ? console.log(`Quedo 1 árbol sin quemar`) 
                                    : console.log(`Quedaron ${arboles.length} árboles sin quemar`);
            
            parar=true;
            arboles.length=0;
            return -1
            
        }
    }

    
    function mostrar(){
        console.log(`Minuto ${cont}`);
        console.log("---------");
        console.log(arr);   
        
        console.log("---ARBOLES QUEDAN EN ARRAY ACTUALIZADO------");
        console.log(arboles);
        
    }
    



