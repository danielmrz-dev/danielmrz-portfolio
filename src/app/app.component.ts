import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderFooterComponent } from "./components/header-footer/header-footer.component";
import { DevIntroductionComponent } from "./components/dev-introduction/dev-introduction.component";
import { TechnologiesListComponent } from "./components/technologies-list/technologies-list.component";
import { ProjectsListComponent } from "./components/projects-list/projects-list.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderFooterComponent, DevIntroductionComponent, TechnologiesListComponent, ProjectsListComponent, ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
