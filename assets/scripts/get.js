// Función para obtener todos los videojuegos desde el servidor
async function getVideojuegos() {
    try {
        const response = await fetch('http://localhost:5000/videojuegos');
        if (!response.ok) {
            throw new Error('No se pudo obtener la lista de videojuegos');
        }
        const data = await response.json();
        displayVideojuegos(data); // Mostrar los videojuegos en el DOM
    } catch (error) {
        console.error('Error al obtener videojuegos:', error);
        alert('Ocurrió un error al obtener la lista de videojuegos');
    }
}

// Función para mostrar los videojuegos en el DOM
function displayVideojuegos(videojuegos) {
    const container = document.querySelector('.container-categories');
    container.innerHTML = '';
    videojuegos.forEach(videojuego => {
        const div = document.createElement('div');
        div.className = 'card-category';
        div.innerHTML = `
            <p>${videojuego.nombre}</p>
            <a href="#"><span>Ver Más</span></a>
            <a href="#" onclick="deleteVideojuego(${videojuego.id})"><span>Eliminar</span></a>
        `;
        container.appendChild(div);
    });
}

// Llamar a getVideojuegos al cargar la página o en el momento adecuado
document.addEventListener('DOMContentLoaded', () => {
    getVideojuegos();
});


// Función para eliminar un videojuego por ID
async function deleteVideojuego(id) {
    try {
        const response = await fetch(`http://localhost:5000/videojuegos/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log(`Videojuego con ID ${id} eliminado exitosamente`);
            // Actualizar la lista de videojuegos después de eliminar
            getVideojuegos();
            alert('Videojuego eliminado exitosamente');
        } else {
            console.error('Error al intentar eliminar el videojuego:', response.statusText);
            alert('Ocurrió un error al eliminar el videojuego');
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Ocurrió un error en la solicitud al servidor');
    }
}
