<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Fidelización al cliente
    
    p.mb-4 Para tener un cliente que siempre esté comprando o consumiendo los productos o servicios de la empresa, esta debe seguir el proceso de atraer y captar para luego fidelizar a los clientes, esta fidelización busca ante todo mantener relaciones duraderas con los clientes. 

    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-7.col-lg-3.mb-4.mb-lg-0
          figure.mb-4
            img(src='@/assets/curso/tema3/img01.svg', alt='')
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p.mb-0 “se entiende como una acción dirigida a conseguir que los clientes mantengan relaciones estables y continuadas con la empresa a largo tiempo” (p. 19).
    
    p.mb-4 Tanto la fidelización de los  clientes como el asesor comercial son importantes para la empresa porque buscan que el cliente siga comprando y aumentando sus ventas. Tenga en cuenta que las acciones de fidelización se aplican a los clientes que vienen comprando y están satisfechos, a los demás se les recomienda otras acciones.

    p.mb-5 De acuerdo con Promove (2019) para que una empresa tenga clientes fieles se debe tener en cuenta lo siguiente:

    ImagenInfografica.color-acento-contenido
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema3/img02.svg', alt='')          

      .tarjeta.color-acento-botones.bg-white.p-3(x="17.6%" y="55%" numero="1")
        p.mb-0 Mantener calidad y seriedad en la relación.

      .tarjeta.color-acento-botones.bg-white.p-3(x="23.5%" y="55%" numero="2")
        p.mb-0 Dar orientación al cliente sobre los procesos, beneficios y ventajas de los productos o servicios.
      
      .tarjeta.color-acento-botones.bg-white.p-3(x="29.4%" y="55%" numero="3")
        p.mb-0 Sobre todo, inspirar confianza y respeto en el cliente.

      .tarjeta.color-acento-botones.bg-white.p-3(x="35.2%" y="55%" numero="4")
        p.mb-0 Mantener una buena impresión en la presentación y movimientos corporales.
      
      .tarjeta.color-acento-botones.bg-white.p-3(x="41.2%" y="55%" numero="5")
        p.mb-0 Mantenerse en contacto con ellos.

      .tarjeta.color-acento-botones.bg-white.p-3(x="47.1%" y="55%" numero="6")
        p.mb-0 Acciones que propicien relaciones duraderas con los clientes.
      
      .tarjeta.color-acento-botones.bg-white.p-3(x="52.9%" y="55%" numero="7")
        p.mb-0 Cupones descuento, donde el usuario puede recortar un cupón y obtendrá una rebaja en el precio de algún producto o servicio del establecimiento.

      .tarjeta.color-acento-botones.bg-white.p-3(x="58.9%" y="55%" numero="8")
        p.mb-0 Programa de puntos: tarjeta de puntos redimibles en productos.
      
      .tarjeta.color-acento-botones.bg-white.p-3(x="64.9%" y="55%" numero="9")
        p.mb-0 #[strong #[em Newsletter.]] comunicación personalizada a sus correos electrónicos.

      .tarjeta.color-acento-botones.bg-white.p-3(x="70.6%" y="55%" numero="10")
        p.mb-0 Regalos. Por cumplir cuotas de compra en un periodo de tiempo.
      
      .tarjeta.color-acento-botones.bg-white.p-3(x="76.6%" y="55%" numero="11")
        p.mb-0 Gestión de la relación con el cliente. Invitar al cliente a participar en alguna actividad o promociones, por ejemplo el madrugón de precios.

      .tarjeta.color-acento-botones.bg-white.p-3(x="82.5%" y="55%" numero="12")
        p.mb-0 Club de clientes. Grupos que la empresa organiza, por ejemplo, el club de la pintura reúne a todos los interesados en pintar, reciben cursos y promociones.
  
</template>

<script>
export default {
  name: 'Tema4',
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
