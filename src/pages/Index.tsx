import { useState } from "react";

const PRECIO_MIN = 90000;
const PRECIO_MAX = 120000;

const formatCurrency = (value: number) =>
  "$" + value.toLocaleString("es-CO", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const Index = () => {
  const [porcentaje, setPorcentaje] = useState<string>("");
  const [resultado, setResultado] = useState<{ min: number; max: number } | null>(null);

  const calcular = () => {
    const pct = parseFloat(porcentaje);
    if (isNaN(pct)) return;
    setResultado({
      min: PRECIO_MIN * (1 + pct / 100),
      max: PRECIO_MAX * (1 + pct / 100),
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") calcular();
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <main
        className="w-full max-w-md p-8 bg-card rounded-xl"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <header className="mb-8">
          <h1 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Ruta Operativa
          </h1>
          <p className="text-xl font-bold text-foreground mt-1">
            Barranquilla → Ayapel
          </p>
        </header>

        {/* Base Values */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-lg" style={{ backgroundColor: "hsl(var(--surface))" }}>
            <span className="block text-xs text-muted-foreground mb-1">Mínimo Base</span>
            <span className="text-lg font-mono font-medium text-foreground">
              {formatCurrency(PRECIO_MIN)}
            </span>
          </div>
          <div className="p-4 rounded-lg" style={{ backgroundColor: "hsl(var(--surface))" }}>
            <span className="block text-xs text-muted-foreground mb-1">Máximo Base</span>
            <span className="text-lg font-mono font-medium text-foreground">
              {formatCurrency(PRECIO_MAX)}
            </span>
          </div>
        </div>

        {/* Input */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Porcentaje de Ajuste (%)
            </label>
            <input
              type="number"
              step="0.01"
              value={porcentaje}
              onChange={(e) => setPorcentaje(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ej: 15"
              className="w-full px-4 py-3 rounded-lg border-0 text-lg font-mono bg-card text-foreground outline-none transition-all duration-150 focus:ring-2 focus:ring-primary/20"
              style={{ boxShadow: "var(--shadow-input)" }}
            />
          </div>
          <button
            onClick={calcular}
            className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:brightness-110 transition-all duration-150 shadow-sm"
          >
            Calcular Tarifas Finales
          </button>
        </div>

        {/* Results */}
        {resultado && (
          <div className="mt-8 pt-8 border-t border-dashed border-border">
            <h2 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
              Precios Finales (+{porcentaje}%)
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-sm text-foreground">Venta Mínima</span>
                <span className="text-2xl font-bold text-primary font-mono">
                  {formatCurrency(resultado.min)}
                </span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-sm text-foreground">Venta Máxima</span>
                <span className="text-2xl font-bold text-primary font-mono">
                  {formatCurrency(resultado.max)}
                </span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
