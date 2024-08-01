# Frontend

## Descripción del Proyecto
Este es el frontend de una aplicación de gestión de tareas construida con Vue.js. Permite a los usuarios agregar, editar, eliminar y visualizar tareas, con la opción de marcar las tareas como completadas.

## Configuración del Proyecto

### Requisitos Previos
- Node.js
- Yarn (administrador de paquetes)

Instalación
Para instalar las dependencias del proyecto, ejecuta el siguiente comando:

yarn install

Variables de Entorno

Crea un archivo .env en la raíz del proyecto y define las siguientes variables de entorno que se encuentran dentro de .env-example, de ahí se obtiene la referencia para poder seguir.
Compilar y Recargar en Caliente para Desarrollo

Para iniciar el servidor de desarrollo con recarga en caliente, ejecuta:

bash

yarn serve

Compilar y Minificar para Producción

Para compilar el proyecto para producción, ejecuta:

bash

yarn build

Lint y Corrección de Archivos

Para ejecutar el linter y corregir archivos automáticamente, ejecuta:

bash

yarn lint

Uso de la Aplicación

    Agregar una Tarea: Haz clic en "Add a task +" y completa el formulario con el título y la descripción de la tarea.
    Editar una Tarea: Haz clic en el botón "Edit" junto a la tarea que deseas editar.
    Eliminar una Tarea: Haz clic en el botón "Delete" junto a la tarea que deseas eliminar.
    Marcar como Completada: Haz clic en el botón "Finish" para marcar una tarea como completada.

Estructura del Proyecto

    src/components: Contiene los componentes de Vue.js utilizados en la aplicación.
    src/views: Contiene las vistas principales de la aplicación.
    src/router: Configuración de las rutas de Vue Router.
    src/assets: Archivos estáticos como imágenes y estilos CSS.

Dependencias
Dependencias de Producción

    axios: ^1.7.2
    bootstrap: ^5.3.3
    bootstrap-vue: ^2.23.1
    bootstrap-vue-3: ^0.5.1
    core-js: ^3.8.3
    vue: ^3.2.13
    vue-router: ^4.0.13

Dependencias de Desarrollo

    @babel/core: ^7.12.16
    @babel/eslint-parser: ^7.12.16
    @types/web-bluetooth: ^0.0.20
    @vue/cli-plugin-babel: ~5.0.0
    @vue/cli-plugin-eslint: ~5.0.0
    @vue/cli-service: ~5.0.0
    eslint: ^7.32.0
    eslint-plugin-vue: ^8.0.3

Configuración Personalizada

Para más detalles sobre cómo personalizar la configuración, consulta la Referencia de Configuración.
Contribuciones

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

    Haz un fork del repositorio.
    Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
    Realiza tus cambios y haz un commit (git commit -am 'Agrega nueva funcionalidad').
    Sube tus cambios (git push origin feature/nueva-funcionalidad).
    Abre un Pull Request.

Licencia

Este proyecto está licenciado bajo la MIT License.


Este archivo README está formateado en Markdown y contiene toda la información necesaria para configurar, usar y contr
