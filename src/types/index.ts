export interface Exercise {
  id: string
  name: string
  sets: string
  reps: string
  weight: string
  notes: string
}

export interface DayWorkout {
  day: string
  fullDay: string
  focus: string
  exercises: Exercise[]
}

export interface Week {
  week: number
  title: string
  description: string
  days: DayWorkout[]
}

export interface ExerciseData {
  [key: string]: boolean
}

export interface WeightData {
  [key: string]: string
}
