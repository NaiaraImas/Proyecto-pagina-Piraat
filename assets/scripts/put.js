// Función para obtener los detalles de un videojuego por ID
async function obtenerDetallesVideojuego(id) {
    try {
        const response = await fetch(`http://localhost:5000/videojuegos/${id}`);
        if (response.ok) {
            const videojuego = await response.json();
            // Llenar el formulario con los datos del videojuego
            document.getElementById('nombre').value = videojuego.nombre;
            document.getElementById('descripcion').value = videojuego.descripcion;
            document.getElementById('precio').value = videojuego.precio || '';
            document.getElementById('requisitosMinimos').value = videojuego.requisitos_minimos || '';
            document.getElementById('requisitosRecomendados').value = videojuego.requisitos_recomendados || '';
        } else {
            console.error('Error al obtener los detalles del videojuego:', response.statusText);
            alert('Ocurrió un error al obtener los detalles del videojuego');
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Ocurrió un error en la solicitud al servidor');
    }
}

// Función para editar un videojuego por ID
async function editarVideojuego(id) {
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const precio = document.getElementById('precio').value;
    const requisitosMinimos = document.getElementById('requisitosMinimos').value;
    const requisitosRecomendados = document.getElementById('requisitosRecomendados').value;

    // Crear un objeto con los datos actualizados del videojuego
    const videojuegoActualizado = {
        nombre: nombre,
        descripcion: descripcion,
        precio: parseFloat(precio),
        requisitos_minimos: requisitosMinimos,
        requisitos_recomendados: requisitosRecomendados
    };

    try {
        const response = await fetch(`http://localhost:5000/videojuegos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(videojuegoActualizado)
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Videojuego actualizado:', data);
            // Actualizar la lista de videojuegos después de editar
            getVideojuegos();
            alert('Videojuego actualizado exitosamente');
        } else {
            console.error('Error al editar el videojuego:', response.statusText);
            alert('Ocurrió un error al editar el videojuego');
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Ocurrió un error en la solicitud al servidor');
    }
}
