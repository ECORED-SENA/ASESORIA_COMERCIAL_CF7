<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.roundedStart

    .titulo-principal.color-acento-botones(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Atención al cliente
    
    p.mb-4 En la siguiente presentación encontrará conceptos clave en la atención al cliente.

  .container.tarjeta.tarjeta--blanca.p-0
    SlyderA.row.align-items-end.gx-0.mb-5
      .col-12
        .row.justify-content-around.bgImg01.rounded01.m-0.p-5
          .col-md-10.col-lg-5.BG29.text-white.rounded02.p-5
            figure.mb-4
              img.sz01(src='@/assets/curso/tema1/img01.svg', alt='')
            p.mb-5 Para el mercadeo una estrategia de servicio al cliente significa lograr la más alta y agradable experiencia del cliente, atender al cliente es una habilidad que el vendedor debe tener como parte de la aplicación del proceso de la venta, de él depende en gran manera captar y fidelizar los clientes con apoyo de la aplicación de las técnicas de venta.
            figure.mb-3
              img.sz01(src='@/assets/curso/tema1/img05.svg', alt='')
          .col-5
      
      .col-12
        .row.justify-content-around.bgImg02.rounded01.m-0.p-5
          .col-md-10.col-lg-5.BG29.text-white.rounded02.p-5
            figure.mb-4
              img.sz01(src='@/assets/curso/tema1/img02.svg', alt='')
            p.mb-5 Para poder entender cómo atender al cliente es importante conocer el servicio al cliente. Para Da Silva (2020) “la atención al cliente se centra en la resolución de problemas, el manejo de quejas y el soporte técnico”, mientras el servicio al cliente engloba una serie de actividades indispensables para poder atender al cliente.
            figure.mb-3
              img.sz01(src='@/assets/curso/tema1/img05.svg', alt='')
          .col-5
      
      .col-12
        .row.justify-content-around.bgImg03.rounded01.m-0.p-5
          .col-md-10.col-lg-5.BG29.text-white.rounded02.p-5
            figure.mb-4
              img.sz01(src='@/assets/curso/tema1/img03.svg', alt='')
            p.mb-5 Respecto al servicio al cliente Da Silva (2020) manifiesta que “es un conjunto de prácticas e interacciones a lo largo del ciclo de ventas, cuyo objetivo es asegurar que se cumplan las necesidades y expectativas del consumidor”.
            figure.mb-3
              img.sz01(src='@/assets/curso/tema1/img05.svg', alt='')
          .col-5
      
      .col-12
        .row.justify-content-around.bgImg04.rounded01.m-0.p-5
          .col-md-10.col-lg-5.BG29.text-white.rounded02.p-5
            figure.mb-4
              img.sz01(src='@/assets/curso/tema1/img04.svg', alt='')
            p.mb-5 El servicio al cliente lo estructura la empresa para poder satisfacer una necesidad, por ejemplo, el transporte, la empresa necesita crear toda una serie de infraestructura y actividades que apoyen el servicio, y la interacción entre personas es la atención que procura resolver una situación o problema a un cliente.
            figure.mb-3
              img.sz01(src='@/assets/curso/tema1/img05.svg', alt='')
          .col-5
    
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.rounded-0
    .row.align-items-center.mb-4
      .col-lg-8.mb-4.mb-lg-0
        p.mb-0 Con base en los conceptos anteriores se puede expresar que el servicio es el conjunto de actividades que se realizan para satisfacer las necesidades de los clientes, desde que tienen contacto con la empresa hasta finalizar el ciclo del servicio. Es importante anotar que el asesor comercial de manera individual se acerca al cliente teniendo en cuenta sus características, sus necesidades y expectativas; por lo anterior, se debe hacer el seguimiento para identificar no solo esos comportamientos para realizar la ventas sino igualmente en la postventa.
      .col-lg-4
        figure.mb-4
          img(src='@/assets/curso/tema1/img06.svg', alt='')
    
    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-7.col-lg-3.mb-4.mb-lg-0
          figure.mb-4
            img(src='@/assets/curso/tema1/img07.svg', alt='')
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p.mb-0 El servicio se ubica en un plano visible e invisible para el cliente, a ambos se le debe dar absoluta prioridad por posicionamiento de la marca y por razones de normatividad legal. El servicio invisible para el cliente es aquel que no está a la vista, pero que es necesario para producir el servicio y entregarlo al servicio visible, por ejemplo, un restaurante para entregar el servicio de comidas necesita la cocina, baños, área de servicios, entre otros, aspectos que no ve el cliente. 
    
    h5.mb-4 El servicio visible para el cliente es donde se recibe al cliente, el cual consta de:

    .row.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.sz02
        .tarjeta.tarjeta-flip.color-acento-contenido.text-white(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.bgPCT(:style="{'background-image': `url(${require('@/assets/curso/tema1/img08.jpg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h2 Contexto inanimado
              p.mb-0 La oficina de un agente de seguros, escritorios, teléfonos, PC, etc.
      
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.sz02
        .tarjeta.tarjeta-flip.color-acento-botones.text-white(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.bgPCT(:style="{'background-image': `url(${require('@/assets/curso/tema1/img09.jpg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h2 Personal de contacto
              p.mb-0 Los empleados que interactúan con el cliente.
      
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.sz02
        .tarjeta.tarjeta-flip.color-acento-contenido.text-white(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.bgPCT(:style="{'background-image': `url(${require('@/assets/curso/tema1/img10.jpg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h2 Prestadores de servicios
              p.mb-0  Son quienes prestan el servicio directamente al cliente.
      
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.sz02
        .tarjeta.tarjeta-flip.color-acento-botones.text-white(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.bgPCT(:style="{'background-image': `url(${require('@/assets/curso/tema1/img11.jpg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h2 Otros Clientes
              p.mb-0 Los clientes que reciben el mismo servicio y pueden influir de manera positiva o negativa en su uso futuro.
    
    p.mb-4 Las estructuras organizacionales orientadas al mercado dan importancia a la experiencia del consumidor, a sus empleados de base frente a una estrategia de servicio al cliente, utiliza funciones internas para ayudar a los trabajadores a cumplir con los objetivos de servir a los clientes, compartiendo la responsabilidad que implica alcanzar los resultados del negocio, mientras las estructuras organizacionales orientadas a lo tradicional tienden a operar proyectos enormes que conllevan mucho tiempo de implementación, los empleados al frente de la línea de servicios son los menos importantes, cuando en ellos recae el cara a cara con el cliente.

    h4.mb-5 A través de la siguiente figura puede ver la estructura organizacional tradicional respecto a la orientada al mercado.

    .titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span Estructura organizacional tradicional vs. orientada al mercado

    .row.justify-content-center.mb-5
      .col-lg-8
        figure
          img.mb-2(src='@/assets/curso/tema1/img12.svg', alt='')
          figcaption Nota. Adaptada de Albrecht (2006).
    
    #t1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Características de la atención al cliente

    p.mb-0 Para la prestación del servicio que requiere cualquier actividad se debe tener en cuenta unas características, que el vendedor debe recordar. De acuerdo con la página web Beetrack se señala algunas como:
  
  .container.p-0
    ImagenInfografica.color-acento-botones
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/img13.jpg', alt='')          

      .tarjeta.color-acento-botones.bg-white.p-3(x="13.2%" y="71%" numero="1")
        p.mb-0 Capacidad de interesarse por las demás personas y ayudar en la solución de sus problemas.


      .tarjeta.color-acento-botones.bg-white.p-3(x="27.5%" y="71%" numero="2")
        p.mb-0 El solo deseo de atender bien a la persona no es suficiente, la empresa debe contar de manera organizada para hacer efectiva las PQR que realicen los clientes.
      
      .tarjeta.color-acento-botones.bg-white.p-3(x="39.7%" y="71%" numero="3")
        p.mb-0 El vendedor debe ser proactivo, adelantarse a situaciones para dar solución antes que el cliente lo detecte., por ejemplo, si un producto que se vendió tiene fallas, recogerlo cuanto antes.

      .tarjeta.color-acento-botones.bg-white.p-3(x="53.2%" y="71%" numero="4")
        p.mb-0 El servicio ayuda a la empresa y el vendedor a tener una relación duradera y rentable.
      
      .tarjeta.color-acento-botones.bg-white.p-3(x="69.2%" y="71%" numero="5")
        p.mb-0 El trato personalizado de frente al cliente y enfocado en sus necesidades deja gratas experiencias, también puede realizarse utilizando la omnicanalidad dando respuestas inmediatas

      .tarjeta.color-acento-botones.bg-white.p-3(x="86.5%" y="71%" numero="6")
        p.mb-0 Problema resuelto a satisfacción, es cliente que vuelve a comprar.
  
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.roundedEnd

    p.mb-5 Estas características pueden ser otras asociadas a la actividad que desarrolla la empresa, con seguridad una empresa de servicios médicos, logística o comercial tiene diferentes estructuras de servicio; sin embargo, la prestación del servicio cumple las siguientes características:

    h3.mb-4 Caracateríticas prestación del servicio

    TabsA.color-acento-contenido
      .tarjeta.px-4(titulo="Son intangibles")
        .row
          .col-lg-7.BG10.rounded-3.p-5.mb-4.mb-lg-0
            h4 Son intangibles
            p.mb-0 Los servicios son intangibles, estos no se pueden tocar, oler, no tienen acceso a la propiedad, no se pueden cargar, ni llevar.
      
      .tarjeta.px-4(titulo="Son intangibles")
        .row
          .col-lg-7.BG10.rounded-3.p-5.mb-4.mb-lg-0
            h4 Son indivisibles
            p.mb-0 Son los servicios que se le prestan a todos por igual, independientemente de lo que haya pagado.

      .tarjeta.px-4(titulo="Son intangibles")
        .row
          .col-lg-7.BG10.rounded-3.p-5.mb-4.mb-lg-0
            h4 Son heterogéneos 
            p.mb-0 Estos servicios son muy diversos y variados, raramente coinciden entre sí y usualmente se prestan muchas veces con relación al cliente. 

      .tarjeta.px-4(titulo="Son intangibles")
        .row
          .col-lg-7.BG10.rounded-3.p-5.mb-4.mb-lg-0
            h4 No se pueden conservar
            p.mb-0 Estos servicios no se pueden almacenar, ni llevarlos por partes, todos deben consumirse.
    
    .row.justify-content-end.mb-5
      .col-lg-8.col-xl-9
        figure
          img(src='@/assets/curso/tema1/img14.svg', alt='')
    
    #t2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Finalidad de la atención al cliente
    
    .cajon.color-primario.mTop01.p-5
      .row.justify-content-evenly.align-items-center
        .col-4.col-lg-3.mb-4.mb-lg-0
          figure.mnTop01
            img(src='@/assets/curso/tema1/img15.svg', alt='')
        .col-lg-8
          p.mb-0 La atención y el servicio al cliente además de ofrecer experiencias significativas a los clientes, tienen entre sus fines el fortalecimiento de la marca, el posicionamiento, y captar, retener y fidelizar clientes.
          
</template>

<script>
export default {
  name: 'Tema1',
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
