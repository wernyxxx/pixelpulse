import { Component, computed, inject, signal } from '@angular/core';
import { StiriService } from '../../core/services/stiri-service';
import { StireCard } from '../../shared/components/stire-card/stire-card';

type Filtru = 'toate' | 'tech' | 'gaming';

@Component({
  imports: [StireCard],
  selector: 'app-stiri',
  styleUrl: './stiri.css',
  templateUrl: './stiri.html',
})
export class Stiri {
  protected readonly stiriService = inject(StiriService);
  protected readonly filtru = signal<Filtru>('toate');

  protected readonly filtrate = computed(() => {
    const f = this.filtru();
    const lista = this.stiriService.stiri();
    return f === 'toate' ? lista : lista.filter(s => s.categorie === f);
  });

  alege(f: Filtru): void {
    this.filtru.set(f);
  }
}
