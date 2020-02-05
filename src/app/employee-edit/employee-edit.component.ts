import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../models/Employee';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
})

export class EmployeeEditComponent implements OnInit {
  public employee: Employee;
  public employeeFormGroup: any;

  constructor(private httpClient: HttpClient, public formBuilder: FormBuilder, private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.employee = this.router.getCurrentNavigation().extras.state.employee;
    }
    this.employeeFormGroup = formBuilder.group({
      name: new FormControl(null, [Validators.required, Validators.pattern(/[A-Za-z ]+/)]),
      dateOfBirth: new FormControl(null, [Validators.required]),
      salary: new FormControl(null, [Validators.required, Validators.pattern(/[0-9]+/)]),
      skill: new FormControl(null, [Validators.required, Validators.pattern(/[0-9]+/)]),
      photo: new FormControl(null, [Validators.required, Validators.pattern(/[A-Za-z ]+/)]),
    });
  }


  ngOnInit(): void {
    if (this.employee) {
      this.employeeFormGroup.patchValue({
        name: this.employee.name,
        dateOfBirth: this.employee.dateOfBirth,
        salary: this.employee.salary,
        skill: this.employee.skills,
        photo: this.employee.photo
      });
    }
  }

  public async onSubmit(formGroup: FormGroup): Promise<void> {

    if (formGroup.invalid) {
      console.log(`Form is invalid. Not proceeding with submission.`);
      return;
    }
    const dateOfBirth = new Date(formGroup.controls['dateOfBirth'].value);
    const id = this.employee._id;
    const name = formGroup.controls['name'].value;
    const salary = formGroup.controls['salary'].value;
    const skill = formGroup.controls['skill'].value;
    const photo = formGroup.controls['photo'].value;
    const url = `https://localhost:3000/api/employee/${id}`;
    const employee = new Employee(id, name, dateOfBirth, salary, skill, photo);
    await this.httpClient.put<Employee>(url, employee).toPromise();
  }
}

