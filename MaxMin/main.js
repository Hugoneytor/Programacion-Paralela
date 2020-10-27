//HUGO ZACHARIEL ALVAREZ GARCIA

//Funcion calcular para el metodo de min y max de los numeros
const calcular = () => {
    //Variables
    const cantidad = 1000;
    let numArray = [];
    let min, max;
    
    //Ciclo de generacion de los numeros aleatorios
    for(let i = 1; i <= cantidad; i++){
        const aleatorio = Math.trunc(Math.random()*1000+1);
        
        numArray.push(aleatorio);
    }

    //Metodo para ordenar el vector de menor a mayor
    console.time('ordenar')
    numArray.sort(function(a,b){
        return a - b;
    });
    console.timeEnd('ordenar');

    //impresion del array en consola
    console.log(numArray);

    //Obtener el minimo y el maximo del array
    console.time('MaxAndMin')
    min = numArray[0];
    max = numArray[cantidad-1];
    console.timeEnd('MaxAndMin')

    //Resultados del minimo y maximo en consola
    console.log(min);
    console.log(max);
}
//Llamada a la funcion para su ejecucion
calcular();
