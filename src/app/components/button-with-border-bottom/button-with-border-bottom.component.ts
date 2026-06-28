import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-button-with-border-bottom',
  imports: [],
  templateUrl: './button-with-border-bottom.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './button-with-border-bottom.component.scss',
})
export class ButtonWithBorderBottomComponent {
  @Input({ required: true }) buttonText: string | SafeHtml = '';
  @Input() targetComponent = '';
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
