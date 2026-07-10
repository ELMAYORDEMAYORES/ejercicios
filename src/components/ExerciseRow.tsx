import type { Exercise } from '../types'

interface Props {
  exercise: Exercise
  checked: boolean
  weightValue: string
  onToggle: () => void
  onWeightChange: (value: string) => void
}

export default function ExerciseRow({ exercise, checked, weightValue, onToggle, onWeightChange }: Props) {
  return (
    <tr className={`group transition-colors duration-200 ${checked ? 'bg-violet-500/5' : 'hover:bg-slate-800/30'}`}>
      <td className="px-3 py-2.5 sm:px-4">
        <button
          onClick={onToggle}
          className={`flex h-5 w-5 items-center justify-center rounded border-2 transition-all duration-200 ${
            checked
              ? 'border-violet-500 bg-violet-500 shadow-[0_0_8px_rgba(168,85,247,0.35)]'
              : 'border-slate-600 hover:border-slate-500'
          }`}
          aria-label={checked ? 'Marcar como no completado' : 'Marcar como completado'}
        >
          {checked && (
            <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
      </td>
      <td className="px-3 py-2.5 text-sm font-medium text-slate-200 sm:px-4">
        {exercise.name}
      </td>
      <td className="whitespace-nowrap px-3 py-2.5 text-center text-sm text-slate-400 sm:px-4">
        {exercise.sets}&times;{exercise.reps}
      </td>
      <td className="hidden whitespace-nowrap px-3 py-2.5 text-center text-sm text-slate-400 sm:table-cell sm:px-4">
        {exercise.weight}
      </td>
      <td className="px-3 py-2.5 sm:px-4">
        <input
          type="text"
          inputMode="decimal"
          value={weightValue}
          onChange={(e) => onWeightChange(e.target.value)}
          placeholder="—"
          className="w-full max-w-[80px] rounded-md border border-slate-700/60 bg-slate-800/60 px-2 py-1 text-center text-sm text-white placeholder-slate-600 transition-all duration-200 focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
        />
      </td>
      <td className="hidden px-3 py-2.5 text-xs text-slate-500 lg:table-cell lg:px-4">
        {exercise.notes}
      </td>
    </tr>
  )
}
