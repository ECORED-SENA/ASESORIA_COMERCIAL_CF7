<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.roundedStart

    .titulo-principal.color-acento-botones(data-aos="flip-up")
      .titulo-principal__numero
        span 9
      h1 Trazabilidad de servicio al cliente
    
    p.mb-4 La trazabilidad es una serie de normas, procedimientos que permiten realizar un seguimiento al producto durante su proceso de fabricación, despacho y entrega al cliente, esta trazabilidad se realiza con el apoyo de tecnologías de georreferenciación aplicadas al producto.  

    p.mb-0 La trazabilidad del servicio es el seguimiento o sondeo que se hace del producto o servicio según los procedimientos establecidos, con el fin de conocer la ubicación y trayectoria del producto o servicio a lo largo de la cadena logística, para lo cual se utilizan algunas herramientas, la trazabilidad es la capacidad de reconstruir la historia y recorrido de un producto o servicio. Para ello, se debe tener en cuenta lo siguiente:
  
  .container.bg-white.p-0
    figure
      img(src='@/assets/curso/tema9/img01.svg', alt='')
  
  .container.bg-white.p-4.p-md-5
    p.mb-4 Teniendo en cuenta esta información se hace posible la entrega de productos o servicios a mercados específicos, garantizando con certeza el origen y la historia de estos, la trazabilidad se asocia a procesos y procedimientos. 

    p.mb-5 Apoyado en esa información, es posible entregar productos y servicios definidos a mercados específicos, con la garantía de conocer con certeza el origen y la historia de este. La trazabilidad está asociada, sin duda, a procesos y procedimientos competitivos modernos y a productos y servicios de mayor calidad y valor para el cliente final.
  
    h3 Elementos para la trazabilidad en el servicio

    p.mb-5 De acuerdo con Geinfor (s.f.) los elementos que componen la trazabilidad y que garantizan la información histórica, la ubicación y trayectoria del producto son:

    SlyderE(indicadores="derecha")
      .row.align-items-end.justify-content-between
        .col-md-6.mb-4.mb-md-0
          h4 Sistema de identificación
          p Los sistemas de identificación son uno de los componentes básicos de cualquier seguimiento de la trazabilidad en el ámbito empresarial. Mediante estos sistemas se hace posible la identificación de los artículos, ya sea de forma individual o agrupados en lotes. Igualmente, permiten la identificación de los embalajes y cajas relacionas con la logística de almacén y reparto.      
        .col-md-5
          figure
            img(src='@/assets/curso/tema9/img02.jpg', alt='')
      
      .row.align-items-end.justify-content-between
        .col-md-6.mb-4.mb-md-0
          h4 Sistema de captura de datos
          p A la hora de implantar un buen sistema de trazabilidad es fundamental utilizar alguna herramienta de captura de datos. Esta debe obtener y registrar la información sobre las materias primas utilizadas, los datos de la planta en la que se fabrica y los datos de la gestión de almacenes.    
        .col-md-5
          figure
            img(src='@/assets/curso/tema9/img03.jpg', alt='')
      
      .row.align-items-end.justify-content-between
        .col-md-6.mb-4.mb-md-0
          h4 Software para captura de datos
          p Sin negar la importancia de los dos sistemas anteriormente analizados, de poco servirían todos los datos obtenidos si después no se cuenta con las herramientas para analizarlos y darles un uso adecuado. Por esto, es esencial la utilización de un software especializado que permita la gestión correcta de toda la información acumulada y su posterior administración.   
        .col-md-5
          figure
            img(src='@/assets/curso/tema9/img04.jpg', alt='')
      
      .row.align-items-end.justify-content-between
        .col-md-6.mb-4.mb-md-0
          h4 Los datos para registrar
          p Una vez se tienen todos los datos llega el momento de registrarlos, analizarlos y darles un uso adecuado. La información sobre la trazabilidad va a ser muy diferente, dependiendo de la clase de producto, del sector empresarial y de cuáles son los requerimientos del usuario final.   
        .col-md-5
          figure
            img(src='@/assets/curso/tema9/img05.jpg', alt='')
  
  .container.BG10.p-4.p-md-5.Brdbtn01

    h3 Herramientas para la trazabilidad en el servicio

    p.mb-4 En la cadena de suministros se  realiza seguimiento a la entrega de los productos desde producción hasta la entrega del producto a los clientes, para realizar este seguimiento la empresa utiliza herramientas que apoyan este monitoreo con códigos de barras, apoyados por sistemas de radiofrecuencia (RFID), códigos alfanuméricos u otras tecnologías más avanzadas de geolocalización.

    .row.mb-4
      .col-lg-7.BG299.rounded04
        .row.p-4.align-items-center
          .col-2
            figure
              img.w-75.mx-auto(src='@/assets/curso/tema8/img05.svg', alt='')
          .col-10.text-white
            p.mb-0 La Norma ISO 9000 regula las normas de Control de calidad y gestión de calidad del proceso en la trazabilidad
  
  .container.BGgris01.p-4.p-md-5
    h3 Canales

    p.mb-4 Existen diversos canales de atención al cliente y la utilización de estos depende de las políticas de la empresa y el público al cual se desea atender, entre ellos figuran:

    .row.align-items-center
      .col-md-6.mb-4.mb-md-0
        ul.lista-ul.mb-0.Clist02
          li 
            i.fas.fa-check
            p.mb-0 El teléfono y/o móvil.
          li 
            i.fas.fa-check
            p.mb-0 Correo electrónico.
          li 
            i.fas.fa-check
            p.mb-0 Páginas web.
          li 
            i.fas.fa-check
            p.mb-0 Mensajes SMS.
          li 
            i.fas.fa-check
            p.mb-0 WhatsApp.
          li 
            i.fas.fa-check
            p.mb-0 Redes sociales: Facebook, Twitter, Instagram, entre otras.

      .col-md-4
        figure
          img(src='@/assets/curso/tema9/img06.svg', alt='')
    
    p.mb-0 Cabe resaltar que la tecnología ha tenido un gran avance con el paso de los años y, actualmente, los empresarios tienen diferentes formas de comunicarse con los clientes de una forma ágil, personalizada y oportuna.
  
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.roundedEnd
  
</template>

<script>
export default {
  name: 'Tema9',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
