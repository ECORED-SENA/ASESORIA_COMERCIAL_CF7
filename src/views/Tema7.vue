<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Triángulo del servicio
    
    p.mb-5 Este integra los momentos de verdad y el ciclo del servicio en las actividades clave de la empresa, con el fin de brindar al cliente una mejor experiencia. El cliente es el centro y eje principal de la dinámica de la empresa, por tanto conocer su comportamiento, sus gustos, deseos, motivaciones y expectativas son fundamentales para los demás elementos que integran el triángulo como lo son la estrategia de servicio al cliente, el personal que estará al frente en la atención del cliente y los demás sistemas (establecimiento, procedimientos, normas, ambiente), que integran la manera cómo se va a prestar el servicio.

    #t7_1.titulo-segundo.color-acento-contenido
      h2 7.1 Característica del triángulo del servicio

    .row.justify-content-between.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p.mb-4 
          | El triángulo del servicio se construye a partir de las relaciones que tiene la empresa con los clientes cada vez que el servicio es solicitado, por tanto, la principal característica son los 
          span.etiqueta momentos de verdad. 
          | Son estos momentos los que la empresa tiene en cuenta para lograr la experiencia de servicio y esa estructura está diseñada para tal fin.
        
        p.mb-0 
          | Otras características son los requerimientos, procesos y procedimientos de cada 
          span.etiqueta momento de verdad,
          | planear cada uno de esos encuentros con el objeto de que salga bien cada encuentro.

      .col-6.col-lg-4
        figure
          img(src='@/assets/curso/tema7/img01.svg', alt='')
    
    #t7_2.titulo-segundo.color-acento-contenido
      h2 7.2 Estructura del triángulo del servicio

    p.mb-4 Estos tres elementos componen la estructura del triángulo del servicio e interactúan con el cliente para mantener un nivel de percepción alto en el cliente.

    .row.justify-content-between.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Estrategia de servicio al cliente")
            p Acciones que orientan a la empresa hacia lo que hace feliz al cliente.
          div(titulo="Sistemas amables para el cliente")
            p Un sistema donde el personal atenderá al cliente, debe estar diseñado para la satisfacción y necesidades del cliente.
          div(titulo="Personal capacitado para la atención al cliente")
            p Un personal con orientación de servicio, empático y debidamente entrenado al servicio de atender los requerimientos del cliente.      
      .col-lg-5
        figure
          img(src='@/assets/curso/tema7/img02.svg', alt='')

  
</template>

<script>
export default {
  name: 'Tema7',
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
