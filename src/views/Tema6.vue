<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Ciclo de servicio
    
    p.mb-4 Es una herramienta secuencial de pasos lógicos en la que existen interacciones que muestran el inicio del proceso de atención al cliente, puntos de contacto denominados momentos de verdad y el final del ciclo. Su objetivo se enfoca en el mejoramiento continuo para satisfacer las expectativas del cliente frente al producto o servicio. Este es un mapa de los momentos de verdad, desde el principio hasta que el cliente abandona el establecimiento.

    p.mb-4 En la siguiente figura se muestra el ciclo del servicio.

    .titulo-sexto.color-acento-contenido
      h5 Figura 2.
      span El ciclo del servicio

    .row.justify-content-center.mb-5
      .col-lg-7
        figure
          img.mb-2(src='@/assets/curso/tema6/img01.svg', alt='')
          figcaption Nota. Adaptado de Albrecht (2006).
    
    p.mb-5 Esto inicia desde que el cliente muestra interés y se genera comunicación entre el cliente y la empresa, en el que se presenta una serie de actividades hasta llegar al final del proceso que el cliente considera y vuelve nuevamente a iniciarse. Para su elaboración se relaciona un círculo, y de forma secuencial, se presenta cada uno de los ciclos denominados momentos de verdad, estos deben ser numerados y se registran teniendo en cuenta el punto de vista del cliente; motivo por el cual se presentan de forma positiva o negativa de acuerdo con la percepción y sensación de él.

    .cajon.color-primario.p-5.mb-5   
      .row.align-items-center.justify-content-center 
        .col-lg-8.mb-4.mb-lg-0
          h5 Los ciclos de servicio permiten a la empresa:
          ul.lista-ul.mb-0.Clist01
            li 
              i.fas.fa-check
              p Técnica para ayudar a la gente a cambiar sus hábitos.
            li 
              i.fas.fa-check
              p Que el empleado piense en el producto que él ofrece al cliente.
            li 
              i.fas.fa-check
              p Entender la realidad de la experiencia del servicio al cliente.
            li.mb-0
              i.fas.fa-check
              p.mb-0 Muestra el servicio como el cliente lo experimenta.
        
        .col-6.col-lg-2
          figure
            img(src='@/assets/curso/tema6/img02.svg', alt='')
    
    h4.mb-5 Prieto (2014) sugiere los siguientes pasos:

    TabsA.color-acento-contenido.mb-5
      .tarjeta.px-4(titulo="Atender al cliente")
        .row.justify-content-center
          .col-lg-7.BG10.rounded-3.p-5.mb-4.mb-lg-0
            h4 Atender al cliente
            p.mb-0 Ser una persona amable y empática, se recomienda que siga un protocolo de bienvenida y comportamiento corporal.
          .col-6.col-lg-5.p-4
            figure
              img(src='@/assets/curso/tema6/img03.svg', alt='')
      
      .tarjeta.px-4(titulo="Ofrecer su apoyo ")
        .row.justify-content-center
          .col-lg-7.BG10.rounded-3.p-5.mb-4.mb-lg-0
            h4 Ofrecer su apoyo
            p.mb-0 Buscar identificar su necesidad y dar respuestas concretas.
          .col-6.col-lg-5.p-4
            figure
              img(src='@/assets/curso/tema6/img03.svg', alt='')
      
      .tarjeta.px-4(titulo="Satisfacer la necesidad")
        .row.justify-content-center
          .col-lg-7.BG10.rounded-3.p-5.mb-4.mb-lg-0
            h4 Satisfacer la necesidad
            p.mb-0 Buscar la solución y extender o complementar la solución.
          .col-6.col-lg-5.p-4
            figure
              img(src='@/assets/curso/tema6/img03.svg', alt='')
      
      .tarjeta.px-4(titulo="Ofrecer su apoyo ")
        .row.justify-content-center
          .col-lg-7.BG10.rounded-3.p-5.mb-4.mb-lg-0
            h4 Monitorear la satisfacción del cliente
            p.mb-0 Asegurarse de la satisfacción del cliente y despedirlo con protocolos. 
          .col-6.col-lg-5.p-4
            figure
              img(src='@/assets/curso/tema6/img03.svg', alt='')
    
    p.mb-4 Dicho eso, el foco vital de las organizaciones debe ser crear relaciones saludables con los clientes para conquistarlos en todos los puntos de contacto, es por ello que en el ciclo de vida del servicio se reconoce su importancia, características, las diferentes etapas que posee, así como  los diferentes indicadores y métricas que permiten hacer una correcta medición del servicio, tal y como se muestra a continuación: 

    .tarjeta.tarjeta--gris.p-4.mb-5
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="Importancia del ciclo del servicio")
          .col-md-8.mb-4.mb-md-0
            p El ciclo de servicio al cliente muestra el servicio como lo experimenta el cliente, permite identificar cuál es ese encuentro entre el cliente y el sistema (establecimiento físico, empleados, mercancía, ambiente) que causa la inconformidad del cliente y que debe ser solucionada. 
            p.mb-0 Otra importancia significativa de los ciclos del servicio al cliente es que permiten conocer las debilidades y fortalezas que presenta la empresa al darse el contacto organización-cliente, además de permitir identificar aquello que debe ser mejorado y que le daría ventaja competitiva.
          .col-md-4
            figure
              img.w-50.mx-auto(src='@/assets/curso/tema6/img04.svg', alt='')
        
        .row(titulo="Características del ciclo del servicio")
          .col-md-8.mb-4.mb-md-0
            p La principal característica del ciclo del servicio en el proceso son los encuentros o momentos de verdad entre el cliente y el sistema. La percepción que tenga el cliente de estos encuentros puede ser positiva o negativa, en función de cómo se haya sentido en el momento en que el asesor comercial o quien le ofrece el servicio lo haya atendido.
            p.mb-0 Otras características son los requerimientos, procesos y procedimiento de cada momento de verdad, planear cada uno de esos encuentros con el objeto de que salga bien cada encuentro.
          .col-md-4
            figure
              img.w-50.mx-auto(src='@/assets/curso/tema6/img05.svg', alt='')
        
        .row(titulo="Características del ciclo del servicio")
          .col-md-8.mb-4.mb-md-0
            p Están relacionadas con  la manera  cómo el cliente toma su decisión de compra para satisfacer su necesidad. De tal forma que cuando el cliente define el sitio donde va a visitar cada paso que toma va conformando su ciclo de servicio.
            p.mb-0 A continuación, se presenta como ejemplo el ciclo del servicio de un centro médico (Albrecht, 2006, p.41).
          .col-md-4.mb-4.mb-md-0
            figure
              img.w-50.mx-auto(src='@/assets/curso/tema6/img06.svg', alt='')          
          .col-md-6
            ul.lista-ul.mb-0.Clist02
              li 
                i.fas.fa-check
                p.mb-0 Llamar al centro médico para pedir una cita.
              li 
                i.fas.fa-check
                p.mb-0 Ir al centro médico a la hora fijada.
              li 
                i.fas.fa-check
                p.mb-0 Buscar dónde estacionar el carro.
              li 
                i.fas.fa-check
                p.mb-0 Entrar al centro médico y tratar de orientarse solo.
              li 
                i.fas.fa-check
                p.mb-0 Leer los avisos para saber adónde ir.
              li 
                i.fas.fa-check
                p.mb-0 Preguntar direcciones.
              li 
                i.fas.fa-check
                p.mb-0 Tomar el ascensor y atravesar varios corredores.
              li 
                i.fas.fa-check
                p.mb-0 Presentarse en la oficina de la administración para el examen.
              li 
                i.fas.fa-check
                p.mb-0 Mostrar la tarjeta del seguro, llenar formas, etc.
              li 
                i.fas.fa-check
                p.mb-0 Sentarse en la sala de espera hasta que llegue el turno.
              li 
                i.fas.fa-check
                p.mb-0 Ir con la auxiliar al sitio del examen.

          .col-md-6
            ul.lista-ul.mb-0.Clist02
              li 
                i.fas.fa-check
                p.mb-0 Dejarse tomar los signos vitales.
              li 
                i.fas.fa-check
                p.mb-0 Analizar las condiciones físicas en una entrevista.
              li 
                i.fas.fa-check
                p.mb-0 Pasar por una serie de pruebas y operaciones.
              li 
                i.fas.fa-check
                p.mb-0 Tener una entrevista final con un médico.
              li 
                i.fas.fa-check
                p.mb-0 Pedir y pagar la cuenta.
              li 
                i.fas.fa-check
                p.mb-0 Buscar la salida del centro médico y regresar al carro.
              li 
                i.fas.fa-check
                p.mb-0 Salir del parqueadero.
              li 
                i.fas.fa-check
                p.mb-0 Esperar los resultados del examen.
              li 
                i.fas.fa-check
                p.mb-0 Recibir los resultados, leerlos y reaccionar ante ellos.
              li 
                i.fas.fa-check
                p.mb-0 Llamar al centro médico para algún tratamiento posterior si es necesario.

        .row(titulo="Características del ciclo del servicio")
          .col-md-8.mb-4.mb-md-0
            p Se entiende los indicadores o métricas de satisfacción del cliente como aquellos datos que permiten medir el estado del cliente con relación al servicio o producto ofrecido. Serna (2007) señala indicadores de medición del servicio. (Ver anexo).
            p.mb-0 ¿Cómo medir la calidad en el servicio?
          .col-md-4.mb-4.mb-md-0
            figure
              img.w-50.mx-auto(src='@/assets/curso/tema6/img07.svg', alt='')          
          .col-md-6
            ul.lista-ul.mb-0.Clist02
              li 
                i.fas.fa-check
                p.mb-0 Puntualidad en el servicio.
              li 
                i.fas.fa-check
                p.mb-0 Puntualidad en la entrega del servicio.
              li 
                i.fas.fa-check
                p.mb-0 Cumplimiento en el tiempo del ciclo del servicio.
              li 
                i.fas.fa-check
                p.mb-0 Exactitud en el cumplimiento de los compromisos.
              li 
                i.fas.fa-check
                p.mb-0 Relación beneficio – costo.
              li 
                i.fas.fa-check
                p.mb-0 Personal calificado para el servicio adquirido.
              li 
                i.fas.fa-check
                p.mb-0 Cumplimiento de los plazos acordados.
              li 
                i.fas.fa-check
                p.mb-0 Amabilidad y buen trato en la prestación del servicio.
              li 
                i.fas.fa-check
                p.mb-0 Servicio asociado a lo pactado.







  
</template>

<script>
export default {
  name: 'Tema6',
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
