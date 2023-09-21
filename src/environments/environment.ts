// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlApiProveedorServicio2: 'http://localhost:8088/ProveedoresServicio/proveedores/v2/',
  urlToken: 'http://localhost:8088/ProveedoresServicio/token/generar',
  urlTokenV2: 'http://localhost:8088/ProveedoresServicio/token/validar-token',
  urlApiGeneralOrganizacion: 'http://localhost:8083/GeneralOrganizacion',
 //urlAutenticacion:'https://pruebas.dinissan.com.co/autenticacion-sigru/general/autenticacion/loginSigru',
 urlDownloadFiles:'http://localhost:38083/visualizador/archivo/descargar/',

  //urlApiProveedorServicio2: '/ProveedoresServicio/proveedores/v2/',
  //urlToken:'/ProveedoresServicio/token/generar',
  //urlTokenV2: '/ProveedoresServicio/token/validar-token',
  //urlApiGeneralOrganizacion: '/GeneralOrganizacion',
  urlAutenticacion:'/autenticacion-sigru/general/autenticacion/loginSigru',
  //urlDownloadFiles:'/descargar-archivos-proveedor/visualizador/archivo/descargar/',

  // proveedores:Servicios
  path: '/ProveedoresServicio',


  //etiquetas formularios
  usuario: 'Usuario',
  lbl_pass: 'Ingrese su contraseña'
  //msn

  //
}
