import { parseCSV } from './csvParser';

export interface Tramite {
  id: string;
  nombre: string;
  descripcion: string;
  institucion: string;
  categoria: string;
  modalidad: string;
  nivel_digital: string;
  costo: number;
  tiempo_estimado: string;
  ubicacion: string;
  requisitos: string[];
  pasos: string[];
  url_oficial: string;
  para_emprendedores: boolean;
  vistas: number;
  tags: string[];
}

export const fetchTramites = async (): Promise<Tramite[]> => {
  try {
    const data = await parseCSV(resolveTramitesCsvPath());
    return data.map((item: any) => ({
      ...item,
      costo: parseFloat(item.costo) || 0,
      vistas: parseInt(item.vistas) || 0,
      para_emprendedores: item.para_emprendedores === 'true' || item.para_emprendedores === true,
      requisitos: normalizeListField(item.requisitos),
      pasos: normalizeListField(item.pasos),
      tags: normalizeListField(item.tags)
    }));
  } catch (error) {
    console.error('Error fetching tramites:', error);
    return [];
  }
};

function resolveTramitesCsvPath(): string {
  const baseUrl = import.meta.env.BASE_URL || '/';

  return `${baseUrl.replace(/\/?$/, '/')}data/tramites.csv`;
}

function normalizeListField(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map(String).map(item => item.trim()).filter(Boolean);
  }

  if (typeof value === 'string') {
    return value.split('|').map(item => item.trim()).filter(Boolean);
  }

  if (value == null) {
    return [];
  }

  return [String(value).trim()].filter(Boolean);
}

export const fetchTramiteById = async (id: string): Promise<Tramite | null> => {
  const tramites = await fetchTramites();
  return tramites.find(t => t.id === id) || null;
};
