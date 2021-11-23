<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.roundedStart

    .titulo-principal.color-acento-botones(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Momentos de verdad en el servicio al cliente
    
    p.mb-4 Cada vez que el cliente en su encuentro con la empresa bien sea de manera presencial o virtual experimenta sensaciones que pueden o no llevarlo a realizar una compra. Para Albrecht (2006) “es un episodio en el cual el cliente entra en contacto con cualquier aspecto de la organización y tiene una impresión sobre la calidad de su servicio” (p. 33).  Igualmente, Siebold (s.f.) trae un concepto de Jan Carlzon “un momento de verdad es cada instante en que un cliente toma contacto con la persona o sistema que da el servicio”.

    #t8_1.titulo-segundo.color-acento-contenido
      h2 8.1  Característica de los momentos de verdad
    
    p.mb-0 Están caracterizados por los sistemas principales de la organización, estos sistemas son:

  .container.bg-white.p-0
    SlyderA.row.align-items-end.gx-0.mb-5
      .col-12
        .row.justify-content-around.bgImg08.rounded01.m-0.p-5
          .col-md-10.col-lg-5.BG29.text-white.rounded02.p-5
            p.my-5.mTop01 Sistema de gestión gerencial: de ahí salen las decisiones que dan forma a los momentos de verdad y la conformación de los ciclos de servicios.
            figure.my-3.mTop01
              img.sz01(src='@/assets/curso/tema1/img05.svg', alt='')
          .col-5
      .col-12
        .row.justify-content-around.bgImg09.rounded01.m-0.p-5
          .col-md-10.col-lg-5.BG29.text-white.rounded02.p-5
            p.my-5.mTop01 Sistema conformado por las normas y procedimientos: son las reglas para seguir en el encuentro con el cliente.
            figure.my-3.mTop01
              img.sz01(src='@/assets/curso/tema1/img05.svg', alt='')
          .col-5
      .col-12
        .row.justify-content-around.bgImg10.rounded01.m-0.p-5
          .col-md-10.col-lg-5.BG29.text-white.rounded02.p-5
            p.my-5.mTop01 Sistema de infraestructura técnica: los equipos que la empresa necesita para poder operar en la atención con el cliente.
            figure.my-3.mTop01
              img.sz01(src='@/assets/curso/tema1/img05.svg', alt='')
          .col-5
      .col-12
        .row.justify-content-around.bgImg11.rounded01.m-0.p-5
          .col-md-10.col-lg-5.BG29.text-white.rounded02.p-5
            p.my-5.mTop01 Sistema de interacción social: todo el componente humano alrededor del encuentro con el cliente.
            figure.my-3.mTop01
              img.sz01(src='@/assets/curso/tema1/img05.svg', alt='')
          .col-5
    
    .row.justify-content-center.mb-5
      .col-lg-10.BG299.rounded04
        .row.p-4.align-items-center
          .col-2
            figure
              img.w-75.mx-auto(src='@/assets/curso/tema8/img05.svg', alt='')
          .col-10.text-white
            h4 Importancia
            p.mb-0 Los momentos de verdad son aquellos puntos de contacto entre el cliente y la empresa más importantes y críticos. Son cruciales para la experiencia del cliente, puesto que definen que el cliente llegue a la venta y la fidelización.
  
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.roundedEnd
    
    #t8_2.titulo-segundo.color-acento-contenido
      h2 8.2 Elementos que favorecen un momento de verdad
    
    p.mb-5 Cada momento de la verdad es un sistema donde interactúan cinco elementos: soporte interno, soporte físico, personal en contacto, cliente y servicio.

    #MapaGroup01.row.justify-content-center.mb-5
      .col-10
        .row.justify-content-center.mb-3(@mouseover="mostrarIndicador = false")
          button.ColHid.BG01Hov.col-md-6.col-lg-3(data-bs-toggle='collapse' data-bs-target='.multi-collapse1' aria-expanded='true' aria-controls='.multi-collapse1')
            figure.mb-3
              img.w-50.mx-auto(src='@/assets/curso/tema8/img06.svg', alt='')
            .BG01HovChg.rounded011.p-4
              h4.text-center.mb-0 Soporte interno
          button.ColHid.BG01Hov.col-md-6.col-lg-3(data-bs-toggle='collapse' data-bs-target='.multi-collapse2' aria-expanded='true' aria-controls='.multi-collapse2')
            figure.mb-3
              img.w-50.mx-auto(src='@/assets/curso/tema8/img07.svg', alt='')
            .BG01HovChg.rounded011.p-4.position-relative
              .indicador--click(v-if="mostrarIndicador")
              h4.text-center.mb-0 Soporte físico
          button.ColHid.BG01Hov.col-md-6.col-lg-3(data-bs-toggle='collapse' data-bs-target='.multi-collapse3' aria-expanded='true' aria-controls='.multi-collapse3')
            figure.mb-3
              img.w-50.mx-auto(src='@/assets/curso/tema8/img08.svg', alt='')
            .BG01HovChg.rounded011.p-4
              h4.text-center.mb-0 Personal en contacto
          button.ColHid.BG01Hov.col-md-6.col-lg-3(data-bs-toggle='collapse' data-bs-target='.multi-collapse4' aria-expanded='true' aria-controls='.multi-collapse4')
            figure.mb-3
              img.w-50.mx-auto(src='@/assets/curso/tema8/img09.svg', alt='')
            .BG01HovChg.rounded011.p-4
              h4.text-center.mb-0 Cliente y servicio
        
        .BG01.rounded04.p-3.mb-2.multi-collapse1.collapse.show(data-bs-parent='#MapaGroup01')
          p.mb-0 El soporte interno lo conforma esa parte interna que no es visible al servicio, pero desde ahí se produce.
        
        .BG01.rounded04.p-3.mb-2.multi-collapse2.collapse(data-bs-parent='#MapaGroup01')
          p.mb-0 El soporte físico está conformado por los equipos físicos que son necesarios para prestar el servicio.
        
        .BG01.rounded04.p-3.mb-2.multi-collapse3.collapse(data-bs-parent='#MapaGroup01')
          p.mb-0 El personal de contacto es quien sirve a los clientes sobre las necesidades del servicio.
        
        .BG01.rounded04.p-3.mb-2.multi-collapse4.collapse(data-bs-parent='#MapaGroup01')
          p.mb-0 El cliente y el servicio lo conforman todos los procesos necesarios para satisfacer al cliente y la capacidad para realizar mejoras en el servicio.
    
    #t8_3.titulo-segundo.color-acento-contenido
      h2 8.3 Tipos de momentos de verdad
    
    p.mb-5 Los encuentros con los clientes pueden ser positivos o negativos, dependiendo de cómo se sienta el cliente o cómo perciba el servicio recibido o cualquier encuentro con el sistema. Prieto (2014, p.104).

    .row.justify-content-center
      .col-7
        .row.p-4.align-items-center.BG10.rounded-3.mb-3
          .col-2
            figure
              img.w-75.mx-auto(src='@/assets/curso/tema8/img10.svg', alt='')
          .col-10
            p.mb-0 #[strong Momentos de verdad positivos:] aquellos que satisfacen las expectativas de los clientes y que permiten convertirlos en clientes fieles y leales.

        .row.p-4.align-items-center.BG10.rounded-3
          .col-2
            figure
              img.w-75.mx-auto(src='@/assets/curso/tema8/img11.svg', alt='')
          .col-10
            p.mb-0 #[strongMomentos de verdad negativos:] aquellos momentos que no satisfacen las expectativas de los clientes en su encuentro con el sistema. Los empleados pueden atenderlos muy bien, pero pueden sentirse contrariados con alguna parte del servicio técnico o con la exhibición u otro elemento. 
  
</template>

<script>
export default {
  name: 'Tema8',
  components: {},
  data: () => ({
    mostrarIndicador: true,
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
