import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ORIGEN, Ruta } from "@/data/rutas";
import ParadaCard from "./ParadaCard";

interface RutaAccordionProps {
  ruta: Ruta;
  isOpen: boolean;
  onToggle: () => void;
}

const RutaAccordion = ({ ruta, isOpen, onToggle }: RutaAccordionProps) => {
  const [porcentajes, setPorcentajes] = useState<Record<number, string>>({});
  const [globalPct, setGlobalPct] = useState("");
  const [selectedAll, setSelectedAll] = useState(false);
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const toggleParada = (idx: number) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const toggleAll = () => {
    if (selectedAll) {
      setSelected(new Set());
    } else {
      setSelected(new Set(ruta.paradas.map((_, i) => i)));
    }
    setSelectedAll(!selectedAll);
  };

  const applyGlobal = () => {
    if (!globalPct) return;
    const updated: Record<number, string> = { ...porcentajes };
    selected.forEach((idx) => {
      updated[idx] = globalPct;
    });
    setPorcentajes(updated);
  };

  const lastParada = ruta.paradas[ruta.paradas.length - 1];

  return (
    <div
      className="rounded-xl bg-card overflow-hidden transition-all duration-200"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {/* Route header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-accent/30 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full transition-colors ${isOpen ? "bg-primary" : "bg-muted-foreground/30"}`} />
          <div>
            <span className="text-base font-bold text-foreground">
              {ORIGEN} → {ruta.destino}
            </span>
            <span className="block text-xs text-muted-foreground mt-0.5">
              {ruta.paradas.length} paradas · ${lastParada.precioMin.toLocaleString("es-CO")} – ${lastParada.precioMax.toLocaleString("es-CO")}
            </span>
          </div>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Expanded content */}
      {isOpen && (
        <div className="border-t border-border">
          {/* Global controls */}
          <div className="p-4 bg-muted/30 border-b border-border">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-3">
              <button
                onClick={toggleAll}
                className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors shrink-0 self-start sm:self-center underline underline-offset-2"
              >
                {selectedAll ? "Deseleccionar todas" : "Seleccionar todas"}
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
                    className="w-full px-3 py-2 rounded-lg border border-border text-sm font-mono bg-secondary/50 text-foreground outline-none transition-all duration-150 focus:ring-2 focus:ring-primary/20 focus:border-primary"
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
          </div>

          {/* Stops list */}
          <div className="p-4 space-y-2">
            {ruta.paradas.map((parada, idx) => (
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
      )}
    </div>
  );
};

export default RutaAccordion;
