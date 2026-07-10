import type { DayWorkout, ExerciseData } from '../types'

interface Props {
  days: DayWorkout[]
  activeDay: number
  onSelect: (index: number) => void
  checked: ExerciseData
}

export default function DayTabs({ days, activeDay, onSelect, checked }: Props) {
  return (
    <div className="flex gap-1 overflow-x-auto">
      {days.map((day, i) => {
        const total = day.exercises.length
        const done = day.exercises.filter((e) => checked[e.id]).length
        const isActive = i === activeDay
        return (
          <button
            key={day.day}
            onClick={() => onSelect(i)}
            className={`flex shrink-0 items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-200 ${
              isActive
                ? 'bg-violet-500/15 text-violet-300 shadow-[inset_0_0_0_1px_rgba(168,85,247,0.25)]'
                : 'text-slate-500 hover:bg-slate-800/40 hover:text-slate-300'
            }`}
          >
            <span>{day.day}</span>
            {total > 0 && (
              <span
                className={`flex h-4 min-w-[16px] items-center justify-center rounded-full px-1 text-[10px] font-bold ${
                  done === total
                    ? 'bg-violet-500/20 text-violet-400'
                    : 'bg-slate-800 text-slate-600'
                }`}
              >
                {done}/{total}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
