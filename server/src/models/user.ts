export interface UserType {
  email: string;
  password: string;
  tasks: string[];
  id: string;
}

export default class User implements UserType {
  email: string;
  password: string;
  public readonly id: string;
  public tasks: string[];

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
    this.tasks = [];
    this.id = new Date().toISOString(); //TODO: Add unique id for each user
  }

  //TODO: save current user state to db
  save(){

  }

  //TODO:
  updateEmail(newEmail: string) {
    this.email = newEmail;
  }

  //TODO:
  updatePassword(newPassword: string) {
    this.password = newPassword;
  }
}
