# LaLiga - Prueba

Aplicacion SPA con React que se conecta a una API [ReqRes](https://reqres.in/) con la cual puede autenticarse y acceder a un listado de usuarios con su Token correspondiente. Tambien se puede hacer la autenticacion mediante una cuenta de Google

La aplicacion consta de 2 rutas:

* /login - Formulario con la autenticacion del usuario y manejo de errores
Usuario Correcto:
Usuario : eve.holt@reqres.in
Contraseña : cityslicka

* /users - Listado de usuarios y Paginacion personalizada (pagina y elementos mostrados en pantalla)
He dejado comentado en **/src/app/pages/UserPage/index.js** el componente **UserUrlList** es una paginacion mediante rutas funcional pero he dejado <UserList /> ya que es una navegacion basada en Redux.

# Comenzando 🚀

Este proyecto fue iniciado con [Create React App](https://github.com/facebook/create-react-app).

```
npx create-react-app laliga
```

## Instalacion 🔧

Para poder ejecutar la apliacion necesitamos tener el node_modules disponible para ello deberemos hacer un:

```
npm install
```

## Scripts Disponibles 📦

En el directorio del proyecto ejecutar el siguiente comando para levantar la aplicacion:

```
npm start
```

Ejecuta la aplicación en el modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Construdio con: 🛠️

* [Redux](https://www.npmjs.com/package/redux) - Redux es un contenedor de estado predecible para aplicaciones de JavaScript.
* [React-redux](https://www.npmjs.com/package/react-redux) - Integracion con React
* [Redux-thunk](https://www.npmjs.com/package/redux-thunk) - Thunk middleware para Redux. Permite escribir funciones con lógica interna que pueden interactuar con los métodos dispatch y getState
* [React-router-dom@5.2.0](https://www.npmjs.com/package/react-router-dom/v/5.2.0) - DOM react-router
* [React-hook-form](https://www.npmjs.com/package/react-hook-form) - Libreria de ormularios eficaces, flexibles y extensibles con validación
* [Yup](https://www.npmjs.com/package/yup) - es un generador de esquemas de JavaScript para el análisis y la validación de valores
* [@Hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers) - Resolucion de la validacion de esquemas por yup para integrarlo con el React-hook-form (yupResolver)
* [Styled-components](https://styled-components.com/) - libreria de estilos basada en componentes
* Node-sass - Libreria de estilos 
* [Query-string](https://www.npmjs.com/package/query-string) - Analizar y clasifica cadenas de consulta de URL
* [Sweetalert2](https://sweetalert2.github.io/) - Cuadros emergentes personalizables js
* [Eslint](https://www.npmjs.com/package/eslint) - ESLint es una herramienta para identificar e informar sobre patrones encontrados en el código ECMAScript/JavaScript
* [Eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) - Desactiva todas las reglas que son innecesarias o que pueden entrar en conflicto con
* [Prettier](https://prettier.io/docs/en/install.html) - .Prettier es un formateador de código
* [React-loader-spinner](https://mhnpd.github.io/react-loader-spinner/) - Spinner para hacer un loading

## Estructura del proyecto 🛠️
.
├── librerias.txt
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── app
│   │   ├── actions
│   │   │   ├── auth.js
│   │   │   ├── list.js
│   │   │   └── ui.js
│   │   ├── App.js
│   │   ├── components
│   │   │   ├── Buttons
│   │   │   │   ├── ButonDanger
│   │   │   │   │   └── index.js
│   │   │   │   ├── ButtonPrimary
│   │   │   │   │   └── index.js
│   │   │   │   ├── UserListChangePage
│   │   │   │   │   └── index.js
│   │   │   │   └── UserListItemPagButtons
│   │   │   │       └── index.js
│   │   │   ├── FooterContainer
│   │   │   │   └── index.js
│   │   │   ├── Forms
│   │   │   │   ├── ErrorForm
│   │   │   │   │   └── index.js
│   │   │   │   ├── Form
│   │   │   │   │   └── index.js
│   │   │   │   └── FormControl
│   │   │   │       └── index.js
│   │   │   ├── LoginStyleComponent
│   │   │   │   ├── FabGoogle
│   │   │   │   │   └── index.js
│   │   │   │   ├── ImgLoginLiga
│   │   │   │   │   └── index.js
│   │   │   │   └── LoginContainer
│   │   │   │       └── index.js
│   │   │   ├── NavbarStyles
│   │   │   │   └── index.js
│   │   │   ├── Responsive
│   │   │   │   └── ResponsiveStylesComponents
│   │   │   │       └── index.js
│   │   │   ├── Spinner
│   │   │   │   └── index.js
│   │   │   ├── UserListItemCard
│   │   │   │   └── index.js
│   │   │   ├── UserSelectFilter
│   │   │   │   └── index.js
│   │   │   └── UsersStyleComponent
│   │   │       ├── HrUserList
│   │   │       │   └── index.js
│   │   │       ├── UserListContainer
│   │   │       │   └── index.js
│   │   │       └── UsersContainer
│   │   │           └── index.js
│   │   ├── containers
│   │   │   ├── Navbar
│   │   │   │   └── index.js
│   │   │   ├── UserList
│   │   │   │   └── index.js
│   │   │   └── UserUrlList
│   │   │       └── index.js
│   │   ├── firebase
│   │   │   └── firebase-config.js
│   │   ├── hooks
│   │   ├── pages
│   │   │   ├── LoginPage
│   │   │   │   └── index.js
│   │   │   └── UserPage
│   │   │       └── index.js
│   │   ├── reducers
│   │   │   ├── authReducer.js
│   │   │   ├── listReducer.js
│   │   │   └── uiReducer.js
│   │   ├── routers
│   │   │   ├── AppRouter.js
│   │   │   ├── PrivateRoute.js
│   │   │   └── PublicRoute.js
│   │   ├── store
│   │   │   └── store.js
│   │   ├── types
│   │   │   └── types.js
│   │   └── utils
│   │       ├── FetchFunctions.js
│   │       └── schemas-form.js
│   ├── assets
│   │   ├── laliga-login.jpeg
│   │   ├── lg.png
│   │   ├── logo-1.png
│   │   └── logo-liga.jpg
│   ├── index.js
│   └── styles
│       ├── base
│       │   ├── _base.scss
│       │   └── _settings.scss
│       ├── components
│       └── styles.scss
└── tree.text

De la estructura simplemente indicar que los components son componentes sin logica con los estilos de Style-components, la logica en los componentes solo puede estar en las Pages o los Containers.

## Autor ✒️

* **Mauricio Plaza Lopez** - *Dessarrollo Completo* - [Mauriplz](https://github.com/Mauriplz)

## Comentarios Adicionales 🎁

Muchas gracias por la oportunidad, espero que les guste.
🙂
