import type { DayWorkout, ExerciseData, WeightData } from '../types'
import ExerciseRow from './ExerciseRow'

interface Props {
  day: DayWorkout
  checked: ExerciseData
  weights: WeightData
  onToggle: (id: string) => void
  onWeightChange: (id: string, value: string) => void
}

export default function ExerciseTable({ day, checked, weights, onToggle, onWeightChange }: Props) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-800/60 bg-slate-900/40">
      <div className="border-b border-slate-800/60 px-4 py-2.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-violet-400">
          {day.fullDay}
        </span>
        <span className="ml-2 text-xs text-slate-500">&middot; {day.focus}</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-800/40 text-[11px] uppercase tracking-wider text-slate-600">
              <th className="w-10 px-3 py-2 sm:px-4" />
              <th className="px-3 py-2 font-medium sm:px-4">Ejercicio</th>
              <th className="px-3 py-2 text-center font-medium">Series</th>
              <th className="hidden px-3 py-2 text-center font-medium sm:table-cell">
                % / Peso ref.
              </th>
              <th className="px-3 py-2 text-center font-medium">
                Tu peso
                <span className="ml-1 text-[10px] text-slate-600">(kg)</span>
              </th>
              <th className="hidden px-3 py-2 font-medium lg:table-cell">Notas</th>
            </tr>
          </thead>
          <tbody>
            {day.exercises.map((ex) => (
              <ExerciseRow
                key={ex.id}
                exercise={ex}
                checked={!!checked[ex.id]}
                weightValue={weights[ex.id] ?? ''}
                onToggle={() => onToggle(ex.id)}
                onWeightChange={(v) => onWeightChange(ex.id, v)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
