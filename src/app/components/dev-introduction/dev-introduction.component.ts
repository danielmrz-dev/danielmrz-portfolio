import { Component } from '@angular/core';
import { ButtonWithBorderBottomComponent } from "../button-with-border-bottom/button-with-border-bottom.component";

@Component({
  selector: 'app-dev-introduction',
  standalone: true,
  imports: [ButtonWithBorderBottomComponent],
  templateUrl: './dev-introduction.component.html',
  styleUrl: './dev-introduction.component.scss'
})
export class DevIntroductionComponent {

}
