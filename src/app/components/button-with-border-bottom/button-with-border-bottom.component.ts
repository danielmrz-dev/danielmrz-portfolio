import { Component, input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-button-with-border-bottom',
  imports: [],
  templateUrl: './button-with-border-bottom.component.html',
  styleUrl: './button-with-border-bottom.component.scss',
})
export class ButtonWithBorderBottomComponent {
  buttonText = input.required<string | SafeHtml>();
  targetComponent = input('');
  link = input<string | null>(null);

  scrollToTarget(evento: Event) {
    if (!this.link()) {
      evento.preventDefault();
      const targetElement = document.querySelector(`#${this.targetComponent()}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}
