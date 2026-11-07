import { Component, input } from '@angular/core';
import { Stire } from '../../../core/models/stire';
import { CitirePipe } from '../../pipes/citire-pipe';

@Component({
  imports: [CitirePipe],
  selector: 'app-stire-card',
  styleUrl: './stire-card.css',
  templateUrl: './stire-card.html',
})
export class StireCard {
  readonly stire = input.required<Stire>();
}
