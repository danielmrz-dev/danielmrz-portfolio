import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DevIntroductionComponent } from './components/dev-introduction/dev-introduction.component';
import { HeaderFooterComponent } from './components/header-footer/header-footer.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { TechnologiesListComponent } from './components/technologies-list/technologies-list.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderFooterComponent,
    DevIntroductionComponent,
    TechnologiesListComponent,
    ProjectsListComponent,
    ContactFormComponent,
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './app.component.scss',
})
export class AppComponent {}
