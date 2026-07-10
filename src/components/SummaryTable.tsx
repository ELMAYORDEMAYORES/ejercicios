import { workoutData } from '../data/workoutData'

const dayLabels = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']

const summary: Record<string, string[]> = {
  Lunes: [
    'Sentadilla trasera – Volumen',
    'Sentadilla trasera – Intensidad',
    'Sentadilla frontal – Vol. denso',
    'Test sentadilla + descarga',
  ],
  Martes: [
    'Press banca – Volumen',
    'Press banca – Intensidad',
    'Press banca pausa – Volumen',
    'Test press banca + descarga',
  ],
  Miércoles: [
    'Peso muerto conv. – Volumen',
    'Remo + Rumano pesado',
    'Peso muerto sumo – Intensidad',
    'Test peso muerto + descarga',
  ],
  Jueves: [
    'Explosivo + Agarre',
    'Suitcase DL + Agarre',
    'Peso corporal avz. + Agarre',
    'Explosivo + Agarre',
  ],
  Viernes: [
    'Fondos/dominadas + Farmer',
    'Explosivo + Andar carga',
    'Suitcase DL pesado + Overhead',
    'Peso corporal + Farmer largo',
  ],
}

export default function SummaryTable() {
  const weeks = workoutData.map((w) => `Sem ${w.week}`)

  return (
    <div className="mb-5 overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/50 backdrop-blur-sm">
      <div className="border-b border-slate-800/60 px-5 py-3">
        <h2 className="text-sm font-bold text-white">Resumen del mes</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-800/60">
              <th className="sticky left-0 z-10 bg-slate-900/50 px-4 py-2.5 font-semibold text-slate-500 backdrop-blur-sm">
                Día
              </th>
              {weeks.map((w, i) => (
                <th
                  key={w}
                  className="px-4 py-2.5 text-center font-semibold text-violet-400"
                >
                  {w}
                  <div className="text-[10px] font-normal text-slate-600">
                    {workoutData[i].title}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dayLabels.map((day) => (
              <tr key={day} className="border-b border-slate-800/40 last:border-0">
                <td className="sticky left-0 z-10 bg-slate-900/50 px-4 py-2.5 font-medium text-slate-300 backdrop-blur-sm">
                  {day}
                </td>
                {summary[day].map((cell, i) => {
                  const isHighlight = i === 0 || i === 1
                  return (
                    <td
                      key={`${day}-${i}`}
                      className={`px-4 py-2.5 text-center leading-relaxed ${
                        isHighlight ? 'text-slate-300' : 'text-slate-500'
                      }`}
                    >
                      <span
                        className={`inline-block rounded-md px-2 py-1 ${
                          isHighlight
                            ? 'bg-violet-500/10 text-violet-300'
                            : 'bg-slate-800/40'
                        }`}
                      >
                        {cell}
                      </span>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
