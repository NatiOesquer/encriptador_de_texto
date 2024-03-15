let salida= "";
let cajatex = "";

function validarTexto(texto) {
    // Expresión regular para verificar si el texto contiene caracteres no permitidos
    let regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function mostrarAlerta(titulo, mensaje, icono) {
    swal.fire({
        title: titulo,
        text: mensaje,
        icon: icono
    });
}

function encriptar(){
    salida = "";
    cajatex = document.querySelector('#cajatexto').value.toLowerCase(); // Convertir texto a minúsculas;
    let texto = cajatex.length;

    if  (texto == 0 || !validarTexto(cajatex)) {
        mostrarAlerta("Error", "DEBES INGRESAR ALGUN TEXTO VÁLIDO (solo letras minúsculas y espacios) PARA ENCRIPTAR!", "error");
        return
    }


document.getElementById("textosalida").removeAttribute("hidden");
document.getElementById("copia").removeAttribute("hidden");

for (let i = 0; i < texto; i++) {

    let cambio = "";

    sale=cajatex[i];

    if (sale == "a") {
        cambio = "ai";
        salida = salida+cambio;
    } else if (sale =="e"){
        cambio ="enter";
        salida = salida+cambio;
    } else if (sale =="i"){
        cambio ="imes";
        salida = salida+cambio;
    } else if (sale == "o"){
        cambio = "ober";
        salida = salida+cambio;
    } else if (sale == "u"){
        cambio = "ufat";
        salida = salida+cambio;
    }else {
        salida = salida+sale;
    }
}
document.getElementById('textosalida').value = salida;
return;
}

function desencriptar() {
    salida = "";
    cajatex = document.querySelector('#cajatexto').value.toLowerCase(); // Convertir texto a minúsculas;
    let texto = cajatex.length;

    
    if  (texto == 0 || !validarTexto(cajatex)) {
        mostrarAlerta("Error", "DEBES INGRESAR ALGUN TEXTO VÁLIDO (solo letras minúsculas y espacios) PARA DESENCRIPTAR!", "error");
        return;
    }

    document.getElementById("textosalida").removeAttribute("hidden");
    document.getElementById("copia").removeAttribute("hidden");

    for (let i = 0; i < texto; i++) {

        let cambio = "";

        sale=cajatex[i];

        if (sale == "a") {

            i++;
            sale=sale + cajatex[i];

            if (sale=="ai"){
                sale="a";
                salida=salida+sale;
            }
            salida=salida+cambio;

        }else if (sale == "e"){
            i++;
            sale=sale + cajatex[i];
            i++;
            sale=sale + cajatex[i];
            i++;
            sale=sale + cajatex[i];
            i++;
            sale=sale + cajatex[i];

            if (sale=="enter"){
                sale="e";
                salida=salida+sale;
            }
            salida=salida+cambio;

        }else if (sale == "i"){
            i++;
            sale=sale + cajatex[i];
            i++;
            sale=sale + cajatex[i];
            i++;
            sale=sale + cajatex[i];

            if (sale=="imes"){
                sale="i";
                salida=salida+sale;
            }
            salida=salida+cambio;

        }else if (sale == "o"){
            i++;
            sale=sale + cajatex[i];
            i++;
            sale=sale + cajatex[i];
            i++;
            sale=sale + cajatex[i];

            if (sale=="ober"){
                sale="o";

                salida=salida+sale;
            }
            salida=salida+cambio;

        }else if (sale == "u"){
            i++;
            sale=sale + cajatex[i];
            i++;
            sale=sale + cajatex[i];
            i++;
            sale=sale + cajatex[i];

            if (sale=="ufat"){
                sale="u";
                salida=salida+sale;
            }
            salida=salida+cambio;

        }else{
            salida=salida+sale;
        }
    }
    document.getElementById('textosalida').value = salida;
    return;

}

function copiartexto(){
    let content = document.getElementById('textosalida');
    content.select();
    document.execCommand('copy');
    mostrarAlerta("Copiado", "Texto Copiado!", "success");
    document.getElementById("textosalida").value ="";
    document.getElementById("cajatexto").value="";
    textosalida.setAttribute("hidden", "");
    copia.setAttribute("hidden", "");
}

