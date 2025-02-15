let alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let alfabetoInvertido = ["z","y","x","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a"];

let dato = "alex";
let dato_buscar = dato.split("");
let indices = [];

// Encontrar índices en el alfabeto
for (let i = 0; i < dato_buscar.length; i++) {
    let letra = dato_buscar[i];
    let indice = alfabeto.indexOf(letra);
    if (indice !== -1){
        indices.push(indice);    
    }
}

let encontrado = [];

// Buscar los índices en el alfabeto invertido
for (let i = 0; i < indices.length; i++) {
    let numero_Indice = indices[i];
    let letraInvertida = alfabetoInvertido[numero_Indice];
    if (letraInvertida !== undefined) {
        encontrado.push(letraInvertida);
        console.log(dato[i]+" <=> "+ indices[i]+" <=> "+ letraInvertida);
    }
}