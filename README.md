# Tripleten web_project_around_react

Proyecto desarrollado durante el Bootcamp de Desarrollo Web de TripleTen, enfocado en la construcción de una aplicación interactiva con React.

Esta aplicación simula un perfil de usuario donde es posible visualizar tarjetas de lugares, y visualizar modales emergentes.

## 🚀 Características principales

* Creación de tarjetas desde Array
* Modales emergentes
* Botón de like en tarjetas
* Boton de eliminación de tarjetas
* Diseño responsive
* Estructura basada en componentes reutilizables
* Manejo de con Hooks (`useState, useEfect, useContext, useRef`)
* Peticiones API

## 🛠 Tecnologías utilizadas

* React
* JavaScript (ES6+)
* HTML
* CSS
* Vite
* Metodología BEM para organización de estilos

## 📁 Estructura del proyecto

```text
src/
 ├── assets/
 ├── components/
 │    ├── App.jsx
 │    ├── Footer/
 │    │    ├── Footer.jsx
 │    │    ├── Footer.css
 │    ├── Header/
 │    │    ├── Header.jsx
 │    │    ├── Header.css
 │    ├── Profile/
 │    │    ├── Profile.jsx
 │    │    ├── Profile.css  
 │    ├── Main/
 │    │    ├── Main.jsx
 │    │    ├── Main.css
 │    │    ├── Components/
 │    │    │    ├── Modal.jsx
 │    │    │    ├── Modal.css
 │    │    │    ├── Card/
 │    │    │    │    ├── Card.jsx
 │    │    │    │    ├── Card.css
 │    │    │    ├── Popup/
 │    │    │    │    ├── Form/
 │    │    │    │    │    ├── DeleteCard/
 │    │    │    │    │    │    ├── DeleteCard.jsx
 │    │    │    │    │    ├── EditAvatar/
 │    │    │    │    │    │    ├── EditAvatar.jsx
 │    │    │    │    │    │    ├── EditAvatar.css
 │    │    │    │    │    ├── EditProfile/
 │    │    │    │    │    │    ├── EditProfile.jsx
 │    │    │    │    │    │    ├── EditProfile.css
 │    │    │    │    │    ├── ModalImage/
 │    │    │    │    │    │    ├── ModalImage.jsx
 │    │    │    │    │    │    ├── ModalImage.css
 │    │    │    │    │    ├── NewCard/
 │    │    │    │    │    │    ├── NewCard.jsx
 │    │    │    │    │    │    ├── NewCard.css
 │    ────────────────────────────────────────────
 ├── index.css
 ├── main.jsx
```

## ⚙️ Instalación y ejecución local

Clona este repositorio:

```bash
git clone https://github.com/SCastrillon25/web_project_around_react.git
```

Ingresa a la carpeta del proyecto:

```bash
cd web_project_around_react
```

Instala las dependencias:

```bash
npm install
```

Ejecuta el proyecto en desarrollo:

```bash
npm run dev
```

Generar versión de producción:

```bash
npm run build
```

## 🌐 GitHub Pages

Este proyecto está configurado para despliegue mediante GitHub Pages utilizando Vite.

## 📌 Objetivo del proyecto

El objetivo principal de este proyecto fue reforzar conceptos fundamentales de React como:

* Componentes funcionales
* Props
* Hooks
* Renderizado dinámico
* Manejo de modales
* Arquitectura escalable de componentes

## 📄 Autor

Desarrollado por Sebastián Castrillón Osorio como parte del programa de Desarrollo Web en TripleTen.

