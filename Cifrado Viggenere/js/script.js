var viggenere = viggenere || (function(){

    var doStaff = function(txt, desp, action){
        var replace = (function(){
            var abc = ['a','b','c','d','e','f','g','h','i','j','k',
                    'l','m','n','ñ','o','p','q','r','s','t','u',
                    'v','w','x','y','z'];
            var l = abc.length;

            return function(c){
                var i = abc.indexOf(c.toLowerCase());
                if (i != -1) {
                    var pos = i;
                    if (action) {
                        pos += desp;
                        pos = (pos >= l) ? pos-l : pos;                                
                    }else{
                        pos -= desp;
                        pos = (pos < 0) ? l+pos : pos;
                    }
                    return abc[pos];
                }
                return c;
            };
        })();
        var re = (/([a-z-ñÑ])/ig);
        return String(txt).replace(re, function(match){
            return replace(match);
        });
    };
    return{
        encode : function(txt, desp){
            return doStaff(txt, desp, true);
        },

        decode : function(txt, desp){
            return doStaff(txt, desp, false);
        }
    };
})();

function longitudCifrar(){
    camposVacios();
    var texto = document.getElementById("txtC").value;
    var clave = document.getElementById("txtClave").value;
    if (clave.length > texto.length) {
        alert("Error, la clave es más larga que el texto a cifrar D:");
    }else{
        codificar(texto, clave);
    }
}

function longitudDescifrar() {
    camposVacios2();
    var texto = document.getElementById("txtC2").value;
    var clave = document.getElementById("txtClave2").value;
    if (clave.length > texto.length) {
        alert("Error, la clave es más larga que el texto a cifrar D:");
    }else{
        decodificar(texto, clave);
    }
}

function codificar(texto, clave){

    var resultado = "";
    var indiceClave = 0;
    var charArTexto = texto.split(''); 

    for (var i = 0; i < charArTexto.length; i++) {
        
        var des = obIndiceClave(clave.charAt(indiceClave));
        var charTexto = charArTexto[i];

        resultado += viggenere.encode(charTexto, (des >= 27) ? des%27 : des);
        indiceClave++

        if (indiceClave >= clave.length) {
            indiceClave = 0;
        }

    }

    document.getElementById("res").value = resultado;
}

function decodificar(texto, clave){

    var resultado2 = "";
    var indiceClave = 0;
    var charArTexto = texto.split('');

    for (var i = 0; i < charArTexto.length; i++){
        
        var des = obIndiceClave(clave.charAt(indiceClave));
        var charTexto = charArTexto[i];

        resultado2 += viggenere.decode(charTexto, (des >= 27) ? des%27 : des);
        indiceClave++

        if (indiceClave >= clave.length) {
            indiceClave = 0;
        }

    }

    document.getElementById("res2").value = resultado2;

}

function obIndiceClave(reco){
    var abc = ['a','b','c','d','e','f','g','h','i','j','k',
                'l','m','n','ñ','o','p','q','r','s','t','u',
                'v','w','x','y','z'];
    return abc.indexOf(reco.toLowerCase());
}

function camposVacios(){
    var cadena = document.getElementById("txtC").value;
    var clave = document.getElementById("txtClave").value;
    if (cadena == "") {
        alert("Error, ingrese su mensaje a codificar");
    }if (clave == "") {
        alert("Error, ingrese una clave válida")
    }

}

function camposVacios2(){
    var cadena2 = document.getElementById("txtC2").value;
    var clave2 = document.getElementById("txtClave2").value;
    if (cadena2 == "") {
        alert("Error, ingrese su mensaje a codificar");
    }if (clave2 == "") {
        alert("Error, ingrese una clave válida")
    }
    
}


function colocar(){
    var copiado = document.getElementById("res").value;
    document.getElementById("txtC").value = copiado;
}

function colocar(){
    var copiado = document.getElementById("res2").value;
    document.getElementById("txtC2").value = copiado;
}
