import { useState } from 'react'

export default function InfoPanel() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mb-5 overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/50 backdrop-blur-sm transition-all duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-3 text-left text-sm font-semibold text-slate-300 transition-colors hover:text-white"
      >
        <span className="flex items-center gap-2">
          <svg className="h-4 w-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Cómo usar esta rutina
        </span>
        <svg
          className={`h-4 w-4 text-slate-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-800/60 px-5 py-4 text-xs leading-relaxed text-slate-400">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <h4 className="mb-1.5 font-semibold text-slate-300">Sobrecarga progresiva</h4>
                <p>
                  En los días principales (lunes-miércoles) la carga aumenta semana a semana
                  usando porcentajes orientativos. Si no conoces tu 1RM, usa un peso que te
                  permita completar todas las series con buena técnica pero que sea exigente
                  (RPE 7-8 en volumen, RPE 9 en intensidad).
                </p>
              </div>
              <div>
                <h4 className="mb-1.5 font-semibold text-slate-300">Calentamiento</h4>
                <p>
                  5-10 min de movilidad general + series de aproximación del ejercicio principal
                  (barra vacía, 50%, 70%, luego series de trabajo).
                </p>
              </div>
              <div>
                <h4 className="mb-1.5 font-semibold text-slate-300">Agarre y antebrazos</h4>
                <p>
                  Muchos ejercicios de tracción y cargas ya trabajan el agarre; los jueves/viernes
                  añadimos estímulos específicos.
                </p>
              </div>
              <div className="sm:col-span-2 lg:col-span-3">
                <h4 className="mb-1.5 font-semibold text-slate-300">Descarga activa (Semana 4)</h4>
                <p>
                  Es semana de testeo y descarga. No falles los levantamientos, llega a un single
                  pesado pero sin fallo muscular. La siguiente semana reinicia el ciclo con un
                  2.5-5 kg más en tus máximos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
