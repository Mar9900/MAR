/*  ARCHIVO PRINCIPAL DEL SISTEMA*/
//_________________| CONSTANTES OBLIGATORIAS |_________________
const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();

app.listen(3000,(req,res)=>{
    console.log('\n\n\nSERVER RUNNING IN http://localhost:3000')
});


//_________________| DEFINICIÓN DE RECURSOS VISUALES |_________________
app.use('/css', express.static(__dirname+ '/public/css'));
app.use('/img', express.static(__dirname+ '/source/img'));
app.use('/js', express.static(__dirname+ '/JS'));


//_________________| DEFINICIÓN DE RUTAS GENERALES |_________________
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/login.html')
});
app.get('/header',(req,res)=>{
    res.sendFile(__dirname + '/public/header.html')
});
app.get('/cursos',(req,res)=>{
    res.sendFile(__dirname + '/public/header/cursos.html')
});
app.get('/InfoCurso',(req,res)=>{
    res.sendFile(__dirname + '/public/header/infoCurso.html')
});
app.get('/eventos',(req,res)=>{
    res.sendFile(__dirname + '/public/header/eventos.html')
});
app.get('/InfoEvento',(req,res)=>{
    res.sendFile(__dirname + '/public/header/infoEvento.html')
});
app.get('/bolsa',(req,res)=>{
    res.sendFile(__dirname + '/public/header/bolsa.html')
});
app.get('/vacante',(req,res)=>{
    res.sendFile(__dirname + '/public/header/infoVacante.html')
});
app.get('/cambiarContra',(req,res)=>{
    res.sendFile(__dirname + '/public/cambiarContra.html')
});
app.get('/verifCambioContra',(req,res)=>{
    res.sendFile(__dirname + '/public/verifCambioContra.html')
});
app.get('/encuestaSeg', (req, res)=>{
    res.sendFile(__dirname + '/public/header/encuestaGrande.html')
});
app.get('/encuestaDep', (req, res)=>{
    res.sendFile(__dirname + '/public/header/encuestaDep.html')
});
const routerApi = require('./APIS/routes');
app.use('/apis',routerApi);//montar las rutas para las api de Egresados


//_________________| RUTAS ESTABLECIDAS PARA VISTAS DE EGRESADO |_________________
app.get('/bienvenida',(req,res)=>{
    res.sendFile(__dirname + '/public/Egresado/BienvenidaE.html')
});
app.get('/infoE',(req,res)=>{
    res.sendFile(__dirname + '/public/Egresado/infoE.html')
});
app.get('/registro',(req,res)=>{
    res.sendFile(__dirname + '/public/Egresado/EncuestaInfo.html')
});
app.get('/CorreoE',(req,res)=>{
    res.sendFile(__dirname + '/public/Egresado/correoE.html')
});

//_________________| RUTAS ESTABLECIDAS PARA VISTAS DE GESTIÓN |_________________

app.get('/bienvenidaGV',(req,res)=>{
    res.sendFile(__dirname + '/public/GestionyVinculacion/BienvenidaGV.html')
});

app.get('/reporte',(req,res)=>{
    res.sendFile(__dirname + '/public/GestionyVinculacion/generarReporte.html')
});

app.get('/gestionCursos',(req,res)=>{
    res.sendFile(__dirname + '/public/GestionyVinculacion/gestionCursos.html')
});

app.get('/gestionEventos',(req,res)=>{
    res.sendFile(__dirname + '/public/GestionyVinculacion/gestionEventos.html')
});

app.get('/gestionVacantes', (req, res) => {
    res.sendFile(__dirname + '/public/GestionyVinculacion/gestionVacantes.html')
});
app.get('/gestionEmpresas',(req,res)=>{
    res.sendFile(__dirname + '/public/GestionyVinculacion/gestionEmpresas.html')
});

app.get('/gestUsuarios', (req, res) => {
    res.sendFile(__dirname + '/public/GestionyVinculacion/gestionUsuarios.html')
});
app.get('/gestionEncuesta', (req, res) => {
    res.sendFile(__dirname + '/public/GestionyVinculacion/gestionEncuestas.html')
});
app.get('/gestionGraficas', (req, res) => {
    res.sendFile(__dirname + '/public/GestionyVinculacion/grafica.html')
});

//_________________| RUTAS ESTABLECIDAS PARA VISTAS DE EMPLEADOR |_________________
app.get('/bienvenidaEmp',(req,res)=>{
    res.sendFile(__dirname + '/public/Empleador/bienvenidaEmp.html')
});
app.get('/gestVacantesEmp',(req,res)=>{
    res.sendFile(__dirname + '/public/Empleador/GestVacantesEmp.html')
});

app.get('/infoEmpresa', (req, res)=> {
    res.sendFile(__dirname + '/public/Empleador/infoEmpresa.html')
});


//_________________| RUTAS ESTABLECIDAS PARA VISTAS DE JEFE DEPARTAMENTO |_________________
app.get('/bienvenidaJefe',(req,res)=>{
    res.sendFile(__dirname + '/public/JefeDepto/bienvenidaJefe.html')
});

//_________________| DEFINICIÓN DE RUTAS PARA APIs DE BACK-END |_________________
/*const routerApiEgresados = require('./API/routesApiEgresados');
const routerApiGV = require('./API/routesApiGV');
const routerApiEmp = require('./API/routesApiEmp');
const routerApiJD = require('./API/routesApiJD');

const auth = require('./auth/authUsers');*/
// Importa la API de las gráficas
const routerApiGraficas = require('./APIS/routes');


//_________________| RUTAS ESTABLECIDAS PARA APIs POR USUARIO |_________________
/*app.use('/apisE',routerApiEgresados);//montar las rutas para las api de Egresados
app.use('/apisGV',routerApiGV);//montar las rutas para las api de GV
app.use('/apisEmp',routerApiEmp);//montar las rutas para las api de Empleadores
app.use('/apisJD',routerApiJD);//montar las rutas para las api de Empleadores*/

//Rutas establecidas para la APi de grafica
app.use('/api/grafica', routerApiGraficas);

//_________________| RUTAS ESTABLECIDAS PARA TODOS LOS USUARIOS |_________________
/*app.get('/Carreras',(req,res)=>{
    res.sendFile(__dirname + '/Public/Carreras.html')
});
app.get('/ListaEgresados',(req,res)=>{
    res.sendFile(__dirname + '/Public/ListaEgresados.html')
});
app.get('/ListaEgresados/Egresado',(req,res)=>{
    res.sendFile(__dirname + '/Public/Egresado.html')
});*/


//_________________| RUTAS ESTABLECIDAS PARA INDEX POR USUARIO |_________________
/*app.get('/bienvenida',auth.authUsersEgresadoAccessParam,(req,res)=>{
    res.sendFile(__dirname + '/Public/Egresados/BienvenidaE.html')
});

app.get('/bienvenidaGV',auth.authUsersAdminAccessParam,(req,res)=>{
    res.sendFile(__dirname + '/Public/GestionyVinculacion/BienvenidaGV.html')
});

app.get('/bienvenidaEmp',auth.authUsersEmpAccessParam, (req,res)=>{
    
    res.sendFile(__dirname + '/Public/Empleador/BienvenidaEmp.html')
});

app.get('/bienvenidaDpto',auth.authUsersJDAccessParam,(req,res)=>{
    res.sendFile(__dirname + '/Public/JefeDpto/BienvenidaDpto.html')
});


//_________________| RUTAS ESTABLECIDAS PARA LOGINS POR ACTOR |_________________
app.get('/loginE', (req,res)=>{
    res.sendFile(__dirname + '/Public/Egresados/SesionEgresado.html')
});
app.get('/loginEmp', (req,res)=>{
    res.sendFile(__dirname + '/Public/Empleador/SesionEmp.html')
});
app.get('/loginGV', (req,res)=>{
    res.sendFile(__dirname + '/Public/GestionyVinculacion/SesionGV.html')
});
app.get('/loginDpto', (req,res)=>{
    res.sendFile(__dirname + '/Public/JefeDpto/SesionDpto.html')
});



//_________________| RUTAS ESTABLECIDAS PARA VISTAS DE EGRESADO |_________________
app.get('/EncuestaInicial', (req,res)=>{
    res.sendFile(__dirname + '/Public/Egresados/EncuestaR.html')
});

app.get('/editarPerfil',(req, res) => {
    res.sendFile(__dirname + '/Public/Egresados/EditarPerfil.html')
});

app.get('/infoEgresado',(req, res) => {
    res.sendFile(__dirname + '/Public/Egresados/header.html')
});

app.get('/preguntaRep', (req,res)=>{
    res.sendFile(__dirname + '/Public/Egresados/PreguntaRep.html')
});

// Rutas para las paginas Eventos y Cursos
/*
app.get('/AvisosE', (req,res)=>{
    res.sendFile(__dirname + '/Public/GestionyVinculacion/CyE_GV.html')
});
*/

//GV
/*app.get('/GestCurso', (req,res)=>{
    res.sendFile(__dirname + '/Public/GestionyVinculacion/CyE_GV.html')
});

app.get('/GestEvento', (req,res)=>{
    res.sendFile(__dirname + '/Public/GestionyVinculacion/Eventos_GV.html')

});

app.get('/Avisos', (req,res)=>{
    res.sendFile(__dirname + '/Public/GestionyVinculacion/AvisosGV.html')
});

//JD
app.get('/AvisosJD', (req,res)=>{
    res.sendFile(__dirname + '/Public/JefeDpto/AvisosJD.html')
});

app.get('/JDCurso', (req,res)=>{
    res.sendFile(__dirname + '/Public/JefeDpto/Cursos_JD.html')
});

app.get('/JDEvento', (req,res)=>{
    res.sendFile(__dirname + '/Public/JefeDpto/Eventos_JD.html')
});

//Egresados
app.get('/vistaEgreCursos', (req,res)=>{
    res.sendFile(__dirname + '/Public/Egresados/AvisosE.html')
});
app.get('/CursosEgre', (req,res)=>{
    res.sendFile(__dirname + '/Public/Egresados/CyE_Egre.html')
});
app.get('/EventosEgre', (req,res)=>{
    res.sendFile(__dirname + '/Public/Egresados/EventosEgre.html')
});


//_________________| RUTAS ESTABLECIDAS PARA VISTAS DE GESTIÓN |_________________

app.get('/AvisosE', (req,res)=>{
    res.sendFile(__dirname + '/Public/GestionyVinculacion/CyE_GV.html')
});

app.get('/GestCurso', (req,res)=>{
    res.sendFile(__dirname + '/Public/GestionyVinculacion/CyE_GV.html')
});

app.get('/GestEvento', (req,res)=>{
    res.sendFile(__dirname + '/Public/GestionyVinculacion/Eventos_GV.html')
});

app.get('/AdminEmpresa', (req, res) => {
    res.sendFile(__dirname + '/Public/GestionyVinculacion/GestEmpresa.html')
});

app.get('/EmpleoGV', (req, res) => {
    res.sendFile(__dirname + '/Public/GestionyVinculacion/BolsaDeTrabajoGV.html')
});

app.get('/GestVacantes', (req, res) => {
    res.sendFile(__dirname + '/Public/GestionyVinculacion/GestVacanteGV.html')
});

*/
