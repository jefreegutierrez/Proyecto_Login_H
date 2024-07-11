<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./output.css">
    <style>
        /* Estilos para el modal */
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 20px;
            border: 1px solid #ccc;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body class="h-screen overflow-hidden flex items-center justify-center" style="background: #edf2f7;">
    <div class="flex h-screen">
        <!-- Right Pane -->
        <div class="w-full bg-white lg:w-1/2 flex items-center justify-center">
            <div class="max-w-md w-full p-6">
                <h1 class="text-3xl font-semibold mb-6 text-black text-center">Inicio de sesión</h1>
                <form id="loginForm" class="space-y-4">
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">Tu Email o Usuario</label>
                        <input type="text" id="email" name="email" class="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300">
                    </div>
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700">Tu contraseña</label>
                        <input type="password" id="password" name="password" class="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300">
                    </div>
                    <div class="text-right"><a href="#">Olvidé mi contraseña</a></div>
                    <div>
                        <button type="button" id="loginButton" class="w-full bg-green-600 text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Entrar</button>
                    </div>
                </form>
                <div class="mt-4 text-sm text-gray-600 text-center">
                    <a href="#" class="text-black hover:underline">Soporte — Términos de Uso — Política de Privacidad</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal para mensaje de éxito o error -->
    <div id="myModal" class="modal">
        <div id="modalContent" class="p-4">
            <!-- Contenido del modal se insertará dinámicamente -->
        </div>
    </div>

    <!-- JavaScript -->
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            // Elementos del formulario y del modal
            const loginForm = document.getElementById('loginForm');
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            const loginButton = document.getElementById('loginButton');
            const modal = document.getElementById('myModal');
            const modalContent = document.getElementById('modalContent');

            // Usuario y contraseña válidos (simulación)
            const validUser = 'usuario';
            const validPassword = 'password';

            // Función para mostrar el modal con el mensaje
            function showModal(message) {
                modal.style.display = 'block';
                modalContent.innerHTML = message;
            }

            // Función para ocultar el modal
            function closeModal() {
                modal.style.display = 'none';
            }

            // Evento click en el botón de login
            loginButton.addEventListener('click', function() {
                const email = emailInput.value.trim();
                const password = passwordInput.value.trim();

                // Verificación de usuario y contraseña
                if (email === validUser && password === validPassword) {
                    showModal('INGRESO EXITOSO');
                } else {
                    showModal('Usuario o contraseña incorrectos');
                }
            });

            // Evento click fuera del modal para cerrarlo
            window.addEventListener('click', function(event) {
                if (event.target === modal) {
                    closeModal();
                }
            });

            // Evento para cerrar el modal con la tecla Escape
            window.addEventListener('keydown', function(event) {
                if (event.key === 'Escape' && modal.style.display === 'block') {
                    closeModal();
                }
            });
        });
    </script>
</body>
</html>
