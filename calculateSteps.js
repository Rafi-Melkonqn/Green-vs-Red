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
        let arr2 = arr; 
        for ( let i = 0; i < arr2.length; i++){
            var arrLenght = arr2[i];
            for( let j = 0; j < arrLenght.length; j++){  
            let countRed = 0;
            let countGreen= 0;
                 arr2[i][j + 1] == 0 ? countGreen++ : countRed++;
                 arr2[i][j-1] == 0 ? countGreen++ : countRed++;
                 if(i+1 != arrLenght.length){
                 arr2[i+1][j-1] == 0 ? countGreen++ : countRed++;
                 arr2[i+1][j] == 0 ? countGreen++ : countRed++;
                 arr2[i+1][j+1] == 0 ? countGreen++ : countRed++;
                 }
                 if(i!=0){
                 arr2[i-1][j-1] == 0 ? countGreen++ : countRed++;
                 arr2[i-1][j] == 0 ? countGreen++ : countRed++;
                 arr2[i-1][j+1] == 0 ? countGreen++ : countRed++;
                 }
                if(arr2[i][j] == 1 && (countGreen == 3 || countGreen == 6 )){
                    arr[i][j] = 0
                }
                if(arr2[i][j] == 1 && countGreen != 3 && countGreen != 6 ){
                    arr[i][j] = 1
                }
                if(arr2[i][j] == 0 && (countGreen != 3 || countGreen != 6 || countGreen!=2)){
                    arr[i][j] = 1
                }
                if(arr2[i][j] == 0 && (countGreen == 3 || countGreen == 6 || countGreen == 2)){
                    arr[i][j] = 0
                }else
                    arr[i][j] = arr[i][j]
            }
            
        }
        if(arr[x][y] == 0){
            count++; 
        }   
    }
   
    console.log( '#expected result', count); 
}