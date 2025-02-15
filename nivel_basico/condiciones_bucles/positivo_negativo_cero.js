// Escribe un programa que pida al usuario un número y determine si es positivo, negativo o cero.
function usuario() {
    let data = ["1","2","3","4","5","6","7","8","9","0","-1","-2","-3","-4"];
    let indice = Math.floor(Math.random() * data.length);    
    return data[indice];    
}
let numero = usuario();

if (numero < 0) {
    console.log(numero+" --> Es negativo.");        
}else if (numero > 0){
    console.log(numero+" --> Es positivo.");    
}else{
    console.log(numero+" --> Tiene el valor de cero");    
}