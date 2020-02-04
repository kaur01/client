import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListingComponent} from './employee-listing/employee-listing.component';
import {EmployeeAddComponent} from './add-employee/employee-add.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: EmployeeListingComponent
  },
  {
    path: 'employee/add',
    component: EmployeeAddComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
