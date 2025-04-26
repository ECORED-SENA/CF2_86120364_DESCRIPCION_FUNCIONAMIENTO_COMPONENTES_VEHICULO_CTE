<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .p-5
          .row.align-items-center.mb-4
            .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
              p Los ejes de propulsión y el cardán son componentes fundamentales en la transmisión de fuerza en los vehículos, permitiendo que el movimiento generado por el motor llegue a las ruedas de manera eficiente. Estos elementos trabajan en conjunto con la caja de cambios y la caja de transferencia para distribuir la potencia según las necesidades del sistema de tracción. Su correcto funcionamiento es esencial para garantizar un desempeño óptimo y una conducción estable.
              .row
                .col-lg-auto.pe-lg-0.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/intro/img2.png', alt='', style="width: 380px").m-auto
                .col-lg.bg-c2
                  .row.h-100.align-items-center
                    .col-12
                      .p-3
                        p.mb-0 El cardán y sus articulaciones, como las crucetas o juntas universales, permiten compensar los movimientos de la suspensión y mantener la continuidad en la transmisión de la fuerza. Dependiendo del diseño del vehículo, se pueden emplear diferentes sistemas de acoplamiento, como las juntas flexibles de goma o las unidades viscosas, cada una con características específicas para mejorar la tracción y la estabilidad.
            .col-lg-3(data-aos="fade-left")
              figure
                img(src='@/assets/curso/intro/img3.png', alt='', style="width: 300px").m-auto
          .row.align-items-center(data-aos="fade-right")
            .col-md-auto
              figure
                img(src='@/assets/curso/intro/img1.svg', alt='', style="width: 100px").m-auto
            .col-md
              p.mb-0 Además, existen distintas configuraciones de propulsión según la ubicación del motor y la disposición del diferencial. Mientras que algunos vehículos emplean sistemas de eje rígido, otros recurren a mecanismos homocinéticos para optimizar la entrega de torque y reducir vibraciones. Comprender estos sistemas es clave para el mantenimiento y la mejora del rendimiento automotriz.

</template>

<script>
export default {
  name: 'Introduccion',
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
