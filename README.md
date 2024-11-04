Esta es una API simple de tareas (To-Do) creada con Node.js y Express. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una lista de tareas, cada una identificada por un ID único.

## Requisitos
Para ejecutar esta aplicación, necesitas tener instalado:
- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [Docker](https://docs.docker.com/get-docker/) (opcional, para contenedores)

## Instalación

1. Clona este repositorio:
    ```bash
    git clone https://github.com/tu_usuario/nodejs-todo-app.git
    cd nodejs-todo-app
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. (Opcional) Para correr la aplicación en Docker:
    ```bash
    docker build -t nodejs-todo-app .
    docker run -p 3000:3000 nodejs-todo-app
    ```

## Uso

Para iniciar la API, ejecuta el siguiente comando en el directorio del proyecto:

```bash
node app.js
