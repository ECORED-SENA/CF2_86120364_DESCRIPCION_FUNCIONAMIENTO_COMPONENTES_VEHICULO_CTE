<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Los ejes de propulsión y el cardán',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar  los sistemas de propulsión y transmisión de fuerza en los vehículos, asemejando los componentes clave, sus funciones y la importancia de su correcto funcionamiento en el desempeño automotriz.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal de los ejes de propulsión en un vehículo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener la estabilidad del vehículo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Transmitir la fuerza del motor a las ruedas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la fricción de los neumáticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Enfriar el sistema de transmisión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué componente conecta el eje de salida de la caja de cambios con el diferencial?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Suspensión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Volante de inercia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cardán.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Alternador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes es una ventaja del sistema de propulsión con ejes directos desde el diferencial?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor complejidad en el mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mayor desgaste de los neumáticos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducción del torque disponible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Optimización del espacio en el vehículo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué componente permite la articulación del eje cardán?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ruedas dentadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Correa de distribución.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Crucetas o juntas universales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Volante de inercia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la función de la unidad viscosa en un vehículo con tracción en las cuatro ruedas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Regular la diferencia de torque entre los ejes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Controlar la temperatura del motor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejorar la aerodinámica del vehículo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el desgaste del sistema de frenos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipo de junta es utilizada en algunos vehículos para reducir vibraciones en el cardán?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Junta rígida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Junta flexible de goma.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Junta de fricción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Junta de presión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué sistema es más común en vehículos de gama alta para mejorar la transmisión de fuerza?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eje rígido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sistema homocinético.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sistema de poleas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eje de transmisión por cadena.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿En qué tipo de vehículos es más frecuente encontrar un sistema de propulsión con ejes articulados?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Vehículos con motor y caja longitudinal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Motocicletas de baja cilindrada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Automóviles eléctricos compactos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Bicicletas con asistencia eléctrica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la principal diferencia entre el cardán y los semiejes?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El cardán transmite fuerza a los diferenciales, los semiejes a las ruedas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Los semiejes solo existen en camiones de carga.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El cardán solo se usa en motocicletas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los semiejes dependen del sistema eléctrico del vehículo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué sucede si una cruceta no está correctamente centrada en el cardán?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se generan vibraciones y desbalanceo en la transmisión.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'No afecta el desempeño del vehículo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejora la estabilidad del diferencial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El motor se sobrecalienta más rápido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El sistema de transmisión con ejes articulados permite el movimiento de la suspensión mientras impulsa los diferenciales.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'En los vehículos modernos, la tendencia es ubicar el motor, la caja de cambios y el diferencial en la parte posterior.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'La junta flexible de goma reemplaza a las crucetas en ciertos sistemas de propulsión.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'La unidad viscosa se encarga de la lubricación del cardán en vehículos con tracción trasera.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El sistema homocinético permite una transmisión de fuerza más estable que el sistema de crucetas.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
