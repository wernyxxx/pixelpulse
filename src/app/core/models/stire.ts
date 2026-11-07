export interface Stire {
  id: number;
  titlu: string;
  rezumat: string;
  categorie: 'tech' | 'gaming';
  autor: string;
  data: string; // format ISO: 2026-11-07
  minuteCitire: number;
  vizualizari: number;
}
