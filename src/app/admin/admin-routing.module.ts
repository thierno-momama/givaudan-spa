import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTestComponent } from './components/add-test/add-test.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TestDetailsComponent } from './components/test-details/test-details.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'add', component: AddTestComponent},
  { path: 'tests/:testId', component: TestDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
