// Diccionario para encriptar texto
const encriptarReemplazos = {
    'q': 'm', 'w': 'n', 'e': 'b', 'r': 'v', 't': 'c',
    'y': 'x', 'u': 'z', 'i': 'ñ', 'o': 'l', 'p': 'k',
    'a': 'j', 's': 'h', 'd': 'g', 'f': 'f', 'g': 'd',
    'h': 's', 'j': 'a', 'k': 'p', 'l': 'o', 'ñ': 'i',
    'z': 'u', 'x': 'y', 'c': 't', 'v': 'r', 'b': 'e',
    'n': 'w', 'm': 'q'
};

// Invertir el diccionario para desencriptar
const desencriptarReemplazos = Object.fromEntries(
    Object.entries(encriptarReemplazos).map(([key, value]) => [value, key])
);

// Reemplazar caracteres en el texto según el diccionario
function reemplazarTexto(texto, reemplazos) {
    return texto.toLowerCase().replace(/[a-zñ]/g, match => reemplazos[match] || match);
}

// Encriptar el texto ingresado
function encriptarTexto() {
    const input = document.getElementById('inputText').value.trim();
    if (input === "") {
        alert("El campo de entrada está vacío.");
        return;
    }
    document.getElementById('outputText').value = reemplazarTexto(input, encriptarReemplazos);
}

// Desencriptar el texto ingresado
function desencriptarTexto() {
    const input = document.getElementById('inputText').value.trim();
    if (input === "") {
        alert("El campo de entrada está vacío.");
        return;
    }
    document.getElementById('outputText').value = reemplazarTexto(input, desencriptarReemplazos);
}

// Copiar el texto al portapapeles con feedback al usuario
async function copiarTexto() {
    const output = document.getElementById('outputText');
    try {
        await navigator.clipboard.writeText(output.value);
        alert("Texto copiado al portapapeles.");
    } catch (err) {
        alert("Error al copiar el texto.");
    }
}

// Asegurarse de que el DOM esté completamente cargado antes de agregar eventos
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('encryptButton').addEventListener('click', encriptarTexto);
    document.getElementById('decryptButton').addEventListener('click', desencriptarTexto);
    document.getElementById('copyButton').addEventListener('click', copiarTexto);
});
