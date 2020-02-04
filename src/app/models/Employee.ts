export class Employee {

  public readonly _id: string;
  public readonly name: string;
  public readonly dob: Date;
  public readonly salary: number;
  public readonly skills: number[];
  public readonly photo: string;

  constructor(id?: string, name?: string, dob?: Date, salary?: number, skills?: number[], photo?: string) {
    this._id = id;
    this.name = name;
    this.dob = dob;
    this.salary = salary;
    this.skills = skills;
    this.photo = photo;
  }
}
