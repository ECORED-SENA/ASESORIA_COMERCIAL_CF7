<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.roundedStart

    .titulo-principal.color-acento-botones(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Satisfacción al cliente

    p.mb-4 La responsabilidad de las empresas en la satisfacción del cliente debe ser un objetivo de la calidad total, las organizaciones deben segmentar e identificar su cliente objetivo, esto les permitirá implementar el tipo de gestión determinada para cada negocio, determinando políticas y estrategias para cada proceso y la contribución de unas personas específicas.

    p.mb-4 Para lograr la satisfacción total del cliente es necesario hacer lo siguiente:

    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="l")
          .row.align-items-center            
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Siempre hay que identificar las necesidades, deseos y expectativas de los clientes.
            .col-3.col-lg-3
              figure
                img.w-75.mx-auto(src='@/assets/curso/tema2/img08.svg', alt='') 
          
          .row.justify-content-end.align-items-center
            .col-3.col-lg-3.mb-4.mb-lg-0
              figure
                img.w-75.mx-auto(src='@/assets/curso/tema2/img09.svg', alt='')
            .col-lg-8
              p.mb-0 Planificar el servicio en función de las necesidades, manifestando y exponiendo al cliente las posibilidades existentes que tiene la organización comercial para cubrir sus necesidades y expectativas, cumpliendo con los requerimientos exigidos.
          
          .row.align-items-center            
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Se debe prestar el servicio de acuerdo con lo diseñado en función de los requerimientos y con los procesos acordados.
            .col-3.col-lg-3
              figure
                img.w-75.mx-auto(src='@/assets/curso/tema2/img10.svg', alt='') 
          
          .row.justify-content-end.align-items-center
            .col-3.col-lg-3.mb-4.mb-lg-0
              figure
                img.w-75.mx-auto(src='@/assets/curso/tema2/img11.svg', alt='')
            .col-lg-8
              p.mb-0 Se debe evaluar la prestación del servicio, teniendo en cuenta las medidas internas y externas a través de indicadores y parámetros del servicio de calidad.
    
  .container.BG10.p-4.p-md-5.roundedEnd
    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center.align-items-center.p-4.bg-white.rounded.mb-4
          .col-3.col-lg-2.mb-4.mb-lg-0
            figure
              img.w-75.mx-auto(src='@/assets/curso/tema2/img12.svg', alt='')
          .col-lg-10
            p.mb-0 NTC - ISO 9000-2015 es la norma técnica de gestión de la calidad vigente para el servicio al cliente. Las normas técnicas y de calidad están dirigidas a todas las entidades para mejorar el desempeño y la capacidad de proporcionar productos y servicios que cumplan con las necesidades y las expectativas del cliente.
        
        .row.justify-content-center.align-items-center.p-4.bg-white.rounded
          .col-3.col-lg-2.mb-4.mb-lg-0
            figure
              img.w-75.mx-auto(src='@/assets/curso/tema2/img13.svg', alt='')
          .col-lg-10
            p.mb-0 La empresa debe mejorar la atención al cliente, prestando un servicio de información y consulta a usuarios de acuerdo con sus requerimientos, teniendo en cuenta las políticas institucionales y los términos establecidos por la ley, esto hecho de manera personal o por medios tecnológicos, aplicando actitudes y valores mediante la comunicación empresarial y las normas de gestión documental, de acuerdo con los estándares de calidad que garantice la atención al cliente.
  
</template>

<script>
export default {
  name: 'Tema3',
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
