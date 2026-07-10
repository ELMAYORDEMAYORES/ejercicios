import { useState, type ReactNode } from 'react'

interface Props {
  week: number
  title: string
  description: string
  defaultOpen?: boolean
  children: ReactNode
  summary?: ReactNode
}

export default function WeekAccordion({ week, title, description, defaultOpen = false, children, summary }: Props) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm transition-all duration-300">
      <button
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between px-5 py-4 text-left transition-colors duration-200 hover:bg-slate-800/20 ${
          open ? 'border-b border-slate-800/60' : ''
        }`}
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-all duration-300 ${
              open
                ? 'bg-violet-500/20 text-violet-400 shadow-[0_0_12px_rgba(168,85,247,0.2)]'
                : 'bg-slate-800 text-slate-500'
            }`}
          >
            {week}
          </span>
          <div>
            <h3 className="text-sm font-bold text-white">{title}</h3>
            <p className="mt-0.5 text-xs text-slate-500">{description}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {summary}
          <svg
            className={`h-4 w-4 shrink-0 text-slate-600 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 py-4 sm:px-5">{children}</div>
        </div>
      </div>
    </div>
  )
}
