import { Component, computed, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-newsletter',
  styleUrl: './newsletter.css',
  templateUrl: './newsletter.html',
})
export class Newsletter {
  protected readonly email = signal('');
  protected readonly trimis = signal(false);
  protected readonly valid = computed(() => /^\S+@\S+\.\S+$/.test(this.email()));

  actualizeaza(event: Event): void {
    this.email.set((event.target as HTMLInputElement).value);
  }

  trimite(event: Event): void {
    event.preventDefault();
    if (this.valid()) {
      this.trimis.set(true);
    }
  }
}
