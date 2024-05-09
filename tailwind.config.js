module.exports = {
  darkMode: 'media',
  content: ['./public/login.html',
            './public/Egresado/bienvenidaE.html',
            './public/login.html', 
            './public/header.html',

            //VENTANAS PARA EGRESADO
            './public/Egresado/bienvenidaE.html',
            './public/Egresado/infoE.html',
            './public/Egresado/EncuestaInfo.html',
            '.public/Egresado/BolsaTrabajo.html',

            //VENTANAS DE GESTIÓN
            './public/GestionyVinculacion/bienvenidaGV.html',
            './public/GestionyVinculacion/generarReporte.html',
            './public/GestionyVinculacion/gestionCursos.html',
            './public/GestionyVinculacion/gestionEventos.html',
            './public/GestionyVinculacion/gestionUsuarios.html',
            './public/GestionyVinculacion/gestionVacantes.html',

            //VENTANAS DEL HEADER
            './public/header/curso.html',
            './public/header/eventos.html',
            './public/header/infoCurso.html',
            './public/header/infoEvento.html',
            './public/header/bolsa.html',

            //VISTA EMPLEADOR
            './public/Empleador/bienvenidaE.html',
            './public/Empleador/infoE.html',

            //PLUGIN
            './node_modules/flowbite/**/*.js'

],
  theme: {
    extend: {
      colors:{
        primaryITCH:'#280274',
        secondaryITCH: '#FE7A36',
        tertiaryITCH:'#E9F6FF',
        darkITCH:'#062048',
        blackITCH:'#000018',
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
