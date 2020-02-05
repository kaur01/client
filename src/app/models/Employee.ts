export class Employee {

  public readonly _id: string;
  public readonly name: string;
  public readonly dateOfBirth: Date;
  public readonly salary: number;
  public readonly skills: number[];
  public readonly photo: string;

  constructor(_id?: string, name?: string, dateOfBirth?: Date, salary?: number, skills?: number[], photo?: string) {
    this._id = _id;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.salary = salary;
    this.skills = skills;
    this.photo = photo;
  }
}
