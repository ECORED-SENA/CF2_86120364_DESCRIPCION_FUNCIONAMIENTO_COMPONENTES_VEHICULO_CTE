<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 La propulsión de la fuerza del motor hasta las ruedas
    p.mb-5(data-aos="fade-right") El sistema de transmisión de fuerza del motor a las ruedas motrices del vehículo está compuesto por varios elementos clave:
    .row.bg-c3
      .col-12
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10(data-aos="fade-down")
              .p-4.bg-c6
                .row.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    .p-4.bg-c4
                      .row.mb-3
                        .col-12
                          .p-3.bg-c5
                            p.mb-0 #[b Embrague:] conecta y desconecta la fuerza del motor a la caja de cambios mecánica.
                      .row.mb-3
                        .col-12
                          .p-3.bg-c5
                            p.mb-0 #[b Caja de cambios mecánica:] regula la velocidad y el torque transmitido a las ruedas.
                      .row
                        .col-12
                          .p-3.bg-c5
                            p.mb-0 #[b Caja de transferencia:] envía la fuerza al eje delantero, al eje posterior o a ambos simultáneamente, dependiendo del tipo de tracción del vehículo.
                  .col-lg-7
                    .titulo-sexto.color-acento-contenido.mb-3
                      p.mb-0 #[b Figura 1.] Sistema de transmisión en un vehículo 4x4
                    figure
                      img.mb-2(src='@/assets/curso/tema1/img1.svg', alt='Esquema de un sistema de transmisión con motor longitudinal y caja de cambios conectada a diferenciales delantero y trasero.', style="width: 550px").m-auto
                      figcaption
                        p.mb-0 #[b Nota. LOS TEQUES ALL TERRAIN. (2022).]
          p.mb-5(data-aos="fade-right") A continuación, se describe cómo se transfiere esta fuerza desde la caja de cambios o la caja de transferencia hasta los sistemas diferenciales delantero y posterior, considerando distintos tipos de propulsión:
          .row.justify-content-center.mb-5
            .col-md-5.col-lg-3.mb-3.mb-lg-0(data-aos="fade-right")
              .p-3.bg-c4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img2.svg', alt='', style="width: 100px").m-auto
                  .col
                    p.mb-0 #[b Propulsión delantera]
            .col-md-5.col-lg-3.mb-3.mb-lg-0(data-aos="fade-up")
              .p-3.bg-c4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg', alt='', style="width: 100px").m-auto
                  .col
                    p.mb-0 #[b Propulsión posterior]
            .col-md-5.col-lg-3(data-aos="fade-left")
              .p-3.bg-c4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img4.svg', alt='', style="width: 100px").m-auto
                  .col
                    p.mb-0 #[b Propulsión en las cuatro ruedas]
    .row.mb-4.ms-0
      .col-auto.bg-c7(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img5.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Función de los ejes de propulsión
    p.mb-4(data-aos="fade-right") Los ejes de propulsión tienen la función de transmitir la fuerza del motor desde la caja de cambios hasta los diferenciales o, en algunos casos, desde la caja de transferencia hacia los diferenciales delantero, posterior o ambos. Existen dos sistemas principales de propulsión:
    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img2.png', alt='', style="width: 490px").m-auto
      .col-lg-7(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Propulsión con transmisión directa a los diferenciales")
            .col-12
              p.mb-0 La fuerza se envía desde la caja de cambios o la caja de transferencia directamente a los diferenciales. Es común en vehículos con motor y caja de cambios longitudinales, y tracción en las cuatro ruedas.
          .row(titulo="Diseño conceptual")
            .col-12
              p.mb-0 El movimiento sale del diferencial, alojado generalmente en la caja de cambios, y se dirige directamente a las ruedas motrices. Se usa en vehículos con motor y caja de cambios transversal.
    p.mb-5(data-aos="fade-down") La configuración de los ejes de propulsión es clave en la ingeniería automotriz, ya que influye en el rendimiento y en la optimización del espacio del vehículo.
    .row.bg-c8.mb-5
      .col-12
        .p-5
          .tarjeta.tarjeta--azul2(data-aos="fade-down")
            .p-4
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-lg-5.mb-3.mb-lg-0
                    p #[b Configuración de ejes]
                    p.mb-0 En el primer sistema, los ejes de propulsión están articulados y pueden dividirse en una, dos o varias partes según la longitud del vehículo y el diseño del sistema de suspensión. Además de transmitir la fuerza, deben permitir el movimiento de la suspensión mientras impulsan los diferenciales.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img7.svg', alt='Diagrama del sistema de transmisión trasera con motor longitudinal, caja de cambios, eje de transmisión y diferencial trasero.z', style="width: 490px").m-auto
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-lg-5.mb-3.mb-lg-0
                    p #[b Función adicional]
                    p.mb-0 En el segundo sistema, utilizado en vehículos con motores y cajas de cambios transversales, los ejes de propulsión salen directamente del diferencial hacia las ruedas motrices. Este diseño permite la instalación del motor tanto en la parte delantera como en la posterior del vehículo. Sin embargo, la tendencia actual en los diseños modernos es ubicar el motor, el embrague, la caja de cambios, el diferencial y los ejes de propulsión en la parte delantera, lo que optimiza el espacio y evita el uso de sistemas de propulsión largos.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/img8.svg', alt='Esquema de transmisión de un motor delantero con tracción delantera y junta homocinética.', style="width: 490px").m-auto
    .row.mb-4.ms-0
      .col-auto.bg-c7(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img5.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Eje de propulsión posterior o cardán
    .row.align-items-center.mb-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p El eje propulsor o #[b cardán] está compuesto por un tubo con dos juntas de acople en sus extremos. Una junta se conecta al eje de salida de la caja de cambios o caja de transferencia, mientras que la otra se acopla con la junta del cono del sistema diferencial.
        .row
          .col-12
            .p-3.bg-c9
              p Existen diversas formas de acoplamiento en las partes del cardán, pero generalmente incluyen:
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-wrench
                  |
                  p.mb-0 Cruceta.
                li.d-flex
                  i.fas.fa-wrench
                  |
                  p.mb-0 Cuerpo flexible de goma.
                li.d-flex
                  i.fas.fa-wrench
                  |
                  p.mb-0 Láminas flexibles.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img4.png', alt='', style="width: 490px").m-auto
    .row.bg-c1
      .col-12
        .p-5
          .row.mb-5(data-aos="fade-down")
            .col-lg-auto.pe-lg-0.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema1/img5.png', alt='', style="width: 430px").m-auto
            .col-lg.bg-c10
              .row.h-100.align-items-center
                .col-12
                  .p-3
                    p.mb-0 El tubo es hueco para reducir peso. En la sección del eje de salida de la caja se encuentra un acople estriado que le permite expandirse y comprimirse, ajustándose a la variación de longitud del eje cuando actúa la suspensión.
          .row.mb-4.ms-0
            .col-auto.bg-c7(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img5.svg', alt='', style='width: 40px')
                .col
                  h3.mb-0 Partes del eje
          p.mb-4(data-aos="fade-right") El número de secciones del eje varía según la distancia entre la caja de cambios y el diferencial, el ángulo de instalación y el recorrido de la suspensión. En vehículos con tracción delantera (motor longitudinal o transversal) o en aquellos donde el diferencial está integrado en la caja de cambios, los ejes de propulsión se denominan semiejes.
          .row.justify-content-center
            .col-lg-10
              .p-4.bg-c12
                .row.align-items-center
                  .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
                    .titulo-sexto.color-acento-contenido.mb-3
                      p.mb-0 #[b Figura 2.] Despiece y componentes del sistema de transmisión con cardán
                    figure
                      img.mb-2(src='@/assets/curso/tema1/img9.svg', alt='Despiece de un cardán con sus componentes, incluyendo crucetas, retenes y abrazaderas.', style="width: 550px").m-auto
                  .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
                    .p-4.bg-c11
                      .row.mb-3
                        .col-12
                          .p-3.bg-c5
                            p.mb-0 #[b Sección única o múltiple:] la cantidad de secciones depende de la distancia y el diseño del vehículo.
                      .row.mb-3
                        .col-12
                          .p-3.bg-c5
                            p.mb-0 #[b Cruceta de unión:] permite la absorción de vibraciones y mantiene la estabilidad del eje.
                      .row
                        .col-12
                          .p-3.bg-c5
                            p.mb-0 #[b Soporte de goma con rodamiento central:] facilita la rotación libre del cardán.
                  
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
