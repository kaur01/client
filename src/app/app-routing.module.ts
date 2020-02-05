import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListingComponent} from './employee-listing/employee-listing.component';
import {EmployeeAddComponent} from './add-employee/employee-add.component';
import {EmployeeEditComponent} from './employee-edit/employee-edit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: EmployeeListingComponent
  },
  {
    path: 'employee/add',
    component: EmployeeAddComponent
  },
  {
    path: 'employee/edit',
    component: EmployeeEditComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
