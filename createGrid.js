arr = [];
function makeGrid() {
    let tbl = document.getElementById("grid");
    let rows = document.getElementById("inputHeight").value;
    let cell = document.getElementById("inputWight").value;
    for(let i = 0; i < rows; i++){
        let myRow = document.createElement("tr");
        myRow.id = "row" + i;
       arr[i] = [];
        tbl.appendChild(myRow);
        let roww = document.getElementById("row" + i);   
        for(let j = 0; j < cell; j++){
            let myCell = document.createElement("td");
            arr[i][j] = [];     
                myCell.id = myRow.id + j;
                myCell.setAttribute('onclick', 'changeColor(' + myCell.id + ','+ j +','+i+');');
            roww.appendChild(myCell);
        }
    }
}