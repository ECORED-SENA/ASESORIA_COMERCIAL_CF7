(function(e){function a(a){for(var o,t,c=a[0],l=a[1],d=a[2],s=0,u=[];s<c.length;s++)t=c[s],Object.prototype.hasOwnProperty.call(i,t)&&i[t]&&u.push(i[t][0]),i[t]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,t=1;t<n.length;t++){var c=n[t];0!==i[c]&&(o=!1)}o&&(r.splice(a--,1),e=l(l.s=n[0]))}return e}var o={},t={app:0},i={app:0},r=[];function c(e){return l.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6",tema7:"tema7",tema8:"tema8",tema9:"tema9"}[e]||e)+"."+{actividad:"45d13085","chunk-0206bfa0":"e5a86db8","chunk-0c047e41":"f123eef6","chunk-13a6037e":"b744d8a0","chunk-25b302c8":"e864c3ed","chunk-26fc7596":"637c2a47","chunk-2c06842c":"4e5a122a","chunk-2d0e96ec":"22489828","chunk-2d208d90":"017960a0","chunk-2d21d0e2":"142de8a1","chunk-2d22c123":"a9afb052","chunk-2d2747e2":"8f93a0f4","chunk-2e80bb9a":"ecd56ed4","chunk-319206de":"697f3adb","chunk-32334cb6":"92fb8bbe","chunk-3c57cd7b":"f10fb121","chunk-4cdd78c0":"6fc0a2ea","chunk-4f2d402a":"a2d2893f","chunk-4fde0a08":"b557ad34","chunk-515a8379":"4acc8e91","chunk-53ccb27e":"1e4a7d5d","chunk-59974754":"1e02b68a","chunk-6e1e538a":"e4d442bf","chunk-766a929b":"e0414eb4","chunk-c796899c":"72c9d9c9","chunk-e8a7823a":"9a63919f","chunk-f2df7d2c":"40c34026","chunk-fde47172":"9845b3a7",comple:"06f1a515",creditos:"79211cbe",glosario:"2ab03e06",intro:"6c2d2750",referencias:"abc8dacb",tema1:"37e34a8c",tema2:"d6828eb1",tema3:"802c3cd0",tema4:"afb23f41",tema5:"b96adaca",tema6:"067ab67e",tema7:"43a45ae8",tema8:"779d11f9",tema9:"d4ba7027"}[e]+".js"}function l(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};t[e]?a.push(t[e]):0!==t[e]&&n[e]&&a.push(t[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6",tema7:"tema7",tema8:"tema8",tema9:"tema9"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"e71cb334","chunk-13a6037e":"31d6cfe0","chunk-25b302c8":"e71cb334","chunk-26fc7596":"e71cb334","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"e71cb334","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"e71cb334","chunk-3c57cd7b":"e71cb334","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"e71cb334","chunk-4fde0a08":"5d24a906","chunk-515a8379":"7d5c379b","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"e7449fd3","chunk-6e1e538a":"d2f45819","chunk-766a929b":"52f1495a","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"e71cb334","chunk-fde47172":"31d6cfe0",comple:"10600293",creditos:"6b6e9b71",glosario:"c3f91d55",intro:"31d6cfe0",referencias:"ff9e923d",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0",tema5:"31d6cfe0",tema6:"31d6cfe0",tema7:"31d6cfe0",tema8:"31d6cfe0",tema9:"31d6cfe0"}[e]+".css",i=l.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var d=r[c],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===o||s===i))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],s=d.getAttribute("data-href");if(s===o||s===i)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete t[e],m.parentNode.removeChild(m),n(r)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){t[e]=0})));var o=i[e];if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(a,n){o=i[e]=[a,n]}));a.push(o[2]=r);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e);var u=new Error;d=function(a){s.onerror=s.onload=null,clearTimeout(m);var n=i[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),t=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+t+")",u.name="ChunkLoadError",u.type=o,u.request=t,n[1](u)}i[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(a)},l.m=e,l.c=o,l.d=function(e,a,n){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)l.d(n,o,function(a){return e[a]}.bind(null,o));return n},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="",l.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"230f":function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.91121d9d.svg"},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},i=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,l=n("2877"),d=Object(l["a"])(c,t,i,!1,null,null,null),s=d.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=n("ae58"),p=n("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return n.e("tema5").then(n.bind(null,"5029"))}},{path:"tema6",name:"tema6",component:function(){return n.e("tema6").then(n.bind(null,"92ea"))}},{path:"tema7",name:"tema7",component:function(){return n.e("tema7").then(n.bind(null,"a2b2"))}},{path:"tema8",name:"tema8",component:function(){return n.e("tema8").then(n.bind(null,"f96f"))}},{path:"tema9",name:"tema9",component:function(){return n.e("tema9").then(n.bind(null,"ecd9"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Servicio al cliente",descripcionCurso:"El servicio y atención al cliente es una actividad importante para el asesor comercial, con herramientas y técnicas identifica situaciones que le permiten tomar acciones de mejora que logran relaciones duraderas con el cliente. El vendedor conocerá cómo define la empresa el triángulo del servicio, los momentos de verdad, el ciclo del servicio al cliente y cómo medir la trazabilidad de servicio. ",imagenBannerPrincipal:n("9370"),fondoBannerPrincipal:n("230f")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Atención al cliente",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Características de la atención al cliente",hash:"t1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Finalidad de la atención al cliente",hash:"t1_2"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Relaciones con clientes",desarrolloContenidos:!0},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Satisfacción al cliente",desarrolloContenidos:!0},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Fidelización al cliente",desarrolloContenidos:!0},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Hallazgos en la atención al cliente",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"5.1",titulo:"Tipos de hallazgos",hash:"t5_1"},{icono:"far fa-file-alt",numero:"5.2",titulo:"Finalidad de la atención al cliente",hash:"t5_2"}]},{nombreRuta:"tema6",icono:"far fa-file-alt",numero:"6",titulo:"Ciclo de servicio",desarrolloContenidos:!0},{nombreRuta:"tema7",icono:"far fa-file-alt",numero:"7",titulo:"Triángulo del servicio",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"7.1",titulo:"Característica del triángulo del servicio",hash:"t7_1"},{icono:"far fa-file-alt",numero:"7.2",titulo:"Estructura del triángulo del servicio",hash:"t7_2"}]},{nombreRuta:"tema8",icono:"far fa-file-alt",numero:"8",titulo:"Momentos de verdad en el servicio al cliente",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"8.1",titulo:"Característica del triángulo del servicio",hash:"t8_1"},{icono:"far fa-file-alt",numero:"8.2",titulo:"Elementos que favorecen un momento de verdad",hash:"t8_2"},{icono:"far fa-file-alt",numero:"8.3",titulo:"Tipos de momentos de verdad",hash:"t8_3"}]},{nombreRuta:"tema9",icono:"far fa-file-alt",numero:"9",titulo:"Trazabilidad de servicio al cliente",desarrolloContenidos:!0}],subMenu:[{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Albrecht, K. (2006). La revolución del servicio. Temas gerenciales 1ª edición. Editorial 3R Editores."},{referencia:"Beetrack. (sf). Las características de un buen servicio al cliente. ",link:"https://www.beetrack.com/es/blog/como-dar-buen-servicio-al-cliente-sector-logistico"},{referencia:"Cámara de Comercio de Cartagena. (2014). Procedimiento atención de PQRS. ",link:"https://www.cccartagena.org.co/pqrs-2/"},{referencia:"Da Silva, D. (2020). Diferencia entre atención al cliente y servicio al cliente. ",link:"https://www.zendesk.com.mx/blog/diferencia-servicio-atencion-al-cliente/"},{referencia:"Geinfor. (sf). Cómo implementar un sistema de trazabilidad en tu empresa. ",link:"https://geinfor.com/business/como-implementar-un-sistema-de-trazabilidad-en-tu-empresa/"},{referencia:"ISOTools. (2016). Cómo definir un proceso para gestionar las reclamaciones de los clientes. ",link:"https://www.isotools.com.co/definir-proceso-gestionar-las-reclamaciones-los-clientes/"},{referencia:"Prieto, J. (2014). Gerencia del servicio. 3ª edición. Ecoe Ediciones."},{referencia:"Serna, H., Barrios, C., Barrios, A. y Castillo, M. (2007). Cómo medir al cliente. Editorial 3R Editores. ",link:"http://www.panamericanaeditorial.com.co/temas-gerenciales-3r/4464-como-medir-el-valor-del-cliente.html"},{referencia:"Siebold, M. (s.f.). Momentos de verdad en la administración del servicio. ",link:"http://www.mercadeo.com/blog/1967/09/momentos-de-verdad-en-la-administracion-del-servicio/"}],glosario:[{termino:"Atención al cliente",significado:"“La atención al cliente se centra en la resolución de problemas, el manejo de quejas y el soporte técnico” (Da Silva, 2020)."},{termino:"Momento de verdad",significado:"“Es un episodio en el cual el cliente entra en contacto con cualquier aspecto de la organización y tiene una impresión sobre la calidad de su servicio” (Albrecht, 2006)."},{termino:"Trazabilidad",significado:"Es una serie de normas, procedimientos que permiten realizar un seguimiento al producto durante su proceso de fabricación, despacho y entrega al cliente, esta trazabilidad se realiza con el apoyo de tecnologías de georreferenciación aplicadas al producto."}],complementario:[{texto:"Da Silva, D. (2020). Diferencia entre atención al cliente y servicio al cliente. ",tipo:"Otro (página web)",link:"https://www.zendesk.com.mx/blog/diferencia-servicio-atencion-al-cliente/"},{texto:"Serna, H., Barrios, C., Barrios, A. y Castillo, M. (2007). Cómo medir al cliente. Editorial 3R Editores.",tipo:"Libro",link:"http://www.panamericanaeditorial.com.co/temas-gerenciales-3r/4464-como-medir-el-valor-del-cliente.html"},{texto:"Beetrack. (sf). Las características de un buen servicio al cliente.",tipo:"Otro (página web)",link:"https://www.zendesk.com.mx/blog/protocolo-de-atencion-al-cliente/"},{texto:"Economía de Rosquilla. (s.f.).",tipo:"Página web",link:"https://www.beetrack.com/es/blog/como-dar-buen-servicio-al-cliente-sector-logistico"},{texto:"Da Silva, D. (2020). Protocolo de atención y servicio al cliente: ¿qué es, por qué es importante para tu empresa?, ¿cómo hacerlo y cuáles son sus ventajas?",tipo:"Otro (página web)",link:"https://www.zendesk.com.mx/blog/diferencia-servicio-atencion-al-cliente/"},{texto:"Geinfor. (sf). Cómo implementar un sistema de trazabilidad en tu empresa.",tipo:"Otro (página web)",link:"https://geinfor.com/business/como-implementar-un-sistema-de-trazabilidad-en-tu-empresa/"},{texto:"Cano, Y. (s.f). Ceiba. Triángulo del servicio: una mirada estratégica para los negocios.",tipo:"Otro (página web)",link:"https://www.ceiba.com.co/triangulo-del-servicio/"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Javier del Carmen Martínez Pérez",cargo:"Instructor",centro:"Centro de Comercio y Servicios - Regional Bolívar"},{nombre:"Zenith Chinchilla Ruedas",cargo:"Diseñador Instruccional",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Silvia Milena Sequeda Cárdenas",cargo:"Evaluadora instruccional",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Julia Isabel Roberto",cargo:"Diseñadora y evaluadora instruccional",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Carlos Julián Ramírez Benítez",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Luis Gabriel Urueta Alvarez",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy Maria Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Wilson Andrés Arenales Caceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodriguez Rodriguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"María Carolina Tamayo López",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Camilo Villamizar Lizcano",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Diego Fernando Velasco Güiza",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Andres Mauricio Santaella Ochoa",cargo:"Soporte front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"María Isabel Román Rueda",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"}]}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:g["a"],render:function(e){return e(s)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"5.0.1","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"4.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},9370:function(e,a,n){e.exports=n.p+"img/banner-princiapal.5c51161f.png"},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){}});
//# sourceMappingURL=app.63b0b40d.js.map