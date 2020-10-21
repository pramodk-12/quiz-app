import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { StartComponent } from './start/start.component';
import { SummaryGuard } from './summary/summary.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './start/material-module';
import {MatNativeDateModule} from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    StartComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MaterialModule, 
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'home', component: StartComponent },
      { path: 'summary',canActivate: [SummaryGuard], component: SummaryComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  entryComponents: [StartComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

