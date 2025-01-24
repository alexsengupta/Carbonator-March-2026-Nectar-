import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';

import {AppMaterialModule} from './app-material.module';
import {LayoutModule} from '@angular/cdk/layout';

// Import Angular Material modules individually
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './core/home/home.component';
import {ExplainedComponent} from './pages/explained/explained.component';
import {FaqsComponent} from './pages/faqs/faqs.component';
import {TeamComponent} from './pages/team/team.component';
import {MastheadComponent} from './core/masthead/masthead.component';
import {MandatoriesComponent} from './core/mandatories/mandatories.component';
import {ShareDialogComponent} from './pages/share-dialog/share-dialog.component';
import {TutorialDialogComponent} from './pages/tutorial-dialog/tutorial-dialog.component';
import {AdvancedDialogComponent} from './pages/advanced-dialog/advanced-dialog.component';
import {ScenariosMenuComponent} from './scenarios/scenarios-menu/scenarios-menu.component';
import {ScenariosListComponent} from './scenarios/scenarios-list/scenarios-list.component';
import {ScenarioPreviewDialogComponent} from './scenarios/scenario-preview-dialog/scenario-preview-dialog.component';
import {SimulationComponent} from './simulation/simulation.component';
import {InternalVariabilityForcingComponent} from './inputs/internal-variability-forcing/internal-variability-forcing.component';
import {ModelParamsComponent} from './inputs/model-params/model-params.component';
import {HighchartsChartComponent} from './highcharts-chart/highcharts-chart.component';
import {ForcingComponent} from './inputs/forcing.component';
import {ModelParamsDialogComponent} from './inputs/model-params-dialog/model-params-dialog.component';
import {ModelParamsEditorDialogComponent} from './inputs/model-params-editor-dialog/model-params-editor-dialog.component';
import {RunSimulationDialogComponent} from './simulation/run-simulation-dialog/run-simulation-dialog.component';
import {ForcingOutputComponent} from './outputs/forcing-output/forcing-output.component';
import {ModelParamsOutputComponent} from './outputs/model-params-output/model-params-output.component';
import {OutputComponent} from './outputs/output/output.component';
import {
    InternalVariabilityForcingOutputComponent
} from './outputs/internal-variability-forcing-output/internal-variability-forcing-output.component';
import {TSIForcingComponent} from './inputs/tsi-forcing/tsi-forcing.component';
import {VolcanicsForcingComponent} from './inputs/volcanics-forcing/volcanics-forcing.component';
import {SchoolsComponent} from './pages/schools/schools.component';
import {TutorialComponent} from './pages/tutorial/tutorial.component';
import {ScenarioImportDialogComponent} from './scenarios/scenario-import-dialog/scenario-import-dialog.component';
// import { MaterialFileInputModule } from 'ngx-material-file-input';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ExplainedComponent,
        FaqsComponent,
        TeamComponent,
        MastheadComponent,
        MandatoriesComponent,
        ShareDialogComponent,
        TutorialDialogComponent,
        AdvancedDialogComponent,
        ScenariosMenuComponent,
        ScenariosListComponent,
        ScenarioPreviewDialogComponent,
        SimulationComponent,
        InternalVariabilityForcingComponent,
        ModelParamsComponent,
        HighchartsChartComponent,
        ForcingComponent,
        ModelParamsDialogComponent,
        ModelParamsEditorDialogComponent,
        RunSimulationDialogComponent,
        ForcingOutputComponent,
        ModelParamsOutputComponent,
        OutputComponent,
        InternalVariabilityForcingOutputComponent,
        TSIForcingComponent,
        VolcanicsForcingComponent,
        SchoolsComponent,
        TutorialComponent,
        ScenarioImportDialogComponent
    ],
    bootstrap: [AppComponent],
    imports: [BrowserAnimationsModule,
        BrowserModule,
        AppMaterialModule,
        AppRoutingModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        LayoutModule,
        MatCardModule,
        MatDialogModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatGridListModule,
        MatExpansionModule,
        MatSlideToggleModule,
        MatButtonToggleModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatProgressBarModule,
        RouterModule
        // FileSaverModule,
        // MaterialFileInputModule
    ],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule {
}
