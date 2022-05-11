/* Código JavaScript para página de formulario. 

Aquí se encuentra tanto validación del formulario como otras funciones utilizadas para su implementación. 

Por Valeria Vallejos Franciscangeli 
Para CC5002- Otoño 2022 */


/* =========================INICIO DEL DOCUMENTO================================ */


// Arreglos con las comunas por region ##########################

var tarapaca = [
    ["alto_hospicio", "Alto Hospicio"],
    ["camina", "Camiña"],
    ["colchane", "Colchane"],
    ["huara", "Huara"],
    ["iquique", "Iquique"],
    ["pica", "Pica"],
    ["pozo_almonte", "Pozo Almonte"]
];
var antofagasta = [
    ["antofagasta", "Antofagasta"],
    ["calama", "Calama"],
    ["maria_elena", "Maria Elena"],
    ["mejillones", "Mejillones"],
    ["ollague", "Ollagüe"],
    ["san_pedro_atacama", "San Pedro De Atacama"],
    ["sierra_gorda", "Sierra Gorda"],
    ["taltal", "Taltal"],
    ["tocopilla", "Tocopilla"]
];
var atacama = [
    ["alto_del_carmen", "Alto Del Carmen"],
    ["caldera", "Caldera"],
    ["chanaral", "Chañaral"],
    ["copiapo", "Copiapo"],
    ["diego_de_almagro", "Diego De Almagro"],
    ["freirina", "Freirina"],
    ["huasco", "Huasco"],
    ["tierra_amarilla", "Tierra Amarilla"],
    ["vallenar", "Vallenar"]
]
var coquimbo = [
    ["andacollo", "Andacollo"],
    ["canela", "Canela"],
    ["combarbala", "Combarbala"],
    ["coquimbo", "Coquimbo"],
    ["illapel", "Illapel"],
    ["la_higuera", "La Higuera"],
    ["la_serena", "La Serena"],
    ["los_vilos", "Los Vilos"],
    ["monte_patria", "Monte Patria"],
    ["ovalle", "Ovalle"],
    ["paihuano", "Paihuano"],
    ["punitaqui", "Punitaqui"],
    ["rio_hurtado", "Rio Hurtado"],
    ["salamanca", "Salamanca"],
    ["vicuña", "Vicuña"]
]
var ohiggins = [
    ["chepica", "Chepica"],
    ["chimbarongo", "Chimbarongo"],
    ["codegua", "Codegua"],
    ["coinco", "Coinco"],
    ["coltauco", "Coltauco"],
    ["doñihue", "Doñihue"],
    ["graneros", "Graneros"],
    ["la_estrella", "La Estrella"],
    ["las_cabras", "Las Cabras"],
    ["litueche", "Litueche"],
    ["lolol", "Lolol"],
    ["machali", "Machali"],
    ["malloa", "Malloa"],
    ["marchihue", "Marchihue"],
    ["mostazal", "Mostazal"],
    ["nancagua", "Nancagua"],
    ["navidad", "Navidad"],
    ["olivar", "Olivar"],
    ["palmilla", "Palmilla"],
    ["paredones", "Paredones"],
    ["peralillo", "Peralillo"],
    ["peumo", "Peumo"],
    ["pichidegua", "Pichidegua"],
    ["pichilemu", "Pichilemu"],
    ["placilla", "Placilla"],
    ["pumanque", "Pumanque"],
    ["quinta_de_tilcoco", "Quinta De Tilcoco"],
    ["rancagua", "Rancagua"],
    ["rengo", "Rengo"],
    ["requinoa", "Requinoa"],
    ["san_fernando", "San Fernando"],
    ["san_vicente", "San Vicente"],
    ["santa_cruz", "Santa Cruz"]
];
var valparaiso = [
    ["algarrobo", "Algarrobo"],
    ["cabildo", "Cabildo"],
    ["calle_larga", "Calle Larga"],
    ["cartagena", "Cartagena"],
    ["casablanca", "Casablanca"],
    ["catemu", "Catemu"],
    ["concon", "Concon"],
    ["el_quisco", "El Quisco"],
    ["el_tabo", "El Tabo"],
    ["hijuelas", "Hijuelas"],
    ["isla_de_pascua", "Isla De Pascua"],
    ["isla_juan_fernandez", "Isla Juan Fernandez"],
    ["la_calera", "La Calera"],
    ["la_cruz", "La Cruz"],
    ["la_ligua", "La Ligua"],
    ["limache", "Limache"],
    ["llaillay_/_llayllay", "Llaillay / Llayllay"],
    ["los_andes", "Los Andes"],
    ["nogales", "Nogales"],
    ["olmue", "Olmue"],
    ["panquehue", "Panquehue"],
    ["papudo", "Papudo"],
    ["petorca", "Petorca"],
    ["puchuncavi", "Puchuncavi"],
    ["putaendo", "Putaendo"],
    ["quillota", "Quillota"],
    ["quilpue", "Quilpue"],
    ["quintero", "Quintero"],
    ["rinconada", "Rinconada"],
    ["san_antonio", "San Antonio"],
    ["san_esteban", "San Esteban"],
    ["san_felipe", "San Felipe"],
    ["santa_maria", "Santa Maria"],
    ["santo_domingo", "Santo Domingo"],
    ["valparaiso", "Valparaiso"],
    ["villa_alemana", "Villa Alemana"],
    ["viña_del_mar", "Viña Del Mar"],
    ["zapallar", "Zapallar"]
];
var maule = [
    ["cauquenes", "Cauquenes"],
    ["chanco", "Chanco"],
    ["colbun", "Colbun"],
    ["constitucion", "Constitucion"],
    ["curepto", "Curepto"],
    ["curico", "Curico"],
    ["empedrado", "Empedrado"],
    ["hualañe", "Hualañe"],
    ["licanten", "Licanten"],
    ["linares", "Linares"],
    ["longavi", "Longavi"],
    ["maule", "Maule"],
    ["molina", "Molina"],
    ["parral", "Parral"],
    ["pelarco", "Pelarco"],
    ["pelluhue", "Pelluhue"],
    ["pencahue", "Pencahue"],
    ["rauco", "Rauco"],
    ["retiro", "Retiro"],
    ["rio_claro", "Rio Claro"],
    ["romeral", "Romeral"],
    ["sagrada_familia", "Sagrada Familia"],
    ["san_clemente", "San Clemente"],
    ["san_javier", "San Javier"],
    ["san_rafael", "San Rafael"],
    ["talca", "Talca"],
    ["teno", "Teno"],
    ["vichuquen", "Vichuquen"],
    ["villa_alegre", "Villa Alegre"],
    ["yerbas_buenas", "Yerbas Buenas"]
]
var biobio = [
    ["antuco", "Antuco"],
    ["arauco", "Arauco"],
    ["cabrero", "Cabrero"],
    ["cañete", "Cañete"],
    ["chiguayante", "Chiguayante"],
    ["concepcion", "Concepcion"],
    ["contulmo", "Contulmo"],
    ["coronel", "Coronel"],
    ["curanilahue", "Curanilahue"],
    ["florida", "Florida"],
    ["hualpen", "Hualpen"],
    ["hualqui", "Hualqui"],
    ["laja", "Laja"],
    ["lebu", "Lebu"],
    ["los_alamos", "Los Alamos"],
    ["los_angeles", "Los Angeles"],
    ["lota", "Lota"],
    ["mulchen", "Mulchen"],
    ["nacimiento", "Nacimiento"],
    ["negrete", "Negrete"],
    ["penco", "Penco"],
    ["quilaco", "Quilaco"],
    ["quilleco", "Quilleco"],
    ["san_pedro_de_la_paz", "San Pedro De La Paz"],
    ["san_rosendo", "San Rosendo"],
    ["santa_barbara", "Santa Barbara"],
    ["santa_juana", "Santa Juana"],
    ["talcahuano", "Talcahuano"],
    ["tirua", "Tirua"],
    ["tome", "Tome"],
    ["tucapel", "Tucapel"],
    ["yumbel", "Yumbel"]
];
var araucania = [
    ["angol", "Angol"],
    ["carahue", "Carahue"],
    ["cholchol", "Cholchol"],
    ["collipulli", "Collipulli"],
    ["cunco", "Cunco"],
    ["curacautin", "Curacautin"],
    ["curarrehue", "Curarrehue"],
    ["ercilla", "Ercilla"],
    ["freire", "Freire"],
    ["galvarino", "Galvarino"],
    ["gorbea", "Gorbea"],
    ["lautaro", "Lautaro"],
    ["loncoche", "Loncoche"],
    ["lonquimay", "Lonquimay"],
    ["los_sauces", "Los Sauces"],
    ["lumaco", "Lumaco"],
    ["melipeuco", "Melipeuco"],
    ["nueva_imperial", "Nueva Imperial"],
    ["padre_las_casas", "Padre Las Casas"],
    ["perquenco", "Perquenco"],
    ["pitrufquen", "Pitrufquen"],
    ["pucon", "Pucon"],
    ["puren", "Puren"],
    ["renaico", "Renaico"],
    ["saavedra", "Saavedra"],
    ["temuco", "Temuco"],
    ["teodoro_schmidt", "Teodoro Schmidt"],
    ["tolten", "Tolten"],
    ["traiguen", "Traiguen"],
    ["victoria", "Victoria"],
    ["vilcun", "Vilcun"],
    ["villarrica", "Villarrica"]
]
var lagos = [
    ["ancud", "Ancud"],
    ["calbuco", "Calbuco"],
    ["castro", "Castro"],
    ["chaiten", "Chaiten"],
    ["chonchi", "Chonchi"],
    ["cochamo", "Cochamo"],
    ["curaco_de_velez", "Curaco De Velez"],
    ["dalcahue", "Dalcahue"],
    ["fresia", "Fresia"],
    ["frutillar", "Frutillar"],
    ["futaleufu", "Futaleufu"],
    ["hualaihue", "Hualaihue"],
    ["llanquihue", "Llanquihue"],
    ["los_muermos", "Los Muermos"],
    ["maullin", "Maullin"],
    ["osorno", "Osorno"],
    ["palena", "Palena"],
    ["puerto_montt", "Puerto Montt"],
    ["puerto_octay", "Puerto Octay"],
    ["puerto_varas", "Puerto Varas"],
    ["puqueldon", "Puqueldon"],
    ["purranque", "Purranque"],
    ["puyehue", "Puyehue"],
    ["queilen", "Queilen"],
    ["quellon", "Quellon"],
    ["quemchi", "Quemchi"],
    ["quinchao", "Quinchao"],
    ["rio_negro", "Rio Negro"],
    ["san_juan_de_la_costa", "San Juan De La Costa"],
    ["san_pablo", "San Pablo"]
]
var aysen = [
    ["aysen_/_aisen", "Aysen / Aisen"],
    ["chile_chico", "Chile Chico"],
    ["cisnes", "Cisnes"],
    ["cochrane", "Cochrane"],
    ["coyhaique_/_coihaique", "Coyhaique / Coihaique"],
    ["guaitecas", "Guaitecas"],
    ["lago_verde", "Lago Verde"],
    ["o\'higgins", "O\'Higgins"],
    ["rio_ibañez", "Rio Ibañez"],
    ["tortel", "Tortel"]
];
var magallanes = [
    ["antártica", "Antártica"],
    ["cabo_de_hornos", "Cabo De Hornos"],
    ["laguna_blanca", "Laguna Blanca"],
    ["natales", "Natales"],
    ["porvenir", "Porvenir"],
    ["primavera", "Primavera"],
    ["punta_arenas", "Punta Arenas"],
    ["rio_verde", "Rio Verde"],
    ["san_gregorio", "San Gregorio"],
    ["timaukel", "Timaukel"],
    ["torres_del_paine", "Torres Del Paine"]
];
var santiago = [
    ["alhue", "Alhue"],
    ["buin", "Buin"],
    ["calera_de_tango", "Calera De Tango"],
    ["cerrillos", "Cerrillos"],
    ["cerro_navia", "Cerro Navia"],
    ["colina", "Colina"],
    ["conchali", "Conchali"],
    ["curacavi", "Curacavi"],
    ["el_bosque", "El Bosque"],
    ["el_monte", "El Monte"],
    ["estacion_central", "Estacion Central"],
    ["huechuraba", "Huechuraba"],
    ["independencia", "Independencia"],
    ["isla_de_maipo", "Isla De Maipo"],
    ["la_cisterna", "La Cisterna"],
    ["la_florida", "La Florida"],
    ["la_granja", "La Granja"],
    ["la_pintana", "La Pintana"],
    ["la_reina", "La Reina"],
    ["lampa", "Lampa"],
    ["las_condes", "Las Condes"],
    ["lo_barnechea", "Lo Barnechea"],
    ["lo_espejo", "Lo Espejo"],
    ["lo_prado", "Lo Prado"],
    ["macul", "Macul"],
    ["maipu", "Maipu"],
    ["maria_pinto", "Maria Pinto"],
    ["melipilla", "Melipilla"],
    ["ñuñoa", "Ñuñoa"],
    ["padre_hurtado", "Padre Hurtado"],
    ["paine", "Paine"],
    ["pedro_aguirre cerda", "Pedro Aguirre Cerda"],
    ["peñaflor", "Peñaflor"],
    ["peñalolen", "Peñalolen"],
    ["pirque", "Pirque"],
    ["providencia", "Providencia"],
    ["pudahuel", "Pudahuel"],
    ["puente_alto", "Puente Alto"],
    ["quilicura", "Quilicura"],
    ["quinta_normal", "Quinta Normal"],
    ["recoleta", "Recoleta"],
    ["renca", "Renca"],
    ["san_bernardo", "San Bernardo"],
    ["san_joaquin", "San Joaquin"],
    ["san_jose_de_maipo", "San Jose De Maipo"],
    ["san_miguel", "San Miguel"],
    ["san_pedro", "San Pedro"],
    ["san_ramon", "San Ramon"],
    ["santiago", "Santiago"],
    ["talagante", "Talagante"],
    ["til_til", "Til Til"],
    ["vitacura", "Vitacura"],
]
var rios = [
    ["corral", "Corral"],
    ["futrono", "Futrono"],
    ["la_union", "La Union"],
    ["lago_ranco", "Lago Ranco"],
    ["lanco", "Lanco"],
    ["los_lagos", "Los Lagos"],
    ["mafil", "Mafil"],
    ["mariquina", "Mariquina"],
    ["paillaco", "Paillaco"],
    ["panguipulli", "Panguipulli"],
    ["rio_bueno", "Rio Bueno"],
    ["valdivia", "Valdivia"],
];
var arica = [
    ["arica", "Arica"],
    ["camarones", "Camarones"],
    ["general_lagos", "General Lagos"],
    ["putre", "Putre"],
];
var nuble = [
    ["bulnes", "Bulnes"],
    ["chillan", "Chillan"],
    ["chillan_viejo", "Chillan Viejo"],
    ["cobquecura", "Cobquecura"],
    ["coelemu", "Coelemu"],
    ["coihueco", "Coihueco"],
    ["el_carmen", "El Carmen"],
    ["ninhue", "Ninhue"],
    ["ñiquen", "Ñiquen"],
    ["pemuco", "Pemuco"],
    ["pinto", "Pinto"],
    ["portezuelo", "Portezuelo"],
    ["quillon", "Quillon"],
    ["quirihue", "Quirihue"],
    ["ranquil", "Ranquil"],
    ["san_carlos", "San Carlos"],
    ["san_fabian", "San Fabian"],
    ["san_ignacio", "San Ignacio"],
    ["san_nicolas", "San Nicolas"],
    ["treguaco_/_trehuaco", "Treguaco / Trehuaco"],
    ["yungay", "Yungay"],
];

// #############################################################


// funcion para mostrar comunas por region ======================================

function input_comuna() {
    let region = document.getElementById('region').value;
    let respuesta = '<option value="" disabled selected>Seleccione una comuna</option>';

    // sumar las comunas por region----------------------------------------------------
    function sumarComunas(listaComunas) {
        let resultado = "";
        for (i = 0; i < listaComunas.length; i++) {
            resultado += '<option value="' + listaComunas[i][0] + '">' + listaComunas[i][1] + '</option>';
        }
        return resultado;
    }

    // condiciones ----------------------------------------------------

    if (region == "tarapaca") { respuesta += sumarComunas(tarapaca) }
    if (region == "antofagasta") { respuesta += sumarComunas(antofagasta) }
    if (region == "atacama") { respuesta += sumarComunas(atacama) }
    if (region == "coquimbo") { respuesta += sumarComunas(coquimbo) }
    if (region == "valparaiso") { respuesta += sumarComunas(valparaiso) }
    if (region == "ohiggins") { respuesta += sumarComunas(ohiggins) }
    if (region == "maule") { respuesta += sumarComunas(maule) }
    if (region == "biobio") { respuesta += sumarComunas(biobio) }
    if (region == "araucania") { respuesta += sumarComunas(araucania) }
    if (region == "lagos") { respuesta += sumarComunas(lagos) }
    if (region == "aysen") { respuesta += sumarComunas(aysen) }
    if (region == "magallanes") { respuesta += sumarComunas(magallanes) }
    if (region == "santiago") { respuesta += sumarComunas(santiago) }
    if (region == "rios") { respuesta += sumarComunas(rios) }
    if (region == "arica") { respuesta += sumarComunas(arica) }
    if (region == "nuble") { respuesta += sumarComunas(nuble) }

    // RESPUESTA----------------------------------------------------
    document.getElementById('comuna').innerHTML = respuesta;
}

//################ FECHAS #################

function fecha() {
    let n = new Date();
    let y = n.getFullYear();
    let m = n.getMonth() + 1;
    let d = n.getDate();
    let h = n.getHours();
    let mm = n.getMinutes();
    let t = n.getTime();
    let f = new Date(1000 * 60 * 60 * 3 + t);
    let ny = f.getFullYear();
    let nm = f.getMonth() + 1;
    let nd = f.getDate();
    let nh = f.getHours();
    let nmm = f.getMinutes();

    function norm(num) {
        if (num < 10) {
            return "0" + num;
        }
        return num;
    }

    // funcion que entrega fecha actual ===========================
    function pre_fecha() {
        document.getElementById('dia-hora-inicio').value = norm(d) + '-' + norm(m) + '-' + y + ' ' + norm(h) + ':' + norm(mm);
    }

    // funcion que entrega fecha actual + 3 hrs ====================
    function pos_fecha() {
        document.getElementById('dia-hora-termino').value = norm(nd) + '-' + norm(nm) + '-' + ny + ' ' + norm(nh) + ':' + norm(nmm);
    }

    pre_fecha();
    pos_fecha();
}

//################ caso de que se elija OTRO TEMA #################=========================

function nuevo_tema() {
    if (document.getElementById('tema').value == 'otro') {
        document.getElementById('otro_tema').innerHTML = '<label for="nuevo-tema">Otro tema:</label><input type="text" id="nuevo-tema"><br>';
    } else {
        document.getElementById('otro_tema').innerHTML = ''
    }
}

//################ VALIDACION #################================================================

function validateForm() {

    /* buscamos los inputs que necesitamos validar */
    let region = document.getElementById('region').value;
    let comuna = document.getElementById('comuna').value;
    let sector = document.getElementById('sector').value;
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let celular = document.getElementById('celular').value;
    let dia_hora_inicio = document.getElementById('dia-hora-inicio').value;
    let dia_hora_termino = document.getElementById('dia-hora-termino').value;
    let descripcion = document.getElementById('descripcion-evento').value;
    let tema = document.getElementById('tema').value;
    let fotos = document.getElementsByName('foto-actividad');

    /* Errors contendrá todos los errores que vayamos encontrando y luego los escribiremos según corresponda*/
    let errors = 'Su formulario tiene fallas:\n';

    /* llamadas a funciones validadoras ################################################################*/

    var valores = [validar_region(region),
    validar_comuna(comuna),
    validar_sector(sector),
    validar_nombre(nombre),
    validar_email(email),
    validar_celular(celular),
    validar_contacto(),
    validar_hora_inicio(dia_hora_inicio),
    validar_hora_termino(dia_hora_termino),
    validar_descripcion(descripcion),
    validar_tema(tema),
    validar_fotos(fotos)];

    /* calculamos decision final: válido (true) o inválido (false) */

    var res = true;
    var aux;

    for (i = 0; i < 12; i++) {
        // alert("entre en el for");
        aux = valores[i][0];
        // alert(" aux es: "+aux);
        res = res && aux;
        // alert("res es: "+res);
        errors += valores[i][1];
        // alert(errors);
        //alert(i);
    }

    /*Finalmente si hay errores lo escribimos en una alerta */
    if (!res) {
        alert(errors);
    }
    /* respuesta final de validateForm */
    return res;
}

/* funcion que valida que se haya seleccionado una de las regiones del menu ===========  */
function validar_region(region) {
    //alert("estoy validando region")
    if (region == "") {
        return [false, "- La selección de REGIÓN es OBLIGATORIA.\n"];
    }
    const regs = ["tarapaca", "antofagasta", "atacama", "coquimbo", "valparaiso", "ohiggins", "maule", "biobio", "araucania", "lagos", "aysen", "magallanes", "santiago", "rios", "arica", "nuble"];
    if (regs.includes(region)) {
        return [true, ""];
    }
    return [false, "- Por favor, seleccione una de las regiones del menú.\n"];
}

/* funcion que valida que se haya seleccionado una de las comunas del menu  ======================*/
function validar_comuna(comuna) {
    if (comuna == "") {
        return [false, "- La selección de COMUNA es OBLIGATORIA.\n"];
    }
    let coms = [tarapaca, antofagasta, atacama, coquimbo, valparaiso, ohiggins, maule, biobio, araucania, lagos, aysen, magallanes, santiago, rios, arica, nuble];

    for (i = 0; i < coms.length; i++) {
        for (j = 0; j < coms[i].length; j++) {
            if (coms[i][j].includes(comuna)) {
                return [true, ""];
            }
        }
    }
    return [false, "- Por favor, seleccione una de las comunas del menú.\n"];
}

/* funcion que valida que el sector cumpla con las condiciones pedidas (largo max 100) */
function validar_sector(sector) {
    let aux = sector.length <= 100;
    let mensaje = "";
    if (!aux) {
        mensaje = "- Ingrese un SECTOR de hasta 100 caracteres. (" + sector.length + " caracteres ingresados).\n";
    }
    return [aux, mensaje];
}

/* funcion que valida que el nombre cumpla con las condiciones pedidas (largo max 200) */
function validar_nombre(name) {
    if (name == "") {
        return [false, "- El ingreso de un NOMBRE es OBLIGATORIO.\n"];
    }
    let aux = name.length <= 200;
    let mensaje = "";
    if (!aux) {
        mensaje = "- Ingrese un NOMBRE de hasta 100 caracteres. (" + name.length + " caracteres ingresados).\n";
    }
    return [aux, mensaje];
}

/* funcion que valida que el email cumpla con las condiciones pedidas ======================*/
function validar_email(email) {
    if (email == "") {
        return [false, "- El ingreso de un CORREO ELECTRÓNICO es OBLIGATORIO.\n"];
    }
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regex.test(email)) {
        return [false, "- Ingrese un CORREO ELECTRÓNICO de formato válido. (hola@contacto.com)\n"];
    }

    return [true, ""];
}

/* funcion que valida que el celular sea de chile y empiece con el código de area +56, respetando espacios */
function validar_celular(celular) {
    let regex = /\D*([+56]\d [2-9])(\D)(\d{4})(\D)(\d{4})\D*/;
    if (celular != "") {
        if (!regex.test(celular)) {
            return [false, "- Ingrese un NÚMERO CELULAR con formato válido. (+56 9 1234 5678)\n"];
        }
    }
    return [true, ""];
}

/* funcion que cuenta cuantas redes sociales se agregaron ============================================*/
function contarRRSS(checkBoxes) {
    let contador = 0;
    let checkBox;
    for (i = 0; i < checkBoxes.length; i++) {
        checkBox = document.getElementById(checkBoxes[i]);
        if (checkBox.checked == true) {
            contador++;
        }
    }
    return contador;
}

/* funcion que chequea que si una red se selecciona, tenga usuario y del formato válido ===========*/
function tieneUsuario(checkBox, usuario) {
    let red = document.getElementById(checkBox);
    let user;
    if (red.checked == true) {
        user = document.getElementById(usuario).value;
        if (user = "" || user.length < 4 || user.length > 50) {
            return false;
        }
    }
    return true;
}

/* funcion que valida que los contactos dados cumplan con los requisitos =================================*/
function validar_contacto() {
    const checkBoxes = ["whatsapp", "telegram", "twitter", "instagram", "facebook", "tiktok", "otro"];
    const usuarios = ["whatsapp-usuario", "telegram-usuario", "twitter-usuario", "instagram-usuario", "facebook-usuario", "tiktok-usuario", "otro-usuario"];
    let mensaje = "";

    if (contarRRSS(checkBoxes) > 5) {
        mensaje += "- Debe seleccionar MÁXIMO 5 redes sociales de contacto.\n";
    }
    if (document.getElementById("otro").checked) {
        if (document.getElementById("otra-red").value == "") {
            mensaje += "- Debe ingresar el nombre de OTRA red social de contacto.\n";
        }
    }
    for (i = 0; i < checkBoxes.length; i++) {
        if (!tieneUsuario(checkBoxes[i], usuarios[i])) {
            mensaje += "- Debe ingresar un nombre de usuario / URL para el contacto " + checkBoxes[i].toUpperCase() + " de 4 hasta 50 caracteres.\n";
        }
    }
    return [mensaje == "", mensaje];
}

/* funcion que valida que la hora de inicio cumpla con los requisitos y que no sea vacio (OBLIGATORIO) ===========*/
function validar_hora_inicio(inicio) {
    if (inicio == "") {
        return [false, "- El ingreso de HORA DE INICIO es OBLIGATORIO.\n"];
    }

    let regex = /^(0[1-9]|1\d|2\d|3[01])-(0[1-9]|1\d|2\d|3[01])-(19|20)\d{2}\s+(0[0-9]|1[0-9]|2[0-3])\:(0[0-9]|[1-5][0-9])$/;

    if (!regex.test(inicio)) {
        return [false, "- Ingrese una HORA DE INICIO de formato válido. (dd-mm-aaaa hh:mm).\n"];
    }
    return [true, ""];
}

/* funcion que valida que la hora de termino cumpla con los requisitos ============================================ */
function validar_hora_termino(termino) {
    if (termino == "") {
        return [true, ""];
    }
    let regex = /^(0[1-9]|1\d|2\d|3[01])-(0[1-9]|1\d|2\d|3[01])-(19|20)\d{2}\s+(0[0-9]|1[0-9]|2[0-3])\:(0[0-9]|[1-5][0-9])$/;

    if (!regex.test(termino)) {
        return [false, "- Ingrese una HORA DE TÉRMINO de formato válido. (dd-mm-aaaa hh:mm).\n"];
    }
    return [true, ""];
}

/* funcion que valida la descripcion =============================================================================*/
function validar_descripcion(descripcion) {
    return [true, ""];
}

/* funcion que valida que el tema sea una de las opciones y si es "otro" que cumpla con los requisitos=========== */
function validar_tema(tema) {
    let temas = ["musica", "deporte", "ciencias", "religion", "politica", "tecnologia", "juegos", "baile", "comida"]
    if (temas.includes(tema)) {
        return [true, ""];
    }
    if (tema == "otro") {
        nuevo_tema = document.getElementById('nuevo-tema').value;
        if (nuevo_tema.length >= 3 && nuevo_tema.length <= 15) {
            return [true, ""];
        }
        return [false, "- Ingrese un NUEVO TEMA de 3 a 15 caracteres. (" + nuevo_tema.length + " caracteres ingresados).\n"];
    }
    return [false, "- El ingreso de TEMA es OBLIGATORIO.\n"];
}

/* funcion que valida que se ingrese MINIMO 1 FOTO y que sean de tipo fotos ============================================*/
function validar_fotos(fotos) { //recibe una lista con las fotos

    if (fotos.length > 5) {
        return [false, "- Solo puede ingresar un máximo de 5 imágenes."];
    }

    let foto;
    let filename;
    let extension;
    let allowedExtensionsRegx = /(\.jpg|\.jpeg|\.png)$/i; //regex de las extensiones de imagen permitidas
    let valida;
    let contadorFotos = fotos.length;

    for (i = 0; i < fotos.length; i++) {
        foto = fotos[i].files;
        if (foto.length == 0) {
            contadorFotos--;
        }
        if (foto.length != 0) { // si se ingresan fotos, chequeamos su extensión en el nombre
            filename = foto[0].name;  //obtenemos el nombre
            extension = filename.substr(filename.lastIndexOf(".")); // extraemos la extension
            valida = allowedExtensionsRegx.test(extension); // revisamos la extension con regex test
            if (!valida) {
                return [false, "- Por favor, ingrese solo imágenes de tipo válido. (.jpg, .jpeg,  .png) "];
            }
        }
    }
    if (contadorFotos == 0) {
        return [false, "- Por favor, ingrese al menos 1 imagen."];
    }
    return [true, ""];
}

//############## ===========funciones para agregar usuario de los contactos=========== ##############################

function showInput(checkBox, input) {
    // si se selecciona checkbox, pedir usuario/url
    if (checkBox.checked == true) {
        input.style.display = "block";
    } else {
        input.style.display = "none";
    }
}

function agregaUsuarioURL(idCheckBox, idInput) {
    // pedir los elementos por id
    let checkBox = document.getElementById(idCheckBox);
    let input = document.getElementById(idInput);

    showInput(checkBox, input);
}

// ###################### ===========agregar más imágenes ===========  ################################

let contador = 1;

/* Finalmente agregarImagen agrega un nuevo input de file y otro boton de agregar imagen al ser llamada, con un límite de 4.*/
function agregarImagen() {

    let contenedor;

    if (contador < 5) {
        contador += 1;
        contenedor = document.getElementById('contenedor-foto' + contador);
        contenedor.innerHTML += '<input type="file" id="foto-actividad' + contador + '" name="foto-actividad" accept="image/*"><br>';
    } else {
        alert("¡No se pueden agregar más fotos!");
    }
}

/* #####################################3fin del documento #####################################*/