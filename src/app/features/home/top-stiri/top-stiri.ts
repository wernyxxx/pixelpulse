import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StiriService } from '../../../core/services/stiri-service';

@Component({
  imports: [RouterLink],
  selector: 'app-top-stiri',
  styleUrl: './top-stiri.css',
  templateUrl: './top-stiri.html',
})
export class TopStiri {
  protected readonly stiriService = inject(StiriService);
}
