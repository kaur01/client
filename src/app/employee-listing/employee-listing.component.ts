import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Employee} from '../models/Employee';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.css']
})

export class EmployeeListingComponent implements OnInit {
  public employees: EmployeesTableElement[] = [];
  displayedColumns = ['id', 'name', 'dateOfBirth', 'salary', 'skills', 'photo', 'edits', 'deletes'];
  dataSource = new MatTableDataSource(this.employees);

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    await this.getTableData();
  }

  public async navigate(): Promise<void> {
    await this.router.navigate(['/employee/add']);
  }

  public async edit(employee: Employee): Promise<void> {
    await this.router.navigate(['/employee/edit'],  {state: {employee: employee}});
  }

  public async delete(employeeId: string): Promise<void> {
    const url = `http://localhost:3000/api/employee/${employeeId}`;
    await this.httpClient.delete<void>(url).toPromise();
    location.reload();
  }

  private async getTableData(): Promise<EmployeesTableElement[]> {
    const url = `http://localhost:3000/api/employee/`;
    const employeeList = await this.httpClient.get<Employee[]>(url).toPromise();
    employeeList.forEach(e => {
      this.employees.push({
        _id: e._id,
        name: e.name,
        dateOfBirth: e.dateOfBirth,
        salary: e.salary,
        skills: e.skills,
        photo: e.photo
      });
    });
    return this.employees;
  }
}

export interface EmployeesTableElement {
  _id: string;
  name: string;
  dateOfBirth: Date;
  salary: number;
  skills: number[];
  photo: string;
}
