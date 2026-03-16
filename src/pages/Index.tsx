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
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Ruta Operativa
          </h1>
          <p className="text-2xl font-bold text-foreground mt-1">
            Barranquilla → Ayapel
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            {paradasBarranquillaAyapel.length} paradas intermedias · Selecciona y ajusta individualmente
          </p>
        </header>

        {/* Global controls */}
        <div
          className="p-4 rounded-xl mb-6 flex flex-col sm:flex-row items-stretch sm:items-end gap-3 bg-card"
          style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05)" }}
        >
          <button
            onClick={selectAll}
            className="text-xs font-semibold text-primary hover:underline shrink-0 self-start sm:self-center"
          >
            {selected.size === paradasBarranquillaAyapel.length ? "Deseleccionar todas" : "Seleccionar todas"}
          </button>
          <div className="flex-1 flex items-end gap-2">
            <div className="flex-1">
              <label className="block text-xs font-medium text-muted-foreground mb-1">
                % Global para seleccionadas
              </label>
              <input
                type="number"
                step="0.01"
                value={globalPct}
                onChange={(e) => setGlobalPct(e.target.value)}
                placeholder="Ej: 10"
                className="w-full px-3 py-2 rounded-lg border-0 text-sm font-mono bg-card text-foreground outline-none transition-all duration-150 focus:ring-2 focus:ring-primary/20"
                style={{ boxShadow: "var(--shadow-input)" }}
              />
            </div>
            <button
              onClick={applyGlobal}
              className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:brightness-110 transition-all duration-150 shrink-0"
            >
              Aplicar
            </button>
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
