// Lógica del desafío Amigo Secreto

let listaAmigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre !== "" && !listaAmigos.includes(nombre)) {
        listaAmigos.push(nombre);
        mostrarListaAmigos();
        input.value = "";
    } else {
        alert("Por favor, ingresa un nombre válido y que no esté repetido.");
    }
}

// Función para mostrar la lista de amigos
function mostrarListaAmigos() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = "";
    listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Debe haber al menos dos amigos para realizar el sorteo.");
        return;
    }

    let amigosAsignados = [...listaAmigos];
    let resultado = "";

    listaAmigos.forEach(amigo => {
        let posibles = amigosAsignados.filter(a => a !== amigo);
        if (posibles.length === 0) {
            alert("No se pudo realizar el sorteo. Intenta de nuevo.");
            return;
        }

        let index = Math.floor(Math.random() * posibles.length);
        let amigoSecreto = posibles[index];

        amigosAsignados = amigosAsignados.filter(a => a !== amigoSecreto);

        resultado += `${amigo} es el amigo secreto de ${amigoSecreto}.\n`;
    });

    document.getElementById('resultado').innerText = resultado;
}
