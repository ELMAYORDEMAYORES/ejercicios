import { useLocalStorage } from '../hooks/useLocalStorage'
import { workoutData } from '../data/workoutData'
import type { ExerciseData, WeightData } from '../types'

const weekLabels = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4']

export default function Header() {
  const [checked] = useLocalStorage<ExerciseData>('ejercicios-checked', {})
  const [weights] = useLocalStorage<WeightData>('ejercicios-weights', {})

  const totalExercises = workoutData.reduce(
    (sum, week) => sum + week.days.reduce((s, d) => s + d.exercises.length, 0),
    0,
  )
  const completed = Object.keys(checked).filter((k) => checked[k]).length
  const allWeights = Object.keys(weights).filter((k) => weights[k] !== '')

  return (
    <header className="mb-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Rutina Mensual de Fuerza
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            4 semanas &middot; Sobrecarga progresiva &middot; 3 patrones fundamentales
          </p>
        </div>
        <div className="hidden shrink-0 gap-3 sm:flex">
          {weekLabels.map((label, i) => {
            const weekExercises = workoutData[i].days.reduce(
              (s, d) => s + d.exercises.length,
              0,
            )
            const weekDone = workoutData[i].days
              .reduce((s, d) => s + d.exercises.length, 0) > 0
              ? workoutData[i].days
                  .flatMap((d) => d.exercises)
                  .filter((e) => checked[e.id]).length
              : 0
            const pct = weekExercises > 0 ? Math.round((weekDone / weekExercises) * 100) : 0
            return (
              <div key={label} className="text-center">
                <div className="text-xs font-semibold text-slate-500">{label}</div>
                <div className="mt-0.5 text-lg font-bold text-white">{pct}%</div>
                <div className="mt-1 h-1 w-12 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-violet-500 transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500">
        <span>
          Ejercicios:{' '}
          <strong className="text-slate-300">
            {completed}/{totalExercises}
          </strong>{' '}
          completados
        </span>
        <span>
          Pesos registrados:{' '}
          <strong className="text-slate-300">{allWeights.length}</strong>
        </span>
      </div>
    </header>
  )
}
