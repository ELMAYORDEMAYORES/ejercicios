import { useState, useCallback } from 'react'
import { workoutData } from './data/workoutData'
import { useLocalStorage } from './hooks/useLocalStorage'
import type { ExerciseData, WeightData } from './types'
import Header from './components/Header'
import InfoPanel from './components/InfoPanel'
import SummaryTable from './components/SummaryTable'
import WeekAccordion from './components/WeekAccordion'
import DayTabs from './components/DayTabs'
import ExerciseTable from './components/ExerciseTable'
import Footer from './components/Footer'

function App() {
  const [checked, setChecked] = useLocalStorage<ExerciseData>('ejercicios-checked', {})
  const [weights, setWeights] = useLocalStorage<WeightData>('ejercicios-weights', {})

  const [activeDays, setActiveDays] = useState<Record<number, number>>(
    Object.fromEntries(workoutData.map((_, i) => [i, 0])),
  )

  const handleToggle = useCallback(
    (id: string) => {
      setChecked((prev) => ({ ...prev, [id]: !prev[id] }))
    },
    [setChecked],
  )

  const handleWeightChange = useCallback(
    (id: string, value: string) => {
      setWeights((prev) => ({ ...prev, [id]: value }))
    },
    [setWeights],
  )

  return (
    <div className="mx-auto min-h-screen max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
      <Header checked={checked} weights={weights} />

      <InfoPanel />

      <SummaryTable />

      <div className="space-y-3">
        {workoutData.map((week, wi) => {
          const weekExercises = week.days.flatMap((d) => d.exercises)
          const weekDone = weekExercises.filter((e) => checked[e.id]).length
          const pct = weekExercises.length > 0
            ? Math.round((weekDone / weekExercises.length) * 100)
            : 0

          return (
            <WeekAccordion
              key={wi}
              week={week.week}
              title={week.title}
              description={week.description}
              defaultOpen={wi === 0}
              summary={
                <span className="hidden text-xs font-semibold text-slate-600 sm:block">
                  {weekDone}/{weekExercises.length}
                  <span className="ml-1 text-violet-500">({pct}%)</span>
                </span>
              }
            >
              <DayTabs
                days={week.days}
                activeDay={activeDays[wi]}
                onSelect={(di) =>
                  setActiveDays((prev) => ({ ...prev, [wi]: di }))
                }
                checked={checked}
              />
              <div className="mt-3">
                <ExerciseTable
                  day={week.days[activeDays[wi]]}
                  checked={checked}
                  weights={weights}
                  onToggle={handleToggle}
                  onWeightChange={handleWeightChange}
                />
              </div>
            </WeekAccordion>
          )
        })}
      </div>

      <Footer onReset={() => { setChecked({}); setWeights({}) }} />
    </div>
  )
}

export default App
