const msj= 'Hola Mundo!'

for(i=0; i<3; i++){
    document.write(msj+'<br>');
}


//PARA SALTEAR//
for(i=0; i <= 5; i++){
    
    if(i==4){
        continue;
    }
    document.write(i+'<br>')
}

for(i=0; i<15; i++){
    if(i == 10){
        break;
    }
    document.write(i)
}