
# Inventory Manager - Frontend

Este es el frontend para la gestión de inventarios, desarrollado con **React**, **TypeScript**, y varias bibliotecas modernas. Permite gestionar productos, administrar datos de inventario y visualizar información relevante a través de una interfaz amigable.

## Requisitos

Antes de comenzar, asegúrate de tener lo siguiente:

- [Node.js](https://nodejs.org/) (Versión recomendada: 16 o superior)
- Un navegador moderno (Chrome, Firefox, Edge, etc.)

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/IngenieroJosser/inventory_manager-frontend.git
   cd inventory_manager-frontend
   ```

2. **Instala las dependencias:**

   Usando `npm` o `yarn`:

   ```bash
   npm install
   ```

   O si prefieres usar `yarn`:

   ```bash
   yarn install
   ```

## Configuración de las variables de entorno

Copia el archivo `.env.example` a un nuevo archivo `.env`:

```bash
cp .env.example .env
```

Abre el archivo `.env` y configura las variables necesarias, como la URL de la API de tu backend:

```bash
REACT_APP_API_URL=http://localhost:5000
```

## Uso

Para iniciar el servidor en modo desarrollo:

```bash
npm start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Dependencias

Estas son las dependencias necesarias para el funcionamiento del proyecto:

- **react**: Librería de JavaScript para construir interfaces de usuario.
- **react-dom**: Biblioteca que permite a React interactuar con el DOM.
- **react-router-dom**: Enrutamiento para aplicaciones React.
- **axios**: Cliente HTTP para hacer solicitudes a la API.
- **primereact**: Componentes de interfaz de usuario basados en PrimeReact.
- **typescript**: Para usar TypeScript en el proyecto.
- **@types/react** y **@types/react-dom**: Tipos de TypeScript para React y ReactDOM.

Para instalar las dependencias:

```bash
npm install react react-dom react-router-dom axios primereact
npm install --save-dev typescript @types/react @types/react-dom
```

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de carpetas:

```
/src
  /components        # Componentes reutilizables
  /pages             # Páginas de la aplicación
  /services          # Servicios para interactuar con la API
  /styles            # Estilos globales y temas
  App.tsx            # Componente principal
  index.tsx          # Punto de entrada
  routes.tsx         # Definición de rutas
```

## Contribución

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b mi-feature`).
3. Realiza tus cambios y confirma (`git commit -am 'Agregué una nueva característica'`).
4. Empuja tu rama (`git push origin mi-feature`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Si tienes alguna pregunta, no dudes en contactarme.

Correo electrónico: ingenierojosser@example.com  
GitHub: [IngenieroJosser](https://github.com/IngenieroJosser)
