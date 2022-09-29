//CMDA - 5IV7
window.addEventListener("load", inicio, true);
//ahora hay que obtener cada valor del html
function inicio(){
    document.getElementById("mensaje").addEventListener("keyup",function(){
        this.value = this.value.toUpperCase()
    },true);

    document.getElementById("mensaje2").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase()
    },true);

    document.getElementById("cifrar").addEventListener("click",function(){
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("resultado").value = cifrar(texto,desplazamiento);        
    },true);

    document.getElementById("descifrar").addEventListener("click", function(){
        let texto2 = document.getElementById("mensaje2").value;
        let desplazamiento2 = document.getElementById("desplazamiento2").value;
        document.getElementById("resultado2").value = descifrar(texto2,desplazamiento2);
    },true);

    
}


function cifrar(texto, desplazamiento){
    let resultado = "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    desplazamiento = (desplazamiento % 26 + 26)%26;
    if(texto){
        for(let i = 0; i<texto.length; i++){
            if(letras.indexOf(texto[i])!=-1){
                let posicion  = ((letras.indexOf(texto[i])+desplazamiento)%26);
                resultado += letras[posicion];
            }else{
                resultado += texto[i];
            }
        }
    }
    return resultado;
}



function descifrar (texto2,desplazamiento2){
    let resultado2 = "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    

    desplazamiento2 = (desplazamiento2 % 26 - 26)%26;
    if(texto2){
        for(let i = 0; i<texto2.length; i++){
            if(letras.indexOf(texto2[i])!=-1){
                let posicion  = ((letras.indexOf(texto2[i])-desplazamiento2)%26);
                resultado2 += letras[posicion];
            }else{
                resultado2 += texto2[i];
            }
        }
    }
    return resultado2;

}

