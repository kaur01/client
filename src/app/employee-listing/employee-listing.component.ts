import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Employee} from '../models/Employee';

@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
})

export class EmployeeListingComponent implements OnInit {
  public employees: EmployeesTableElement[] = [];
  displayedColumns = ['id', 'name', 'dateOfBirth', 'salary', 'skills', 'photo'];

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    await this.getTableData();
  }

  public async navigate(): Promise<void> {
    await this.router.navigate(['/employee/add']);
  }

  private async getTableData(): Promise<EmployeesTableElement[]> {
    const url = `https://localhost:3000/api/employee/`;
    const employeeList = await this.httpClient.get<Employee[]>(url).toPromise();
    employeeList.forEach(e => {
      this.employees.push({
        id: e._id,
        name: e.name,
        dateOfBirth: e.dob,
        salary: e.salary,
        skills: e.skills,
        photo: e.photo
      });
    });
    return this.employees;
  }
}

export interface EmployeesTableElement {
  id: string;
  name: string;
  dateOfBirth: Date;
  salary: number;
  skills: number[];
  photo: string;
}
