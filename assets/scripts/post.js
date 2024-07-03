// Función para crear un nuevo videojuego
async function crearNuevoVideojuego() {
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const precio = document.getElementById('precio').value;
    const requisitosMinimos = document.getElementById('requisitosMinimos').value;
    const requisitosRecomendados = document.getElementById('requisitosRecomendados').value;

    // Crear un objeto con los datos del nuevo videojuego
    const nuevoVideojuego = {
        nombre: nombre,
        descripcion: descripcion,
        precio: parseFloat(precio),
        requisitos_minimos: requisitosMinimos,
        requisitos_recomendados: requisitosRecomendados
    };

    try {
        const response = await fetch('http://localhost:5000/videojuegos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoVideojuego)
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Nuevo videojuego creado:', data);
            document.getElementById('formulario-videojuego').reset(); // Limpiar formulario
            getVideojuegos(); // Actualizar la lista de videojuegos mostrados
            alert('Videojuego creado exitosamente');
        } else {
            console.error('Error al crear el videojuego:', response.statusText);
            alert('Ocurrió un error al crear el videojuego');
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Ocurrió un error en la solicitud al servidor');
    }
}
