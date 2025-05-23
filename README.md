# 📟 Proyecto 1 — Calculadora Web

Una calculadora web interactiva desarrollada con React y Vite, con enfoque en buenas prácticas de desarrollo moderno, animaciones de partículas, pruebas unitarias, documentación en Storybook, y un diseño limpio y responsivo.

## Descripción

Este proyecto es una calculadora con las operaciones básicas, desarrollada con un enfoque modular usando componentes reutilizables, y probada con herramientas modernas como Vitest y Storybook. También incluye animaciones de fondo utilizando `tsparticles`.

## Tecnologías utilizadas

- **React**
- **Vite**
- **Vitest** + Testing Library
- **Storybook**
- **ESLint** (sin punto y coma)
- **react-tsparticles**
- **Git y GitHub**

## Estructura de carpetas importantes del proyecto

```bash
calculadora/
├── .storybook/              # Configuración de Storybook
├── public/                  # Archivos estáticos
├── src/
│   ├── calculator/          # Lógica principal
│   ├── components/          # Componentes (Button, Display, Keypad, etc.)
│   ├── examples/            # CalculatorWithHook (demo)
│   ├── hooks/               # useCalculator custom hook
│   ├── stories/             # Imágenes de documentación y soporte
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Punto de entrada
│   └── App.css              # Estilos generales
├── .gitignore
├── package.json
├── vite.config.js
├── README.md
````

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/DanielBarillasM/Proyecto-1_Calculadora_Web_22193.git
cd Proyecto-1_Calculadora_Web_22193/calculadora
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

Visita `http://localhost:5173` para ver la calculadora en acción.

### 4. Ejecutar pruebas

```bash
npm test
```

### 5. Corregir estilo de código

```bash
npm run lint:fix
```

### 6. Ver componentes en Storybook

```bash
npm run storybook
```

Visita `http://localhost:6006` para navegar los componentes de forma aislada.

## Funcionalidades principales

* Operaciones básicas: `+`, `-`, `*`, `/`, `%`
* Botón `C` para limpiar
* Soporte para signo con `+/-`
* Lógica encapsulada en `useCalculator.js`
* Mensaje de `ERROR` al exceder 9 dígitos o error matemático
* Partículas de fondo interactivas con `react-tsparticles`

## Pruebas y documentación

* **Tests unitarios:** Vitest + React Testing Library.
* **Documentación de componentes:** Storybook.
* **Accesibilidad y UX:** Controles con foco, animaciones no obstructivas, y buena visibilidad.

## Buenas prácticas aplicadas

* Código modular y reutilizable.
* Estructura clara y organizada.
* GitHub limpio usando `.gitignore`.

## Autor

**Pablo Daniel Barillas Moreno**
[GitHub @DanielBarillasM](https://github.com/DanielBarillasM)

---

**Este proyecto fue desarrollado como parte del curso de desarrollo web, ¡gracias por calificar!.**
