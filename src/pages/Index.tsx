import { useState } from "react";
import { ORIGEN, rutasDesdeBarranquilla } from "@/data/rutas";
import RutaAccordion from "@/components/RutaAccordion";

const Index = () => {
  const [openRuta, setOpenRuta] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-10 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8">
          <div className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-3">
            Sistema de Tarifas
          </div>
          <h1 className="text-3xl font-bold text-foreground">
            Rutas desde {ORIGEN}
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            {rutasDesdeBarranquilla.length} rutas disponibles · Selecciona una para ver sus paradas
          </p>
        </header>

        <div className="space-y-3">
          {rutasDesdeBarranquilla.map((ruta, idx) => (
            <RutaAccordion
              key={idx}
              ruta={ruta}
              isOpen={openRuta === idx}
              onToggle={() => setOpenRuta(openRuta === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
