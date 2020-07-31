let color_value;
document.colors.onclick = function(){
     color_value = document.colors.color.value
     
}
function changeColor(value,x,y){
    if(color_value == 'Red'){
    arr[y][x]= 1;
    arr2[y][x]= 1;
    }else {
        arr[y][x]= 0;
        arr2[y][x]= 0;
    }
    document.getElementById(value.id).style.backgroundColor= color_value;
    
}