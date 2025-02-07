import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-with-border-bottom',
  standalone: true,
  imports: [],
  templateUrl: './button-with-border-bottom.component.html',
  styleUrl: './button-with-border-bottom.component.scss'
})
export class ButtonWithBorderBottomComponent {
  @Input({ required: true }) buttonText: string = '';
  @Input() targetComponent: string = '';
  @Input() link: string | null = null;

  scrollToTarget(evento: Event) {
    if (!this.link) {
      evento.preventDefault();
      const targetElement = document.querySelector(`#${this.targetComponent}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}
