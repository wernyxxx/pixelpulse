import { Service, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stire } from '../models/stire';

@Service()
export class StiriService {
  private readonly http = inject(HttpClient);
  private readonly url = '/data/stiri.json';

  readonly stiri = signal<Stire[]>([]);
  readonly seIncarca = signal(true);
  readonly eroare = signal<string | null>(null);

  // primele 6 știri — pentru pagina de start
  readonly recente = computed(() => this.stiri().slice(0, 6));

  // cele mai citite 5 știri — pentru secțiunea „Top”
  readonly top = computed(() =>
    [...this.stiri()].sort((a, b) => b.vizualizari - a.vizualizari).slice(0, 5),
  );

  constructor() {
    this.incarca();
  }

  private incarca(): void {
    this.http.get<Stire[]>(this.url).subscribe({
      next: lista => {
        this.stiri.set(lista);
        this.seIncarca.set(false);
      },
      error: () => {
        this.eroare.set('Nu am putut încărca știrile.');
        this.seIncarca.set(false);
      },
    });
  }
}
