import { Component, inject } from '@angular/core';
import { StiriService } from '../../../core/services/stiri-service';
import { StireCard } from '../../../shared/components/stire-card/stire-card';

@Component({
  imports: [StireCard],
  selector: 'app-stiri-recente',
  styleUrl: './stiri-recente.css',
  templateUrl: './stiri-recente.html',
})
export class StiriRecente {
  protected readonly stiriService = inject(StiriService);
}
