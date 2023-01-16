import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddTestComponent } from './components/add-test/add-test.component';
import { TestDetailsComponent } from './components/test-details/test-details.component';
import { AuthModule } from '../auth/auth.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    DashboardComponent,
    AddTestComponent,
    TestDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AuthModule,
    MatFormFieldModule,
    MatSelectModule,
    MatStepperModule,
    MatButtonModule,
    MatRadioModule
  ]
})
export class AdminModule { }
