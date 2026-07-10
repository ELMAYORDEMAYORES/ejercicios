export default function Footer() {
  return (
    <footer className="mt-6 rounded-xl border border-slate-800/60 bg-slate-900/30 px-5 py-4 text-xs text-slate-500 backdrop-blur-sm">
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
    </footer>
  )
}
