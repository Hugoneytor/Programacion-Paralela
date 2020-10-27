//ALVAREZ GARCIA HUGO ZACHARIEL
document.querySelector('#calcularBtn').addEventListener('click', inicio);

function inicio(){

    let filasUno = Number(document.querySelector('#filasUno').value);
    let columnasUno = Number(document.querySelector('#columnasUno').value);
    let filasDos = Number(document.querySelector('#filasDos').value);
    let columnasDos = Number(document.querySelector('#columnasDos').value);

    if( columnasUno !== filasDos ){
        alert('El numero de columnas de la matriz 1 debe ser igual al número de filas de la segunda matriz');
        location.reload();
    }else{

        //Rellenar Matriz 1
        let matriz1 = rellenarMatriz1(filasUno, columnasUno);
        console.table(matriz1);
        //Rellenar matriz 2
        let matriz2 = rellenarMatriz2(filasDos, columnasDos);
        console.table(matriz2);

        let resultado = crearMatriz3(filasUno, columnasDos);

        calcular(resultado, matriz1, matriz2);
        console.table(resultado);


    }
 
}

function rellenarMatriz1(rows, columns){
    let matriz1 = [];
    for(let i = 0; i < rows; i++){
        matriz1.push([]);
    }
    for(let i = 0; i < rows; i++){
        for(let k = 0; k < columns; k++){
            matriz1[i].push(Math.trunc(Math.random()*10)+1);
        }
    }
    return matriz1;
}

function rellenarMatriz2(rows, columns){
    let matriz2 = [];
    for(let i = 0; i < rows; i++){
        matriz2.push([]);
    }
    for(let i = 0; i < rows; i++){
        for(let k = 0; k < columns; k++){
            matriz2[i].push(Math.trunc(Math.random()*10)+1);
        }
    }
    return matriz2;

}

function crearMatriz3(rows, columns){
    let matriz3 = [];
    for(let i = 0; i < rows; i++){
        matriz3.push([]);
    }
    for(let i = 0; i < rows; i++){
        for(let k = 0; k < columns; k++){
            matriz3[i].push(0);
        }
    }
    return matriz3;
}

function calcular(res, uno, dos){

    console.time('rellenar');
    
    for(let i = 0; i < res.length; i++){
        for(let k = 0; k < res[i].length; k++){
            for(let j = 0; j < res[i].length; j++){
                res[i][k] += (uno[i][j] * dos[j][k]);
                
            }
            
        }
    }
    console.timeEnd('rellenar');

    return res;

}



