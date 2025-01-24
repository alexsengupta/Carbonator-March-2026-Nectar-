import { Component } from '@angular/core';
import { AppConfigService } from './shared/services/app-config.service';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {ScenariosMenuComponent} from './scenarios/scenarios-menu/scenarios-menu.component';
import {RouterOutlet} from '@angular/router';
import {MandatoriesComponent} from './core/mandatories/mandatories.component';
import {MastheadComponent} from './core/masthead/masthead.component';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    MatSidenav,
    ScenariosMenuComponent,
    MatSidenavContent,
    RouterOutlet,
    MandatoriesComponent,
    MatSidenavContainer,
    MastheadComponent,
    FlexLayoutModule
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config: AppConfigService;

  constructor(private appConfig: AppConfigService) {}

  ngOnInit() {
    this.config = this.appConfig;
  }
}
