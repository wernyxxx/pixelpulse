import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-categorii',
  styleUrl: './categorii.css',
  templateUrl: './categorii.html',
})
export class Categorii {
  protected readonly categorii = [
    {
      slug: 'tech',
      titlu: 'Tech',
      text: 'Gadgeturi, inteligență artificială, software și hardware, explicate fără jargon.',
      link: 'Vezi știrile Tech',
    },
    {
      slug: 'gaming',
      titlu: 'Gaming',
      text: 'Lansări, recenzii, eSports și tot ce se întâmplă în industria jocurilor video.',
      link: 'Vezi știrile Gaming',
    },
  ];
}
