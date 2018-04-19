import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RichtextComponent } from './richtext/richtext.component';
import {app_rountig} from "./app.routes";
import { ToolsFilterPipe } from './home/tools-filter.pipe';
import { StrategyFilterPipe } from './home/strategy-filter.pipe';

import {HttpClientModule} from '@angular/common/http';
import { EditToolComponent } from './tools/edit/editTool.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { APP_CONFIG, CONECTATE_CONFIG } from './app.config';

// angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import 'hammerjs';
import { AddToolComponent } from './add-tool/add-tool.component';
import { LimitOfTextPipe } from './home/limit-of-text.pipe';
import { DetailToolComponent } from './detail-tool/detail-tool.component';
import { AddDrafExamplesComponent } from './add-draf-examples/add-draf-examples.component';
import { ApproveToolComponent } from './approve-tool/approve-tool.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolsFilterPipe,
    StrategyFilterPipe,
    RichtextComponent,
    EditToolComponent,
    TutorialComponent,
    AddToolComponent,
    LimitOfTextPipe,
    DetailToolComponent,
    AddDrafExamplesComponent,
    ApproveToolComponent
  ],
  imports: [
    BrowserModule,
    app_rountig,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONECTATE_CONFIG },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddDrafExamplesComponent
  ]
})
export class AppModule { }
