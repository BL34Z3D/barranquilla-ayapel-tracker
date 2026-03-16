import { useState } from "react";
import { paradasBarranquillaAyapel } from "@/data/rutas";
import ParadaCard from "@/components/ParadaCard";

const Index = () => {
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [porcentajes, setPorcentajes] = useState<Record<number, string>>({});
  const [globalPct, setGlobalPct] = useState("");

  const toggleParada = (idx: number) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const selectAll = () => {
    if (selected.size === paradasBarranquillaAyapel.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(paradasBarranquillaAyapel.map((_, i) => i)));
    }
  };

  const applyGlobal = () => {
    if (!globalPct) return;
    const updated: Record<number, string> = { ...porcentajes };
    selected.forEach((idx) => {
      updated[idx] = globalPct;
    });
    setPorcentajes(updated);
  };

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-3">
            Ruta Operativa
          </div>
          <h1 className="text-3xl font-bold text-foreground">
            Barranquilla → Ayapel
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            {paradasBarranquillaAyapel.length} paradas · Selecciona y ajusta el porcentaje de cada una
          </p>
        </header>

        {/* Global controls */}
        <div
          className="p-5 rounded-xl mb-6 bg-card"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-3">
            <button
              onClick={selectAll}
              className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors shrink-0 self-start sm:self-center underline underline-offset-2"
            >
              {selected.size === paradasBarranquillaAyapel.length ? "Deseleccionar todas" : "Seleccionar todas"}
            </button>
            <div className="flex-1 flex items-end gap-2">
              <div className="flex-1">
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                  % Global para seleccionadas
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={globalPct}
                  onChange={(e) => setGlobalPct(e.target.value)}
                  placeholder="Ej: 10"
                  className="w-full px-3 py-2.5 rounded-lg border border-border text-sm font-mono bg-secondary/50 text-foreground outline-none transition-all duration-150 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              <button
                onClick={applyGlobal}
                className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:brightness-110 transition-all duration-150 shrink-0"
              >
                Aplicar
              </button>
            </div>
          </div>
        </div>

        {/* Paradas list */}
        <div className="space-y-3">
          {paradasBarranquillaAyapel.map((parada, idx) => (
            <ParadaCard
              key={idx}
              parada={parada}
              porcentaje={porcentajes[idx] || ""}
              onPorcentajeChange={(val) =>
                setPorcentajes((prev) => ({ ...prev, [idx]: val }))
              }
              isSelected={selected.has(idx)}
              onToggle={() => toggleParada(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
