import { useState } from 'react'

interface Section {
  title: string
  icon: JSX.Element
  content: JSX.Element
}

const sections: Section[] = [
  {
    title: 'Macros diarios',
    icon: (
      <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    content: (
      <div className="space-y-3">
        <div className="rounded-lg bg-slate-800/40 p-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-300">Proteína</span>
            <span className="text-sm font-bold text-emerald-400">1.6 - 2.2 g/kg</span>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Fundamental para síntesis muscular. Distribuye en 4-5 comidas de 30-40g.
          </p>
        </div>
        <div className="rounded-lg bg-slate-800/40 p-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-300">Carbohidratos</span>
            <span className="text-sm font-bold text-blue-400">4 - 6 g/kg</span>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Principal fuente de energía para entrenamientos intensos. Prioriza antes y después de entrenar.
          </p>
        </div>
        <div className="rounded-lg bg-slate-800/40 p-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-300">Grasas</span>
            <span className="text-sm font-bold text-amber-400">0.8 - 1.2 g/kg</span>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Esenciales para hormonas y salud general. Incluye grasas omega-3 y monoinsaturadas.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Plan de comidas',
    icon: (
      <svg className="h-4 w-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    content: (
      <div className="space-y-3">
        <div className="rounded-lg bg-slate-800/40 p-3">
          <h4 className="text-sm font-semibold text-slate-300">Pre-entrenamiento (2-3h antes)</h4>
          <p className="mt-1 text-xs text-slate-500">
            Carbohidratos de digestión media + proteína moderada. Ejemplo: arroz con pollo, avena con huevos, pasta magra.
          </p>
        </div>
        <div className="rounded-lg bg-slate-800/40 p-3">
          <h4 className="text-sm font-semibold text-slate-300">Post-entrenamiento (1-2h después)</h4>
          <p className="mt-1 text-xs text-slate-500">
            Proteína de rápida absorción + carbohidratos simples. Ejemplo: batido de proteína con plátano, pollo con arroz blanco.
          </p>
        </div>
        <div className="rounded-lg bg-slate-800/40 p-3">
          <h4 className="text-sm font-semibold text-slate-300">Distribución diaria</h4>
          <p className="mt-1 text-xs text-slate-500">
            4-5 comidas espaciadas cada 3-4 horas. Incluye verduras en cada comida para fibra y micronutrientes.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Suplementación',
    icon: (
      <svg className="h-4 w-4 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    content: (
      <div className="space-y-3">
        <div className="rounded-lg bg-slate-800/40 p-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-300">Creatina monohidrato</span>
            <span className="text-xs font-bold text-pink-400">3-5g / día</span>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Mejora fuerza y rendimiento en series cortas. Toma todos los días, sin necesidad de fase de carga.
          </p>
        </div>
        <div className="rounded-lg bg-slate-800/40 p-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-300">Proteína whey</span>
            <span className="text-xs font-bold text-pink-400">Según necesidad</span>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Útil si no cubres la proteína diaria con comida. 1-2 scoops al día según comidas.
          </p>
        </div>
        <div className="rounded-lg bg-slate-800/40 p-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-300">Vitamina D + Omega-3</span>
            <span className="text-xs font-bold text-pink-400">2000 UI + 2g / día</span>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Apoyo inmunológico y antiinflamatorio. Especialmente importante si entrenas en interior.
          </p>
        </div>
      </div>
    ),
  },
]

export default function NutritionAccordion() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<number | null>(null)

  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/50 backdrop-blur-sm transition-all duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-3 text-left text-sm font-semibold text-slate-300 transition-colors hover:text-white"
      >
        <span className="flex items-center gap-2">
          <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Nutrición
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
          <div className="border-t border-slate-800/60 px-5 py-4">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {sections.map((section, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSection(activeSection === i ? null : i)}
                  className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-200 ${
                    activeSection === i
                      ? 'bg-slate-700/60 text-white'
                      : 'bg-slate-800/40 text-slate-400 hover:bg-slate-800/60 hover:text-slate-300'
                  }`}
                >
                  {section.icon}
                  {section.title}
                </button>
              ))}
            </div>
            {activeSection !== null && (
              <div className="mt-3">
                {sections[activeSection].content}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
