import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent, HomeComponent, AboutComponent, ProjectsComponent, ContactComponent],
  template: `
    <app-navbar></app-navbar>
    <app-home></app-home>
    <app-about></app-about>
    <app-projects></app-projects>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `,
})
export class AppComponent {}
