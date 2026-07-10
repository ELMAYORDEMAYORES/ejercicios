import { useState } from 'react'

interface Props {
  onReset: () => void
}

export default function Footer({ onReset }: Props) {
  const [confirming, setConfirming] = useState(false)

  const handleReset = () => {
    if (!confirming) {
      setConfirming(true)
      return
    }
    onReset()
    setConfirming(false)
  }

  return (
    <footer className="mt-6 space-y-4">
      <div className="rounded-xl border border-slate-800/60 bg-slate-900/30 px-5 py-4 text-xs text-slate-500 backdrop-blur-sm">
        <h3 className="mb-2 text-sm font-semibold text-slate-400">Próximo mes</h3>
        <p className="leading-relaxed">
          Ajusta tus máximos teóricos sumando{' '}
          <strong className="text-slate-300">2.5-5 kg</strong> en press banca/remo
          y <strong className="text-slate-300">5-10 kg</strong> en sentadilla/peso
          muerto, y repite el ciclo. Anota todos los pesos, repeticiones y
          sensaciones. El orden lunes-miércoles no varía, pero puedes cambiar las
          variantes de sentadilla, press banca y peso muerto/remo cada mes para
          evitar estancamientos.
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleReset}
          onMouseLeave={() => setConfirming(false)}
          className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-xs font-semibold transition-all duration-200 ${
            confirming
              ? 'border-red-500/40 bg-red-500/15 text-red-400'
              : 'border-slate-700/60 bg-slate-800/40 text-slate-500 hover:border-slate-600 hover:text-slate-400'
          }`}
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          {confirming ? '¿Seguro? Reiniciar todo' : 'Reiniciar mes'}
        </button>
      </div>
    </footer>
  )
}
