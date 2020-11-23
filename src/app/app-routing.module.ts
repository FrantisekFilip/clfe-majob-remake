import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitizenApplicationPageComponent } from './controls/citizen-application-page/citizen-application-page.component';
import { EmployeeApplicationPageComponent } from './controls/employee-application-page/employee-application-page.component';
import { HomePageComponent } from './controls/home-page/home-page.component';
import { KnownRoutes } from './known-routes';
import { BranchVisitPageComponent } from './controls/branch-visit-page/branch-visit-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: KnownRoutes.routeHome },
  { path: KnownRoutes.routeHome, component: HomePageComponent },
  { path: KnownRoutes.routeCitizenWizard, component: CitizenApplicationPageComponent },
  { path: KnownRoutes.routeEmployeeWizard, component: EmployeeApplicationPageComponent },
  { path: KnownRoutes.routeVisitBranch, component: BranchVisitPageComponent },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
