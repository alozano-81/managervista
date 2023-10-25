// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlApi: 'http://localhost:8082/api/pruebaMB/entrar',

  urlApiClientes: 'http://localhost:8082/api/pruebaMB/get-all-clientes',

  urlApiLogin: 'http://localhost:8082/api/pruebaMB/validar-ingreso',
  
  //etiquetas formularios
  usuario: 'Usuario',
  lbl_pass: 'Ingrese su contraseña',
  //msn


  //credenciales
  user: 'admin',
  pass: 'admin'
}
