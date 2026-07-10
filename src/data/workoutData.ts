import type { Week } from '../types'

export const workoutData: Week[] = [
  {
    week: 1,
    title: 'Construcción de volumen',
    description: 'Sentadilla trasera · Press banca · Peso muerto convencional',
    days: [
      {
        day: 'Lun',
        fullDay: 'Lunes',
        focus: 'Pierna — Sentadilla trasera',
        exercises: [
          { id: 'w1d1e1', name: 'Sentadilla trasera', sets: '3', reps: '5', weight: '77.5% 1RM (RPE 7-8)', notes: 'Series de trabajo pesadas pero controladas' },
          { id: 'w1d1e2', name: 'Sentadilla búlgara con mancuernas', sets: '3', reps: '8 por pierna', weight: '—', notes: 'Enfocar en equilibrio y rango completo' },
          { id: 'w1d1e3', name: 'Curl de piernas (máquina o nórdico)', sets: '3', reps: '10', weight: '—', notes: 'Control excéntrico' },
          { id: 'w1d1e4', name: 'Rueda abdominal o plancha lastrada', sets: '3', reps: '10-12', weight: '—', notes: 'Mantener core rígido' },
        ],
      },
      {
        day: 'Mar',
        fullDay: 'Martes',
        focus: 'Empuje — Press banca',
        exercises: [
          { id: 'w1d2e1', name: 'Press banca plano', sets: '3', reps: '5', weight: '77.5% 1RM', notes: 'RPE 7-8' },
          { id: 'w1d2e2', name: 'Press militar de pie', sets: '3', reps: '5', weight: '—', notes: 'Subir peso progresivamente' },
          { id: 'w1d2e3', name: 'Fondos en paralelas lastrados', sets: '3', reps: '8', weight: 'Lastre exigente', notes: 'Rango completo, codos pegados' },
          { id: 'w1d2e4', name: 'Extensión de tríceps en polea', sets: '3', reps: '12', weight: '—', notes: 'Contracción máxima al final' },
        ],
      },
      {
        day: 'Mié',
        fullDay: 'Miércoles',
        focus: 'Tracción — Peso muerto convencional',
        exercises: [
          { id: 'w1d3e1', name: 'Peso muerto convencional', sets: '3', reps: '5', weight: '80% 1RM', notes: '1×5 pesada + 2×5 back-off al 90%' },
          { id: 'w1d3e2', name: 'Remo con barra', sets: '3', reps: '8', weight: '—', notes: 'Control, sin rebote' },
          { id: 'w1d3e3', name: 'Dominadas lastradas', sets: '3', reps: '5', weight: 'Lastre que permita 5 reps', notes: 'Rango completo, sin impulso' },
          { id: 'w1d3e4', name: 'Face pull', sets: '3', reps: '15', weight: '—', notes: 'Apretar hombros al final' },
        ],
      },
      {
        day: 'Jue',
        fullDay: 'Jueves',
        focus: 'Explosivo + Agarre',
        exercises: [
          { id: 'w1d4e1', name: 'Power clean (cargada de potencia)', sets: '5', reps: '3', weight: 'Moderado', notes: 'Técnica explosiva, buena cadera' },
          { id: 'w1d4e2', name: 'Saltos al cajón (box jumps)', sets: '4', reps: '5', weight: '—', notes: 'Aterrizaje suave' },
          { id: 'w1d4e3', name: 'Dead hang lastrado (colgarse con lastre)', sets: '3', reps: 'al fallo', weight: '—', notes: 'Descanso 90 seg entre series' },
          { id: 'w1d4e4', name: 'Pinza con discos (plate pinch)', sets: '3', reps: '20-30 seg', weight: '—', notes: 'Sujeción bilateral' },
        ],
      },
      {
        day: 'Vie',
        fullDay: 'Viernes',
        focus: 'Peso corporal (fuerza) + Andar con carga',
        exercises: [
          { id: 'w1d5e1', name: 'Fondos lastrados', sets: '4', reps: '5', weight: 'Carga exigente (RPE 8-9)', notes: 'Últimas reps duras' },
          { id: 'w1d5e2', name: 'Dominadas lastradas', sets: '4', reps: '5', weight: '—', notes: 'Sin balanceo' },
          { id: 'w1d5e3', name: "Paseo del granjero (farmer's walk)", sets: '4', reps: '30 m', weight: 'Mancuernas pesadas', notes: 'Subir peso o distancia si es fácil' },
        ],
      },
    ],
  },
  {
    week: 2,
    title: 'Intensidad creciente',
    description: 'Sentadilla trasera · Press banca · Remo pesado + Rumano',
    days: [
      {
        day: 'Lun',
        fullDay: 'Lunes',
        focus: 'Pierna — Sentadilla trasera',
        exercises: [
          { id: 'w2d1e1', name: 'Sentadilla trasera', sets: '4', reps: '3', weight: '85% 1RM', notes: 'RPE 8-9, series pesadas' },
          { id: 'w2d1e2', name: 'Prensa de piernas', sets: '3', reps: '8', weight: 'Pesada', notes: 'Controlada, rango completo' },
          { id: 'w2d1e3', name: 'Peso muerto rumano con mancuernas', sets: '3', reps: '8', weight: '—', notes: 'Tensión isquiotibial constante' },
          { id: 'w2d1e4', name: 'Ab wheel', sets: '4', reps: '10', weight: '—', notes: 'Rodillas o pies según nivel' },
        ],
      },
      {
        day: 'Mar',
        fullDay: 'Martes',
        focus: 'Empuje — Press banca',
        exercises: [
          { id: 'w2d2e1', name: 'Press banca plano', sets: '4', reps: '3', weight: '85% 1RM', notes: 'RPE 8-9' },
          { id: 'w2d2e2', name: 'Press inclinado con mancuernas', sets: '3', reps: '6-8', weight: '—', notes: 'Subir respecto a semana 1' },
          { id: 'w2d2e3', name: 'Fondos en paralelas lastrados', sets: '3', reps: '6', weight: 'Más lastre que sem 1', notes: 'Exigente' },
          { id: 'w2d2e4', name: 'Tríceps francés', sets: '3', reps: '10', weight: '—', notes: 'Codo firme, control excéntrico' },
        ],
      },
      {
        day: 'Mié',
        fullDay: 'Miércoles',
        focus: 'Tracción — Remo con barra pesado + Rumano',
        exercises: [
          { id: 'w2d3e1', name: 'Remo con barra estricto', sets: '4', reps: '3', weight: '85% 1RM remo', notes: 'Muy exigente, sin balanceo' },
          { id: 'w2d3e2', name: 'Peso muerto rumano', sets: '3', reps: '5', weight: 'Pesado', notes: 'Mantener tensión isquiotibial' },
          { id: 'w2d3e3', name: 'Jalón al pecho agarre neutro', sets: '3', reps: '8', weight: '—', notes: 'Sin impulso, juntar omóplatos' },
          { id: 'w2d3e4', name: 'Curl de bíceps martillo', sets: '3', reps: '10', weight: '—', notes: 'Control total' },
        ],
      },
      {
        day: 'Jue',
        fullDay: 'Jueves',
        focus: 'Peso muerto a una mano + Agarre',
        exercises: [
          { id: 'w2d4e1', name: 'Suitcase deadlift (barra o mancuerna)', sets: '4', reps: '5 por lado', weight: 'Desafiante', notes: 'Luchar el agarre y el core' },
          { id: 'w2d4e2', name: 'Remo a una mano con mancuerna', sets: '3', reps: '8 por lado', weight: '—', notes: 'Sin straps' },
          { id: 'w2d4e3', name: 'Thick bar hold o sujeción con toalla', sets: '3', reps: 'máx duración', weight: '—', notes: 'Ir al fallo en cada serie' },
        ],
      },
      {
        day: 'Vie',
        fullDay: 'Viernes',
        focus: 'Explosivo + Andar con carga',
        exercises: [
          { id: 'w2d5e1', name: 'Kettlebell swing pesado', sets: '4', reps: '12-15', weight: 'Pesado', notes: 'Potencia de cadera explosiva' },
          { id: 'w2d5e2', name: 'Lanzamiento balón medicinal (slam)', sets: '4', reps: '6 por lado', weight: '—', notes: 'Rotacional o frontal' },
          { id: 'w2d5e3', name: 'Suitcase carry (paseo unilateral)', sets: '4', reps: '30 m por lado', weight: 'Desafiante', notes: 'Oblicuo y agarre, caminar firme' },
        ],
      },
    ],
  },
  {
    week: 3,
    title: 'Volumen denso y variación',
    description: 'Sentadilla frontal · Press banca pausa · Peso muerto sumo',
    days: [
      {
        day: 'Lun',
        fullDay: 'Lunes',
        focus: 'Pierna — Sentadilla frontal',
        exercises: [
          { id: 'w3d1e1', name: 'Sentadilla frontal', sets: '5', reps: '5', weight: '75% 1RM trasera', notes: '5 series duras, torso erguido' },
          { id: 'w3d1e2', name: 'Zancadas caminando con barra', sets: '3', reps: '10 pasos por pierna', weight: '—', notes: 'Equilibrio y rango' },
          { id: 'w3d1e3', name: 'Glute ham raise o peso muerto rumano', sets: '3', reps: '8', weight: '—', notes: 'Cadena posterior' },
          { id: 'w3d1e4', name: 'Elevación de piernas colgado', sets: '4', reps: '12', weight: '—', notes: 'Sin balanceo' },
        ],
      },
      {
        day: 'Mar',
        fullDay: 'Martes',
        focus: 'Empuje — Press banca con pausa',
        exercises: [
          { id: 'w3d2e1', name: 'Press banca con pausa (2 seg)', sets: '5', reps: '5', weight: '72.5-75% 1RM', notes: 'Pausa en pecho, eliminar rebote' },
          { id: 'w3d2e2', name: 'Press militar de pie', sets: '3', reps: '5', weight: '+2.5 kg vs sem 1', notes: 'Progresión' },
          { id: 'w3d2e3', name: 'Aperturas con mancuernas en banco plano', sets: '3', reps: '10', weight: '—', notes: 'Estiramiento profundo' },
          { id: 'w3d2e4', name: 'Extensión de tríceps con mancuerna a dos manos', sets: '3', reps: '10', weight: '—', notes: 'Por encima de la cabeza' },
        ],
      },
      {
        day: 'Mié',
        fullDay: 'Miércoles',
        focus: 'Tracción — Peso muerto sumo (intensidad)',
        exercises: [
          { id: 'w3d3e1', name: 'Peso muerto sumo', sets: '4', reps: '3', weight: '85% 1RM sumo', notes: 'Muy pesado, técnica firme' },
          { id: 'w3d3e2', name: 'Remo Pendlay', sets: '3', reps: '5', weight: '—', notes: 'Explosivo desde el suelo' },
          { id: 'w3d3e3', name: 'Dominadas con tempo 3-1-X-1', sets: '3', reps: '5', weight: '—', notes: 'Bajar lento (3 seg)' },
          { id: 'w3d3e4', name: 'Encogimientos de trapecio con barra', sets: '3', reps: '10', weight: '—', notes: 'Hombros arriba y abajo' },
        ],
      },
      {
        day: 'Jue',
        fullDay: 'Jueves',
        focus: 'Peso corporal avanzado + Agarre',
        exercises: [
          { id: 'w3d4e1', name: 'Pike push-ups o handstand push-ups', sets: '4', reps: '5-8', weight: 'Lastre si posible', notes: 'Flexiones verticales' },
          { id: 'w3d4e2', name: 'Pistol squats lastradas (mancuerna/chaleco)', sets: '4', reps: '5 por pierna', weight: '—', notes: 'Control, bajar completo' },
          { id: 'w3d4e3', name: 'Rodillo de muñeca (wrist roller)', sets: '3', reps: 'completas', weight: 'Moderado', notes: 'Enrollar y desenrollar' },
        ],
      },
      {
        day: 'Vie',
        fullDay: 'Viernes',
        focus: 'Peso muerto a una mano pesado + Andar con carga',
        exercises: [
          { id: 'w3d5e1', name: 'Suitcase deadlift con barra', sets: '3', reps: '3 pesadas por lado', weight: 'Buscar nuevo 3RM', notes: 'Intenta un 3RM por lado' },
          { id: 'w3d5e2', name: 'Overhead carry (paseo sobre cabeza)', sets: '4', reps: '20 m', weight: 'Kettlebell o barra', notes: 'Brazo bloqueado, core activo' },
        ],
      },
    ],
  },
  {
    week: 4,
    title: 'Test y descarga activa',
    description: 'Test de sentadilla · Press banca · Peso muerto',
    days: [
      {
        day: 'Lun',
        fullDay: 'Lunes',
        focus: 'Pierna — Test de sentadilla + descarga',
        exercises: [
          { id: 'w4d1e1', name: 'Sentadilla trasera — single pesado', sets: '1', reps: '1', weight: 'RPE 9-9.5 (no fallar)', notes: 'Test de fuerza máxima' },
          { id: 'w4d1e2', name: 'Sentadilla trasera — back-off', sets: '3', reps: '3', weight: '80% del single', notes: 'Descarga activa' },
          { id: 'w4d1e3', name: 'Sentadilla búlgara sin lastre', sets: '2', reps: '10', weight: '—', notes: 'Ligero, recuperación' },
          { id: 'w4d1e4', name: 'Curl de piernas', sets: '2', reps: '12', weight: '—', notes: 'Ligero' },
          { id: 'w4d1e5', name: 'Ab wheel', sets: '2', reps: '10', weight: '—', notes: 'Ligero' },
        ],
      },
      {
        day: 'Mar',
        fullDay: 'Martes',
        focus: 'Empuje — Test de press banca + descarga',
        exercises: [
          { id: 'w4d2e1', name: 'Press banca plano — single pesado', sets: '1', reps: '1', weight: 'RPE 9', notes: 'Test de fuerza máxima' },
          { id: 'w4d2e2', name: 'Press banca plano — back-off', sets: '3', reps: '3', weight: '80% del single', notes: 'Descarga activa' },
          { id: 'w4d2e3', name: 'Press militar ligero', sets: '2', reps: '8', weight: '—', notes: 'Ligero' },
          { id: 'w4d2e4', name: 'Fondos lastrados', sets: '2', reps: '5', weight: '70% del peso máximo', notes: 'Descarga' },
          { id: 'w4d2e5', name: 'Face pull', sets: '2', reps: '15', weight: '—', notes: 'Movilidad' },
        ],
      },
      {
        day: 'Mié',
        fullDay: 'Miércoles',
        focus: 'Tracción — Test de peso muerto + descarga',
        exercises: [
          { id: 'w4d3e1', name: 'Peso muerto convencional — single pesado', sets: '1', reps: '1', weight: 'RPE 9', notes: 'Test de fuerza máxima' },
          { id: 'w4d3e2', name: 'Peso muerto convencional — back-off', sets: '2', reps: '3', weight: '80% del single', notes: 'Descarga activa' },
          { id: 'w4d3e3', name: 'Remo con barra', sets: '2', reps: '8', weight: 'Suave', notes: 'Ligero' },
          { id: 'w4d3e4', name: 'Dominadas lastradas', sets: '3', reps: '3', weight: 'Mismo lastre de sem anteriores', notes: 'Comprobar que se mantiene fuerza' },
          { id: 'w4d3e5', name: 'Peso muerto rumano ligero', sets: '2', reps: '8', weight: '—', notes: 'Ligero' },
        ],
      },
      {
        day: 'Jue',
        fullDay: 'Jueves',
        focus: 'Explosivo + Agarre',
        exercises: [
          { id: 'w4d4e1', name: 'Snatch grip high pull', sets: '5', reps: '3', weight: 'Velocidad', notes: 'Jalón alto con agarre ancho' },
          { id: 'w4d4e2', name: 'Lanzamiento lateral balón medicinal', sets: '3', reps: '8 por lado', weight: '—', notes: 'Rotación explosiva' },
          { id: 'w4d4e3', name: 'Towel hang (colgarse con toalla)', sets: '3', reps: 'al fallo', weight: '—', notes: 'Sin lastre' },
        ],
      },
      {
        day: 'Vie',
        fullDay: 'Viernes',
        focus: 'Peso corporal + Andar con carga larga',
        exercises: [
          { id: 'w4d5e1', name: 'Dominadas lastradas', sets: '4', reps: '3', weight: 'Lastre más pesado de semanas ant.', notes: 'Buena forma, sin fallo' },
          { id: 'w4d5e2', name: 'Fondos en anillas lastrados (o paralelas)', sets: '4', reps: '5', weight: '—', notes: 'Estabilidad' },
          { id: 'w4d5e3', name: "Farmer's walk de larga distancia", sets: '5', reps: '40 m', weight: 'Ligeramente menor que semanas ant.', notes: 'Resistencia de agarre y core' },
        ],
      },
    ],
  },
]
