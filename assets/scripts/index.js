const carrusel = document.querySelector('.carrusel-contenedor');
let index = 0;
const totalItems = 11; 
const intervalTime = 3000;

function mostrarSiguiente() {
    index = (index + 1) % totalItems;
    carrusel.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(mostrarSiguiente, intervalTime);


/*codigo para validar el formulario*/

document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById('loginButton');
    const registerButton = document.getElementById('registerButton');
    const toggleToRegister = document.getElementById('toggleToRegister');
    const toggleToLogin = document.getElementById('toggleToLogin');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');


    let registerOn = false;

    toggleToRegister.addEventListener('click', function (e) {
        e.preventDefault();
        registerOn = true;
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    toggleToLogin.addEventListener('click', function (e) {
        e.preventDefault();
        registerOn = false;
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

    loginButton.addEventListener('click', function (e) {
        e.preventDefault();
        const email = document.getElementById('emailLogin').value;
        const password = document.getElementById('passwordLogin').value;

        if (email === "" || password === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios.',
            });
        } else {
            const user = JSON.parse(localStorage.getItem(email));
            if (user && user.password === password) {
                Swal.fire({
                    icon: 'success',
                    title: '¡Bienvenido!',
                    text: 'Inicio de sesión exitoso.',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuario no registrado o contraseña incorrecta.',
                });
            }
        }
    });

    registerButton.addEventListener('click', function (e) {
        e.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('emailRegister').value;
        const password = document.getElementById('passwordRegister').value;

        if (firstName === "" || lastName === "" || email === "" || password === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios.',
            });
        } else {
            const user = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            };

            localStorage.setItem(email, JSON.stringify(user));

            Swal.fire({
                icon: 'success',
                title: '¡Registro Exitoso!',
                text: 'Usuario registrado correctamente.',
            });

            // Clear the form fields
            document.getElementById('firstName').value = '';
            document.getElementById('lastName').value = '';
            document.getElementById('emailRegister').value = '';
            document.getElementById('passwordRegister').value = '';
        }
    });
});

const botonComprar = document.getElementById('comparButton');
botonComprar.addEventListener("click", () => {
    Swal.fire({
        icon: 'success',
        title: '¡Compra Exitosa!',
        text: 'A disfrutar su Juego.',
    })
})

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('preview');
    preview.innerHTML = ''; // Clear previous preview

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            preview.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('imageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Imagen subida con éxito.');
});
