import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Categorii } from './categorii/categorii';
import { StiriRecente } from './stiri-recente/stiri-recente';
import { TopStiri } from './top-stiri/top-stiri';
import { Newsletter } from './newsletter/newsletter';

@Component({
  imports: [Hero, Categorii, StiriRecente, TopStiri, Newsletter],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
