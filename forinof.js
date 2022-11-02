array1=['gato', 'perro','foca'];
array2=['ana','juan',array1];
for(let array in array1){
    if(array ==2){
        for (let array of array1){
            document.write(array+'<br>')
        }
    } else{
        document.write(array2[array]+'<br>')
    }
    
}