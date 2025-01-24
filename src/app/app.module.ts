import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppMaterialModule } from './app-material.module';
import { LayoutModule } from '@angular/cdk/layout';

// Import Angular Material modules individually
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './core/home/home.component';
import { ExplainedComponent } from './pages/explained/explained.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { TeamComponent } from './pages/team/team.component';
import { MastheadComponent } from './core/masthead/masthead.component';
import { MandatoriesComponent } from './core/mandatories/mandatories.component';
import { ShareDialogComponent } from './pages/share-dialog/share-dialog.component';
import { TutorialDialogComponent } from './pages/tutorial-dialog/tutorial-dialog.component';
import { AdvancedDialogComponent } from './pages/advanced-dialog/advanced-dialog.component';
import { ScenariosMenuComponent } from './scenarios/scenarios-menu/scenarios-menu.component';
import { ScenariosListComponent } from './scenarios/scenarios-list/scenarios-list.component';
import { ScenarioPreviewDialogComponent } from './scenarios/scenario-preview-dialog/scenario-preview-dialog.component';
import { SimulationComponent } from './simulation/simulation.component';
import { InternalVariabilityForcingComponent } from './inputs/internal-variability-forcing/internal-variability-forcing.component';
import { ModelParamsComponent } from './inputs/model-params/model-params.component';
import { HighchartsChartComponent } from './highcharts-chart/highcharts-chart.component';
import { ForcingComponent } from './inputs/forcing.component';
import { ModelParamsDialogComponent } from './inputs/model-params-dialog/model-params-dialog.component';
import { ModelParamsEditorDialogComponent } from './inputs/model-params-editor-dialog/model-params-editor-dialog.component';
import { RunSimulationDialogComponent } from './simulation/run-simulation-dialog/run-simulation-dialog.component';
import { ForcingOutputComponent } from './outputs/forcing-output/forcing-output.component';
import { ModelParamsOutputComponent } from './outputs/model-params-output/model-params-output.component';
import { OutputComponent } from './outputs/output/output.component';
import { InternalVariabilityForcingOutputComponent } from './outputs/internal-variability-forcing-output/internal-variability-forcing-output.component';
import { TSIForcingComponent } from './inputs/tsi-forcing/tsi-forcing.component';
import { VolcanicsForcingComponent } from './inputs/volcanics-forcing/volcanics-forcing.component';
import { SchoolsComponent } from './pages/schools/schools.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';
import { ScenarioImportDialogComponent } from './scenarios/scenario-import-dialog/scenario-import-dialog.component';

import { PapaParseModule } from 'ngx-papaparse';
import { FileSaverModule } from 'ngx-filesaver';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({ declarations: [
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
    bootstrap: [AppComponent], imports: [BrowserAnimationsModule,
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
        PapaParseModule,
        FileSaverModule,
        MaterialFileInputModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
