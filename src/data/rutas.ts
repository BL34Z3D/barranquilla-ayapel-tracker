export interface Parada {
  ciudad: string;
  departamento: string;
  precioMin: number;
  precioMax: number;
}

export interface Ruta {
  destino: string;
  paradas: Parada[];
}

// Paradas compartidas desde Barranquilla
const calamar: Parada = { ciudad: "Calamar", departamento: "Bolívar", precioMin: 12000, precioMax: 25000 };
const carreto: Parada = { ciudad: "Carreto", departamento: "Bolívar", precioMin: 15000, precioMax: 30000 };
const sanJuan: Parada = { ciudad: "San Juan Nepomuceno", departamento: "Bolívar", precioMin: 20000, precioMax: 35000 };
const sanJacinto: Parada = { ciudad: "San Jacinto", departamento: "Bolívar", precioMin: 25000, precioMax: 40000 };
const elCarmen: Parada = { ciudad: "El Carmen de Bolívar", departamento: "Bolívar", precioMin: 28000, precioMax: 45000 };
const ovejas: Parada = { ciudad: "Ovejas", departamento: "Sucre", precioMin: 30000, precioMax: 50000 };
const elPinal: Parada = { ciudad: "El Piñal", departamento: "Sucre", precioMin: 35000, precioMax: 50000 };
const elBongo: Parada = { ciudad: "El Bongo", departamento: "Sucre", precioMin: 35000, precioMax: 50000 };
const losPalmitos: Parada = { ciudad: "Los Palmitos", departamento: "Sucre", precioMin: 40000, precioMax: 50000 };
const corozal: Parada = { ciudad: "Corozal", departamento: "Sucre", precioMin: 40000, precioMax: 60000 };
const sincelejo: Parada = { ciudad: "Sincelejo", departamento: "Sucre", precioMin: 40000, precioMax: 60000 };
const sampues: Parada = { ciudad: "Sampués", departamento: "Sucre", precioMin: 50000, precioMax: 70000 };
const chinu: Parada = { ciudad: "Chinú", departamento: "Córdoba", precioMin: 50000, precioMax: 70000 };
const sahagun: Parada = { ciudad: "Sahagún", departamento: "Córdoba", precioMin: 60000, precioMax: 80000 };
const laYe: Parada = { ciudad: "La Ye", departamento: "Córdoba", precioMin: 60000, precioMax: 80000 };
const elViajano: Parada = { ciudad: "El Viajano", departamento: "Córdoba", precioMin: 65000, precioMax: 85000 };
const puebloNuevo: Parada = { ciudad: "Pueblo Nuevo", departamento: "Córdoba", precioMin: 70000, precioMax: 90000 };
const planetaRica: Parada = { ciudad: "Planeta Rica", departamento: "Córdoba", precioMin: 70000, precioMax: 100000 };
const buenavista: Parada = { ciudad: "Buenavista", departamento: "Córdoba", precioMin: 75000, precioMax: 110000 };
const laApartada: Parada = { ciudad: "La Apartada", departamento: "Córdoba", precioMin: 80000, precioMax: 120000 };
const ayapel: Parada = { ciudad: "Ayapel", departamento: "Córdoba", precioMin: 90000, precioMax: 120000 };
const monteria: Parada = { ciudad: "Montería", departamento: "Córdoba", precioMin: 75000, precioMax: 100000 };
const cerete: Parada = { ciudad: "Cereté", departamento: "Córdoba", precioMin: 70000, precioMax: 95000 };
const lorica: Parada = { ciudad: "Lorica", departamento: "Córdoba", precioMin: 65000, precioMax: 90000 };
const caucasia: Parada = { ciudad: "Caucasia", departamento: "Antioquia", precioMin: 95000, precioMax: 130000 };

export const ORIGEN = "Barranquilla";

export const rutasDesdeBarranquilla: Ruta[] = [
  {
    destino: "Ayapel",
    paradas: [calamar, carreto, sanJuan, sanJacinto, elCarmen, ovejas, elPinal, elBongo, losPalmitos, corozal, sincelejo, sampues, chinu, sahagun, laYe, elViajano, puebloNuevo, planetaRica, buenavista, laApartada, ayapel],
  },
  {
    destino: "Sincelejo",
    paradas: [calamar, carreto, sanJuan, sanJacinto, elCarmen, ovejas, elPinal, elBongo, losPalmitos, corozal, sincelejo],
  },
  {
    destino: "Montería",
    paradas: [calamar, carreto, sanJuan, sanJacinto, elCarmen, ovejas, elPinal, elBongo, losPalmitos, corozal, sincelejo, sampues, chinu, sahagun, cerete, monteria],
  },
  {
    destino: "Planeta Rica",
    paradas: [calamar, carreto, sanJuan, sanJacinto, elCarmen, ovejas, elPinal, elBongo, losPalmitos, corozal, sincelejo, sampues, chinu, sahagun, laYe, elViajano, puebloNuevo, planetaRica],
  },
  {
    destino: "Caucasia",
    paradas: [calamar, carreto, sanJuan, sanJacinto, elCarmen, ovejas, elPinal, elBongo, losPalmitos, corozal, sincelejo, sampues, chinu, sahagun, laYe, elViajano, puebloNuevo, planetaRica, buenavista, laApartada, caucasia],
  },
  {
    destino: "Lorica",
    paradas: [calamar, carreto, sanJuan, sanJacinto, elCarmen, ovejas, elPinal, elBongo, losPalmitos, corozal, sincelejo, sampues, lorica],
  },
];
