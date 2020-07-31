function makeCalculate() {
    let count = 0;
    let rows = document.getElementById("inputHeight").value;
    let cell = document.getElementById("inputWight").value;
    let step  = document.getElementById("step").value;
    let x = document.getElementById("cordinateX").value;
    let y = document.getElementById("cordinateY").value;
    console.log(rows, cell);
    console.table( arr); 
    console.log(x, ',' ,y,',', step);
    for (let a = 0 ; a < step ; a++){
      
        for ( let i = 0; i < arr.length; i++){
            var arrLenght = arr[i];
            for( let j = 0; j < arrLenght.length; j++){  
            let countRed = 0;
            let countGreen= 0;
                 arr[i][j + 1] == 0 ? countGreen++ : countRed++;
                 arr[i][j-1] == 0 ? countGreen++ : countRed++;
                 if(i+1 != arrLenght.length){
                 arr[i+1][j-1] == 0 ? countGreen++ : countRed++;
                 arr[i+1][j] == 0 ? countGreen++ : countRed++;
                 arr[i+1][j+1] == 0 ? countGreen++ : countRed++;
                 }
                 if(i!=0){
                 arr[i-1][j-1] == 0 ? countGreen++ : countRed++;
                 arr[i-1][j] == 0 ? countGreen++ : countRed++;
                 arr[i-1][j+1] == 0 ? countGreen++ : countRed++;
                 }
                 arr2[i][j] = arr[i][j] == 0 ? 0 : 1;
                if(arr[i][j] == 1 && (countGreen == 3 || countGreen == 6 )){
                    arr2[i][j] = 0
                }
                if(arr[i][j] == 1 && countGreen != 3 && countGreen != 6 ){
                    arr2[i][j] = 1
                }
                if(arr[i][j] == 0 && (countGreen != 3 || countGreen != 6 || countGreen!=2)){
                    arr2[i][j] = 1
                }
                if(arr[i][j] == 0 && (countGreen == 3 || countGreen == 6 || countGreen == 2)){
                    arr2[i][j] = 0
                }
                    
            }
        }
            if(arr2[x][y] == 0){
                count++; 
            }
            for ( let b = 0; b < arr2.length; b++){
                var arr2Lenght = arr[b];
                for ( let c = 0; c < arr.length; c++){
                    arr[b][c] = arr2[b][c] == 0 ? 0 : 1;
                }
            }   
        }
   
    console.log( '#expected result', count); 
}