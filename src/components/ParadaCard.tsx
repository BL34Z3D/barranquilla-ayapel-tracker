import { Parada } from "@/data/rutas";

interface ParadaCardProps {
  parada: Parada;
  porcentaje: string;
  onPorcentajeChange: (value: string) => void;
  isSelected: boolean;
  onToggle: () => void;
}

const formatCurrency = (value: number) =>
  "$" + value.toLocaleString("es-CO", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

const ParadaCard = ({ parada, porcentaje, onPorcentajeChange, isSelected, onToggle }: ParadaCardProps) => {
  const pct = parseFloat(porcentaje);
  const hasResult = isSelected && !isNaN(pct);
  const finalMin = hasResult ? parada.precioMin * (1 + pct / 100) : null;
  const finalMax = hasResult ? parada.precioMax * (1 + pct / 100) : null;

  return (
    <div
      className={`rounded-xl transition-all duration-150 bg-card ${
        isSelected ? "ring-2 ring-primary/30" : "opacity-70"
      }`}
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {/* Header row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-150 ${
              isSelected ? "bg-primary border-primary" : "border-muted-foreground/40"
            }`}
          >
            {isSelected && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6L5 8.5L9.5 3.5" stroke="hsl(var(--primary-foreground))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
          <div>
            <span className="text-sm font-semibold text-foreground">{parada.ciudad}</span>
            <span className="text-xs text-muted-foreground ml-2">· {parada.departamento}</span>
          </div>
        </div>
        <div className="flex gap-5 text-right">
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">Mín</span>
            <span className="text-sm font-mono font-semibold text-foreground">{formatCurrency(parada.precioMin)}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">Máx</span>
            <span className="text-sm font-mono font-semibold text-foreground">{formatCurrency(parada.precioMax)}</span>
          </div>
        </div>
      </button>

      {/* Expanded area */}
      {isSelected && (
        <div className="px-4 pb-4 pt-0">
          <div className="border-t border-dashed border-border pt-4">
            <div className="flex items-end gap-3">
              <div className="flex-1 max-w-[140px]">
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Ajuste (%)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={porcentaje}
                  onChange={(e) => onPorcentajeChange(e.target.value)}
                  placeholder="0"
                  className="w-full px-3 py-2 rounded-lg border border-border text-sm font-mono bg-secondary/50 text-foreground outline-none transition-all duration-150 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              {hasResult && (
                <div className="flex gap-5 pb-0.5 ml-auto">
                  <div className="text-right">
                    <span className="block text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">Final Mín</span>
                    <span className="text-lg font-bold text-primary font-mono">
                      {formatCurrency(finalMin!)}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">Final Máx</span>
                    <span className="text-lg font-bold text-primary font-mono">
                      {formatCurrency(finalMax!)}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParadaCard;
